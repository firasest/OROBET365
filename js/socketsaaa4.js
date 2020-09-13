const limits = { rub: 1, eur: 1, sek: 1, pln: 1 };

var Sockets = function() {

    this.connect = function(data) {
        var socket = io.connect(socketUrl+'/', {secure: true, query: data});
        showIntervalWin(10);
        socket.on('winners', function (data) {
            if (typeof gamesjson === 'undefined') return;
            if (typeof data.win !== 'undefined' && parseFloat(data.win) > limits[data.cr.toLowerCase()] && typeof gamesjson[data.pr + '-' + data.gm] !== 'undefined') {
                lastWinData = data;
            }
        });

        socket.on('public', function (data) {
            switch(data.type) {
                case 'notify':
                    createNotify(data.notify);
                    break;
            }
        });

        socket.on('player', function (data) {
            switch(data.type) {
                case 'notify':
                    createNotify(data.notify);
                    break;
                case 'action':
                    actionWorker(data);
                    break;
                default:
                    if (!IS_MOBILE) {
                        playerdata(data);
                    }
            }
        });
    };

    var lastWinData = {};
    var showIntervalWin = function (timeout) {
        if (!timeout) {
            timeout = Math.round(Math.random() * 1000);
        }
        if (timeout < 500) {
            timeout = timeout + 800;
        }
        setTimeout(function() {
            winners(lastWinData);
            lastWinData = {};
            showIntervalWin();
        }, timeout)
    };

    var winners = function(data) {
        if (Object.keys(data).length === 0) {
            return;
        }
        var ingame = $('.sidebar__box').length > 0;
        if (ingame && data.pl.substr(0,5).toUpperCase() === PNAME.substr(0,5).toUpperCase()) return false;
        const el = gamesjson[data.pr + '-' + data.gm];
        const domel = $('.win-now > .win-now__list > li');
        var newwin = domel.last().clone();
        newwin.find('.win-now-user').text(data.pl + ' ' + t('won'));
        //newwin.find('.win-now-sum').text(data.cr.toUpperCase() + ' ' + data.win);
        newwin.find('.win-now-sum').text(Math.round(data.win) + ' ' + 'credits');
        newwin.find('.win-now_game').text(el['name']);
        newwin.find('> a').attr('href', window.location.protocol + '//' + window.location.hostname  + window.location.pathname.substr(0,3) + '/game/' + el['url']);
        newwin.find('.win-now-img > img.win_img').attr('src', el['image']);
        if (domel.length >= 5) {
            var remove;
            domel.each(function(index) {
                if (typeof $(this).attr('remove') === 'undefined') {
                    remove = $(this);
                    remove.attr('remove', 1);
                    return false;
                }
            });
            if (typeof remove === 'undefined') return;
            remove.slideUp(function () {
                $(this).remove();
            });
        }
        newwin.appendTo('.win-now > .win-now__list').fadeIn();
    };

    var wintimeout;
    var playerdata = function(data) {
        //console.log(data);
        /*if (typeof data.win != 'undefined') {
            var timeout = 2000;
            if (window.location.pathname.indexOf('roulet') > -1) timeout = 10000;
            wintimeout = setTimeout(function() {
                updatebalance(data)
            },  timeout);
        } else {
            if (wintimeout) clearTimeout(wintimeout);
            updatebalance(data);
        }*/

        var sportData = (data.gm === 'sport' && data.pr === 'digitain');
        var sportPage = !!window.location.pathname.match(/(\/[A-z]{2}\/sport)$/g);

        if (!sportData && typeof data.win !== 'undefined') return;

        updatebalance(data, sportData === sportPage);
        if (sportData !== sportPage) {
            return;
        }

        if (typeof data.rl !== 'undefined' && typeof data.rli !== 'undefined') {
            var rl = parseFloat(data.rl).toFixed(1);
            if (rl <= 0) return;
            var rli = parseFloat(data.rli).toFixed(1);

            $('.bonus_rollover').text((rli - rl).toFixed(1));
            $('.bonus_rollover_left').text(rl);
            var prc = Math.round((rli-rl)/rli*100) + '%';
            $('.player-progress').text(prc);
            $('.progress-bar > .roll').css('width', prc);
        }
    };

    var updatebalance = function(data, updateBonus) {
        var plbl = parseFloat($('.top .player-balance').text());
        var plbn = parseFloat($('.top .player-bonus').text());
        var bl = parseFloat(data.bl).toFixed(2);
        var bn = parseFloat(data.bn).toFixed(2);
        if (plbl !== bl) $('.player-balance').fadeOut(function () {
            $(this).text(bl);
        }).fadeIn();
        if (updateBonus && plbn !== bn) $('.player-bonus').fadeOut(function () {
            $(this).text(bn);
        }).fadeIn();
        wintimeout = null;
    };

    var createNotify = function(data) {
        createNotyMessage(data.text, data.timeout, data.messageType);
        if (typeof data.updatePlayerInfo !== 'undefined' && data.updatePlayerInfo === true) {
            updateUserInfo();
        }
    };

    var actionWorker = function(data) {
        switch(data.action) {
            case 'playerInfo':
                updateUserInfo();
                break;
            case 'createNewOrder':
                console.log('createNewOrder', data);
                createFallbackOrder(data.data);
                break;
        }
    }
};
