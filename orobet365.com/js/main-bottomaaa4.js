if (typeof $ != 'function') throw new Error('jQuery is required');

$(document).ready(
    function () {

        var GlobalTranslate = [];

        GlobalTranslate['ru_ok'] = 'Да';
        GlobalTranslate['ru_no'] = 'Нет';
        GlobalTranslate['ru_goplay'] = 'Играть дальше';
        GlobalTranslate['ru_withdraw'] = 'Вывести';
        GlobalTranslate['ru_reset'] = 'Отменить';
        GlobalTranslate['ru_resetmes'] = 'Ваш бонус будет отменен!!!';
        GlobalTranslate['ru_cancel'] = 'Отмена';
        GlobalTranslate['ru_replace'] = 'Заменить';
        GlobalTranslate['ru_merge'] = 'Объединить';

        GlobalTranslate['en_ok'] = 'Yes';
        GlobalTranslate['en_no'] = 'No';
        GlobalTranslate['en_goplay'] = 'Go Play';
        GlobalTranslate['en_withdraw'] = 'Withdraw';
        GlobalTranslate['en_reset'] = 'Reset';
        GlobalTranslate['en_resetmes'] = 'Your bonus will be canceled';
        GlobalTranslate['en_cancel'] = 'Cancel';
        GlobalTranslate['en_replace'] = 'Replace';
        GlobalTranslate['en_merge'] = 'Merge';

        GlobalTranslate['ro_ok'] = 'Da';
        GlobalTranslate['ro_no'] = 'Nu';
        GlobalTranslate['ro_goplay'] = 'Go Play';
        GlobalTranslate['ro_withdraw'] = 'Withdraw';
        GlobalTranslate['ro_reset'] = 'Reset';
        GlobalTranslate['ro_resetmes'] = 'Your bonus will be canceled';
        GlobalTranslate['ro_cancel'] = 'Anulare';
        GlobalTranslate['ro_replace'] = 'Înlocuieşte';
        GlobalTranslate['ro_merge'] = 'Îmbină';

        GlobalTranslate['de_ok'] = 'Ja';
        GlobalTranslate['de_no'] = 'Nein';
        GlobalTranslate['de_goplay'] = 'Geh spielen';
        GlobalTranslate['de_withdraw'] = 'Abheben';
        GlobalTranslate['de_reset'] = 'Zurücksetzen';
        GlobalTranslate['de_resetmes'] = 'Ihr Bonus wird storniert';
        GlobalTranslate['de_cancel'] = 'Stornieren';
        GlobalTranslate['de_replace'] = 'Ersetzen';
        GlobalTranslate['de_merge'] = 'Verschmelzen';

        GlobalTranslate['pl_ok'] = 'Tak';
        GlobalTranslate['pl_no'] = 'Nie';
        GlobalTranslate['pl_goplay'] = 'Kontynuować';
        GlobalTranslate['pl_withdraw'] = 'Wypłata';
        GlobalTranslate['pl_reset'] = 'Anulować';
        GlobalTranslate['pl_resetmes'] = 'Bonus zostanie anulowany!!!';
        GlobalTranslate['pl_cancel'] = 'Anulowanie';
        GlobalTranslate['pl_replace'] = 'Zastąpić';
        GlobalTranslate['pl_merge'] = 'Połączyć';

        GlobalTranslate['se_ok'] = 'Ja';
        GlobalTranslate['se_no'] = 'Nej';
        GlobalTranslate['se_goplay'] = 'Gå och lek';
        GlobalTranslate['se_withdraw'] = 'Dra tillbaka';
        GlobalTranslate['se_reset'] = 'Återställa';
        GlobalTranslate['se_resetmes'] = 'Din bonus kommer att avbrytas!!!';
        GlobalTranslate['se_cancel'] = 'Avbryt';
        GlobalTranslate['se_replace'] = 'Ersätt';
        GlobalTranslate['se_merge'] = 'Sammanfoga';

        GlobalTranslate['sv_ok'] = 'Ja';
        GlobalTranslate['sv_no'] = 'Nej';
        GlobalTranslate['sv_goplay'] = 'Gå och lek';
        GlobalTranslate['sv_withdraw'] = 'Dra tillbaka';
        GlobalTranslate['sv_reset'] = 'Återställa';
        GlobalTranslate['sv_resetmes'] = 'Din bonus kommer att avbrytas!!!';
        GlobalTranslate['sv_cancel'] = 'Avbryt';
        GlobalTranslate['sv_replace'] = 'Ersätt';
        GlobalTranslate['sv_merge'] = 'Sammanfoga';

        GlobalTranslate['uk_ok'] = 'Так';
        GlobalTranslate['uk_no'] = 'Ні';
        GlobalTranslate['uk_goplay'] = 'Грати далі';
        GlobalTranslate['uk_withdraw'] = 'Вивести';
        GlobalTranslate['uk_reset'] = 'Скасувати';
        GlobalTranslate['uk_resetmes'] = 'Ваш бонус буде скасований !!!!';
        GlobalTranslate['uk_cancel'] = 'Відміна';
        GlobalTranslate['uk_replace'] = 'Замінити';
        GlobalTranslate['uk_merge'] = 'Об`єднати';

        GlobalTranslate['zh_ok'] = 'Yes';
        GlobalTranslate['zh_no'] = 'No';
        GlobalTranslate['zh_goplay'] = 'Go Play';
        GlobalTranslate['zh_withdraw'] = 'Withdraw';
        GlobalTranslate['zh_reset'] = 'Reset';
        GlobalTranslate['zh_resetmes'] = 'Your bonus will be canceled';
        GlobalTranslate['zh_cancel'] = 'Cancel';
        GlobalTranslate['zh_replace'] = 'Replace';
        GlobalTranslate['zh_merge'] = 'Merge';

        GlobalTranslate['tr_ok'] = 'Yes';
        GlobalTranslate['tr_no'] = 'No';
        GlobalTranslate['tr_goplay'] = 'Go Play';
        GlobalTranslate['tr_withdraw'] = 'Withdraw';
        GlobalTranslate['tr_reset'] = 'Reset';
        GlobalTranslate['tr_resetmes'] = 'Your bonus will be canceled';
        GlobalTranslate['tr_cancel'] = 'Cancel';
        GlobalTranslate['tr_replace'] = 'Replace';
        GlobalTranslate['tr_merge'] = 'Merge';

        //Scroll to deposit

        // $(document).ready(function () {
        //     if ($('#tab').length>0)
        //     $("html, body").animate({scrollTop: $('#tab').offset().top - 165}, 1000, 'easeInOutQuart');
        // });
        // $(function () {
        //     $(".sidebar-nav__list li:last-child").click(function () {
        //         $("html, body").animate({scrollTop: $('#tab').offset().top - 165}, 1000, 'easeInOutQuart');
        //     });
        // });
        // $(function () {
        //     $(".sidebar-nav__list li:first-child").click(function () {
        //         $("html, body").animate({scrollTop: $('#tab').offset().top - 165}, 1000, 'easeInOutQuart');
        //     });
        // });

        //Browser detect

        function get_browser() {
            var ua = navigator.userAgent,
                tem,
                M = ua.match(/(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i) || [];
            if (/trident/i.test(M[1])) {
                tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
                return 'IE';
            }
            if (M[1] === 'Chrome') {
                tem = ua.match(/\bOPR\/(\d+)/)
                if (tem != null) {
                    return 'opera'
                }
            }
            M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, '-?'];
            if ((tem = ua.match(/version\/(\d+)/i)) != null) {
                M.splice(1, 1, tem[1]);
            }
            return M[0];
        }

        var browserName = get_browser();

        if ($('.plugin_box').length > 0) {
            $('.plugin_ico').prop('class', 'plugin_ico_' + browserName.toLowerCase());
            // console.log('.install_' + browserName.toLowerCase());
            $('.install_' + browserName.toLowerCase()).show();
            //console.log(ua);
        }


        $('.plugin_close').on('click', function (e) {
            e = e || window.event;
            e.preventDefault();
            $.ajax(
                {
                    type: "POST",
                    data: 'hide=1',
                    url: '/ajax/plugin',
                    beforeSend: function () {
                        $('.plugin_widget').hide();
                    },
                    success: function (data) {
                    },
                    error: function (msg) {
                    }
                }
            );
            return false;
        });

        /*function isMobile(){
         if(/android|webos|iphone|ipad|ipod|blackberry|opera mini|Windows Phone|iemobile|WPDesktop|XBLWP7/i.test(navigator.userAgent.toLowerCase())) {
         jQuery('#mobile').show().addClass('shadow');
         }
         }*/
        function isMobile() {
            if (/android|opera mini/i.test(navigator.userAgent.toLowerCase())) {
                jQuery('#mobile').show().addClass('shadow');
            }
        }

        // isMobile();

        $('.mobile_close').on('click', function (e) {
            e = e || window.event;
            e.preventDefault();
            $.ajax(
                {
                    type: "POST",
                    data: 'hide=1',
                    url: '/ajax/mobile',
                    beforeSend: function () {
                        $('.mobile_widget').hide();
                    },
                    success: function (data) {
                    },
                    error: function (msg) {
                    }
                }
            );
            return false;
        });

        $('#close_mobile').on('click', function (e) {
            e = e || window.event;
            //e.preventDefault();
            $.ajax(
                {
                    type: "POST",
                    data: 'hide=1',
                    url: '/ajax/mobile',
                    beforeSend: function () {
                        $('.mobile_widget').hide();
                        setTimeout('$(".mobile_widget").show()', 86400000);


                    },
                    success: function (data) {
                    },
                    error: function (msg) {
                    }
                }
            );
            return true;
        });

        $('#close').on('click', function (e) {
            e = e || window.event;
            //e.preventDefault();
            $.ajax(
                {
                    type: "POST",
                    data: 'hide=1',
                    url: '/ajax/plugin',
                    beforeSend: function () {
                        $('.plugin_widget').hide();
                        setTimeout('$(".plugin_widget").show()', 86400000);


                    },
                    success: function (data) {
                    },
                    error: function (msg) {
                    }
                }
            );
            return true;
        });


        $('#hide_payment_details').on('click', function (e) {
            if ($(this).prop('checked')) {
                // console.log('checked');
                $('.profile__history__table').find('td:nth-child(3)').css('color', 'transparent');
            } else {
                $('.profile__history__table').find('td:nth-child(3)').css('color', '#312f29');

                // console.log('unchecked');

            }
        });

        //Переменные
        var $formStyled = $('.styled'), 	 			//стилизация форм
            $formStyledCountry = $('.styled-country'), 	 			//стилизация форм
            $popupInit = $(".popup-open"),			//вызов попапов
            $popupErrorInit = $(".popup-open-error"),			//вызов попапов ошибок
            $popupRegInit = $(".popup-open-reg"),			//вызов попапов регистрации
            $sliderInit = $('.bxslider'),
            $gamesCarousel;  			//вызов слайдеров


        //Стилизация форм
        if ($formStyled.length) {
            $formStyled.styler();
        }
        if ($formStyledCountry.length) {
            $formStyledCountry.styler();
        }

        var $userInfo = $('#user-info'),
            $userInfoBtn = $userInfo.find('.btn_login'),
            $userInfoSub = $userInfo.find('.user-info__sub'),
            $langswitcher = $('.lang-switcher');

        $userInfoBtn.on("click touchstart", function () {
            if (!$userInfo.is('.open')) {
                $userInfo.addClass('open');
                $userInfoSub.css('display', 'block');
            } else {
                $userInfo.removeClass('open');
                $userInfoSub.css('display', 'none');
            }
            // return false
        });


        //Поиск
        var $searchBox = $('#search-plugin'),
            $searchCont = $searchBox.find('.search-plugin__box'),
            $searchInput = $searchBox.find('.search-plugin__text'),
            $searchClose = $searchBox.find('.search_close'),
            $searchBtn = $searchBox.find('.search-plugin__btn');

        $searchBtn.on("click touchstart", function () {
            if (!$searchBox.is('.open')) {
                $searchBox.addClass('open');
                $searchCont.stop(true, true).animate({
                    width: 370
                }, 300, function () {
                    $('.search-plugin__text:text:first').focus();
                    // Animation complete.
                });
                $searchInput.css('display', 'block');
                $searchClose.css('display', 'block');
                // $('body').click();

                $langswitcher.removeClass('open');

                $userInfo.removeClass('open');
                $userInfoSub.css('display', 'none');

                return false
            }
        });

        $searchInput.autocomplete({
            forceFixPosition: true,
            deferRequestBy: 200,
            triggerSelectOnValidInput: false,
            // minChars: 3,
            maxHeight: 485,
            appendTo: $('.header-top'),
            onSelect: function (suggestion) {
                $('body').fadeOut("slow");
                window.location.href = suggestion.data.url;
            },
            beforeRender: function (container, suggestions) {
                container.find('.autocomplete-suggestion').each(function (i) {
                    var html = '<div class="game-name">' + $(this).html() + '<\div>';
                    $(this)
                        .empty()
                        .prepend('<img height="30px" src="' + suggestions[i].data.image + '">')
                        .append(html);
                });
            },
            serviceUrl: '/ajax/searchGameAutoComplete',
            ajaxSettings: {
                type: 'POST',
                dataType: 'json'
            },
            transformResult: function (response) {
                return {
                    suggestions: $.map(response.response, function (dataItem) {
                        return {
                            value: dataItem.name,
                            data: dataItem.info
                        };
                    })
                };
            }
        });

        $(document).on("click touchstart", function (e) {
            var $clicked = $(e.target);

            // console.log($clicked);
            if (!$clicked.parents().is($searchBox)) {
                $searchBox.removeClass('open');
                $searchCont.stop(true, true).animate({
                    width: 70
                }, 300, function () {
                    $searchInput.css('display', 'none');
                    $searchClose.css('display', 'none');
                });
            }
            if (!$clicked.parents().is($langswitcher)) {
                $langswitcher.removeClass('open');

            }


            if (!$clicked.parents().is($userInfo)) {
                // $('.lang-switcher').removeClass('open');
                $userInfo.removeClass('open');
                $userInfoSub.css('display', 'none');
            }

        });

        $(document).on('keyup', function (evt) {
            if (evt.keyCode == 27) {
                $('body').click();
            }
        });

        var $verticalSlider = $('#games-slider-vertical');

        if ($('.game_page').length > 0) {
            $.mask();

            var windowWidth = $('.game-box__container').width(),
                //windowConstanta = 1.43,
                windowConstanta = 1.3333333333,
                gameHeight = 0,
                $gameBoxFlex = $('.flex-game-table__box'),
                $gameBox = $('.game-box__container'),
                $gameSidebarLeft = $('#sidebar-left'),
                $gameSidebarRight = $('#sidebar-right');


            var fullscreenBtn = $('.fullscreen-btn');

            fullscreenBtn.click(function () {

                var $gameBox = $('.flex-game-table__box');
                $gameBox.toggleClass('fullscreen');
                $(window).resize();
                $(window).resize();
                return false;
            });

            var game_frame_width = $('#game_frame').attr('width');
            var game_frame_height = $('#game_frame').attr('height');

            // if (game_frame_height < ($(window).width()))

            var good_param = game_frame_width / game_frame_height;
            var good_param_h = game_frame_height / game_frame_width;


            var g_width = ($(window).width() * 0.80);

            var g_height = g_width / good_param;


            if ((g_height + 175) >= $(window).height()) {

                g_width = ($(window).height() - 175) / good_param_h;
                g_height = g_width / good_param;


                $('.flex-game-table__game').width(g_width);//.height(g_width/good_param);

                $('#game_frame').width(g_width).height(g_height);
            } else {

                $('.flex-game-table__game').width(g_width);//.height(g_width/good_param);

                $('#game_frame').width(g_width).height((g_width) / good_param);
            }


            if (g_height - 250 < 54) {
                $('.winwin').height(0).css('overflow', 'hidden');
                $('.win-now__list').height(0).css('overflow', 'hidden');
            } else {
                $('.winwin').height(53 * (parseInt((g_height - 250) / 54))).css('overflow', 'hidden');
                $('.win-now__list').height(53 * (parseInt((g_height - 250) / 54))).css('overflow', 'hidden');
            }


            setTimeout(function () {
                $.unmask();
                $('.game_page').css('visibility', 'visible');
            }, 2000)

            //Подсчет высоты для главого контейнера
            function flexheight() {


                game_frame_width = $('#game_frame').attr('width');
                game_frame_height = $('#game_frame').attr('height');

                // if (game_frame_height < ($(window).width()))

                good_param = game_frame_width / game_frame_height;
                good_param_h = game_frame_height / game_frame_width;

                g_width = ($(window).width() * 0.80);

                g_height = g_width / good_param;

                if ((g_height + 175) >= $(window).height()) {

                    console.log('1');
                    g_width = ($(window).height() - 175) / good_param_h;
                    g_height = g_width / good_param;

                    $('.flex-game-table__game').width(g_width);//.height(g_width/good_param);

                    $('#game_frame').width(g_width).height(g_height);
                } else {
                    console.log('2');
                    $('.flex-game-table__game').width(g_width);//.height(g_width/good_param);

                    $('#game_frame').width(g_width).height((g_width) / good_param);
                }


                // if (g_height - 250 < 54) {
                //     $('.winwin').height(0).css('overflow', 'hidden');
                //     $('.win-now__list').height(0).css('overflow', 'hidden');
                // } else {
                //     $('.winwin').height(53 * (parseInt((g_height - 250) / 54))).css('overflow', 'hidden');
                //     $('.win-now__list').height(53 * (parseInt((g_height - 250) / 54))).css('overflow', 'hidden');
                // }

            }

            //Считаем высоту при первой загрузке
            //flexheight();
            //Обработчик при ресайзе
            $(window).on({
                resize: function () {
                    //Считаем высоту при ресайзе
                    flexheight();

                }
            });
        };


        if ($('div.our-games').length > 0) {
            // var game_box = $('.our-games__item').eq(2).outerWidth(true);
            var game_box = 200;
            if (window.matchMedia("(min-width: 1366px)").matches) {
                game_box = 260;
            }
            var gamesbox_width = Math.abs(($(document).outerWidth(true) - $(document).outerWidth(true) % game_box) / game_box) * game_box;
            // var gamesbox_width = Math.abs(($('body').outerWidth(true)-$('body').outerWidth(true)%game_box)/game_box)*game_box;

            $('#main div.our-games').width(gamesbox_width);
            // console.log(gamesbox_width);

        }
        // console.log('unmask');
        $.unmask();
        $('div.our-games').css('visibility', 'visible');
        //Обработчик при ресайзе
        $(window).on({
            resize: function () {
                // console.log($ourGamesSlider);


                // if ($ourGamesSlider != undefined) {
                //     console.log('#our-games__slider');
                //     $ourGamesSlider.reloadSlider();
                //     // $('#our-games__slider').reloadSlider();
                // }


                if ($('div.our-games').length > 0) {
                    // var game_box = $('.our-games__item').eq(2).outerWidth(true);
                    var game_box = 200;
                    if (window.matchMedia("(min-width: 1366px)").matches) {
                        game_box = 260;
                    }
                    // var gamesbox_width = Math.abs(($(document).outerWidth(true)-$(document).outerWidth(true)/game_box)/game_box)*game_box;
                    var gamesbox_width = Math.abs(($('body').outerWidth(true) - $('body').outerWidth(true) % game_box) / game_box) * game_box;
                    $('#main div.our-games').width(gamesbox_width);
                    // console.log(game_box);
                    // console.log(gamesbox_width);
                }

            }
        });


        var myCounter = null;


        function startJackPod() {

            var exampleOdometer = null;

            // exampleOdometer.render();

            // console.log('stjp');
            var casinoJackpot = new Ticker({info: 2, local: 0, casino: 'playtech', currency: CURRENCY});
            casinoJackpot.attachToTextBox('jackpot');
            casinoJackpot.SetCurrencySign(' ' + CURRENCY);
            casinoJackpot.SetCurrencyPos(1);
            casinoJackpot.updateInterval = 2000;
            casinoJackpot.tickingPeriod = 240 * 1000;


            casinoJackpot.showJackpot = function showJackpot() {
                var newvalue = this.getJackpot();

                if (this.type != 'count') {
                    newvalue = Math.round(newvalue * 100) / 100 + '';
                    if (newvalue.match(/^\d+\.\d$/)) {
                        newvalue = newvalue + '0';
                    }
                    if (newvalue.match(/^\d+$/)) {
                        newvalue = newvalue + '.00';
                    }
                }
                // console.log(newvalue);
                if (newvalue <= 0) return;


                if (!myCounter) {
                    $("#my_counter_1").html('');
                    myCounter = new Counter(
                        "my_counter_1", {
                            digitsNumber: (
                                parseInt(newvalue, 10) + ''
                            ).length,
                            direction: Counter.ScrollDirection.Upwards,
                            decimalPoints: 0,
                            decimalSeparator: '',
                            showDecimalSeparator: false,
                            characterSet: Counter.DefaultCharacterSets.numericUp,
                            charsImageUrl: "img/jackpot_number.png",
                            markerImageUrl: "img/jp_couner_box.png",
                            //charsImageUrl: "img/numeric_up_blackbg5.png",
                            //markerImageUrl: "img/jackpot-bg.png",
                            value: parseInt(newvalue, 10) + ''
                        }
                    );

                } else {
                    myCounter.setValue(parseInt(newvalue, 10) + '');
                }
                if ((parseInt(newvalue, 10) + '').length < 10) {
                    //$('.counter_marker').css('background-position','-36px')
                }

            };

            // console.log(casinoJackpot.tick());
        }


        function startJackPodDark() {

            var exampleOdometer = null;

            // exampleOdometer.render();

            var casinoJackpot = new Ticker({info: 2, local: 0, casino: 'playtech', currency: CURRENCY});
            casinoJackpot.attachToTextBox('jackpot');
            casinoJackpot.SetCurrencySign(' ' + CURRENCY);
            casinoJackpot.SetCurrencyPos(1);
            casinoJackpot.updateInterval = 2000;
            casinoJackpot.tickingPeriod = 240 * 1000;
            // console.log(casinoJackpot);

            casinoJackpot.showJackpot = function showJackpot() {
                var newvalue = this.getJackpot();

                if (this.type != 'count') {
                    newvalue = Math.round(newvalue * 100) / 100 + '';
                    if (newvalue.match(/^\d+\.\d$/)) {
                        newvalue = newvalue + '0';
                    }
                    if (newvalue.match(/^\d+$/)) {
                        newvalue = newvalue + '.00';
                    }
                }
                //console.log(newvalue);
                if (newvalue <= 0) return;


                if (!myCounter) {
                    // console.log('Ok');
                    $("#my_counter_2").html('');
                    myCounter = new Counter(
                        "my_counter_2", {
                            digitsNumber: (
                                parseInt(newvalue, 10) + ''
                            ).length,
                            direction: Counter.ScrollDirection.Upwards,
                            decimalPoints: 0,
                            decimalSeparator: '',
                            showDecimalSeparator: false,
                            characterSet: Counter.DefaultCharacterSets.numericUp,
                            charsImageUrl: "img/jackpot_number.png",

                            //charsImageUrl : "img/numeric_gold.png",
                            markerImageUrl: "img/dj-bg.png",
                            value: parseInt(newvalue, 10) + ''
                        }
                    );
                    $("#my_counter_2").show();

                } else {
                    myCounter.setValue(parseInt(newvalue, 10) + '');
                }
                if ((parseInt(newvalue, 10) + '').length < 10) {
                    //$('.counter_marker').css('background-position','-36px')
                }

            };

            casinoJackpot.tick();
        }

        //джекпот
        if ($('.jackpot-dark').length) {
            startJackPodDark();
        }

        //джекпот


        function getTimeRemaining(endtime) {
            var t = Date.parse(endtime) - Date.parse(new Date());
//         console.log(t);
            var seconds = Math.floor((t / 1000) % 60);
            var minutes = Math.floor((t / 1000 / 60) % 60);
            var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
            var days = Math.floor(t / (1000 * 60 * 60 * 24));
            return {
                'total': t,
                'days': days,
                'hours': hours,
                'minutes': minutes,
                'seconds': seconds
            };
        }

        function initializeClock(id, endtime) {
            //console.log(endtime);
            var clock = document.getElementById(id);
            var daysSpan = clock.querySelector('.days');
            var hoursSpan = clock.querySelector('.hours');
            var minutesSpan = clock.querySelector('.minutes');
            var secondsSpan = clock.querySelector('.seconds');

            function updateClock() {
                var t = getTimeRemaining(endtime);

                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

                if (t.total <= 0) {
                    clearInterval(timeinterval);
                }
            }

            updateClock();
            var timeinterval = setInterval(updateClock, 1000);
        }


        if ($('.tournament-table-sidebar').length) {
            $('.tournament-table-sidebar').each(function () {

                var deadline = new Date(Date.parse($(this).data('end') + ' 23:59:59'));
                // console.log(deadline);
                initializeClock($(this).data('alias'), deadline);
            });

        }
        if ($('.tournament-count-down').length) {


            var diff = $('.tournament-count-down').attr('date-diff');

            var clock;

            var FCLang = [];
            FCLang['ru'] = 'russian';
            FCLang['pl'] = 'poland';
            FCLang['en'] = 'english';
            FCLang['sv'] = 'english';
            FCLang['uk'] = 'ukrainian';

            clock = $('.tournament-count-down').FlipClock({
                clockFace: 'DailyCounter',
                autoStart: false,
                minimumDigits: diff > 8500000 ? 9 : 8,
                language: FCLang[LANG],

                callbacks: {
                    stop: function () {
                        $('.message').html('The clock has stopped!')
                    }
                }
            });
            clock.setTime(diff / 1);
            clock.setCountdown(true);
            clock.start();

        }


        if ($('.jackpot').length) {
            //console.log('ok');
            startJackPod();
        }


        $.extend($.fancybox.defaults, {
            padding: 0,
            closeBtn: true,
            'scrolling': 'visible',
            beforeShow: function () {
                //$('.clear').find('input').val('');

                if ($(this).prop('href').search('runtime') != -1) {
                    $(".fancybox-wrap").addClass("fancybox-custom-error");
                } else {
                    $(".fancybox-wrap").addClass("fancybox-custom");
                }
            }

        });

        //Попап простые
        if ($popupInit.length) {
            $popupInit.fancybox({
                padding: 0,
                closeBtn: true,
                'scrolling': 'visible',
                beforeShow: function () {
                    //$('.clear').find('input').val('');
                    $(".fancybox-wrap").addClass("fancybox-custom");
                }
            });
        }
        //Попап ошибки
        if ($popupErrorInit.length) {
            $popupErrorInit.fancybox({
                padding: 0,
                closeBtn: true,
                'scrolling': 'visible',
                beforeShow: function () {
                    $(".fancybox-wrap").addClass("fancybox-custom-error");
                }
            });
        }
        //Попап регстрации
        if ($popupRegInit.length) {
            $popupRegInit.fancybox({
                padding: 0,
                closeBtn: true,
                'scrolling': 'visible',
                onStart: function () {
                    // console.log('0');
                    // close fancybox after 3 seconds
                    setTimeout(function () {
                        $.fancybox.close();
                    }, 3000)
                },
                beforeShow: function () {
                    // console.log('1');
                    if (false) {
                        $.fancybox.close();
                        fancyconfirm('<b class="f22">Пополните Ваш игровой счет прямо сейчас и продолжайте игру</b>', {
                                buttons: [{
                                    class: "no",
                                    type: "button",
                                    title: "Пополнить",
                                    value: true
                                }, {
                                    class: "yes",
                                    type: "button",
                                    title: "Вернуться",
                                    value: false
                                }],
                                modal: false
                            },

                            function (resp) {
                                if (resp) {
                                    window.location = 'en/registrationd56b.html';
                                }
                                return resp;
                            }
                        );
                    }


                    $(".fancybox-wrap").addClass("fancybox-custom");
                }
            });
        }

        //Вызов слайдер Affiliate

        $('#our_aff').slick({
            // centerMode: true,
            autoplay: true,
            arrows: false,
            autoplaySpeed: 2000,
            centerPadding: '10px',
            slidesToShow: 8,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        arrows: false,
                        // centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 6,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 980,
                    settings: {
                        arrows: false,
                        // centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 4,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        // centerMode: true,
                        centerPadding: '20px',
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                }
            ]
        });


        //Вызов слайдеров
        if ($sliderInit.length) {
            var $ourGamesSlider = $('#our-games__slider'),
                $headerSlider = $('#header-slider'),
                $promoSlider = $('#promo-slider'),
                $promoSliderBox = $('#promo-slider_wrap'),
                $newsSlider = $('#our-games__news_slider');

            if ($sliderInit.is($ourGamesSlider)) {
                if ($ourGamesSlider.length > 1)
                    $ourGamesSlider.bxSlider({
                        pager: false
                    });
            }
            if ($($newsSlider).find('li').length > 1) {

                if ($sliderInit.is($newsSlider)) {
                    $newsSlider.bxSlider({
                        auto: true,
                        mode: 'fade',
                        autoHover: true,
                        pager: false,
                        touchEnabled: false
                    });
                    //    auto: true,
                    //    mode: 'fade',
                    //    autoHover: true,
                }
            } else {

                if ($sliderInit.is($newsSlider)) {
                    $newsSlider.bxSlider({
                        auto: true,
                        mode: 'fade',
                        autoHover: true,
                        pager: false,
                        touchEnabled: false
                    });
                    //    auto: true,
                    //    mode: 'fade',
                    //    autoHover: true,
                }
            }

            if ($sliderInit.is($headerSlider)) {
                $headerSlider.bxSlider({
                    auto: true,
                    mode: 'fade',
                    autoHover: true,
                    pager: false,
                    controls: false,
                    touchEnabled: false,
                    onSliderLoad: function (currentIndex) {
                        $headerSlider.find('li').eq(0).addClass('active-slide');
                    },
                    onSlideAfter: function ($slideElement) {
                        $slideElement.addClass('active-slide')
                    },
                    onSlideBefore: function ($slideElement) {
                        $('.header-slider').find('.bx-viewport').find('ul').children().removeClass('active-slide');

                    }
                });
            }
            $promoSlider.show();

            $promoSliderBox.css('visibility', 'visible');

            if ($sliderInit.is($promoSlider)) {
                $promoSlider.bxSlider({
                    // nextSelector: '#slider-promo-next',
                    // prevSelector: '#slider-promo-prev',
                    auto: true,
                    mode: 'fade',
                    autoHover: true,
                    slideWidth: 1080,
                    pager: false,
                    responsive: false,
                    oneToOneTouch: true,
                    controls: true,
                    touchEnabled: false
                    // onSliderLoad: function (currentIndex) {
                    //     console.log('onSliderLoad');
                    //     $promoSlider.find('li').eq(0).addClass('active-slide');
                    // },
                    // onSlideAfter: function ($slideElement) {
                    //     console.log('onSlideAfter');
                    //     $slideElement.addClass('active-slide')
                    // },
                    // onSlideBefore: function ($slideElement) {
                    //     console.log('onSlideBefore');
                    //     $slideElement.parent('.bx-viewport').find('ul').children().removeClass('active-slide');
                    //
                    //     $slideElement.addClass('active-slide')
                    //
                    // }
                });
            }

        }

        //Наведение на игры
        var $ourGames = $('#our-games'),
            $ourGamesItem = $ourGames.find('.our-games__item');

        $ourGamesItem.on({
            mouseenter: function () {
                var $this = $(this),
                    $sepia = $this.find('.sepia');
                $this.addClass('hover');
                $sepia.stop(true, true).fadeIn(300);
            },
            mouseleave: function () {
                var $this = $(this),
                    $sepia = $this.find('.sepia');
                $this.removeClass('hover');
                $sepia.stop(true, true).fadeOut(300);
            }
        });

        //Наведение на игры спорт
        var $ourGamesVsport = $('#our-games-vsport'),
            $ourGamesVsportItem = $ourGamesVsport.find('.our-games__item');

        $ourGamesVsportItem.on({
            mouseenter: function () {
                var $this = $(this),
                    $sepia = $this.find('.sepia');
                $this.addClass('hover');
                $sepia.stop(true, true).fadeIn(300);
            },
            mouseleave: function () {
                var $this = $(this),
                    $sepia = $this.find('.sepia');
                $this.removeClass('hover');
                $sepia.stop(true, true).fadeOut(300);
            }
        });

        function resizeWindow() {
            // console.log($sliderInit);
            if ($sliderInit.length) {


                // if ($sliderInit.is($newsSlider)) {
                //     clearTimeout(ts);
                //     ts = setTimeout(function () {
                //         console.log('resizeWindow');
                //         $newsSlider.reloadSlider();
                //     },300)
                // }


                //
                //var windowWidth = $(window).width();
                //
                //if ($sliderInit.is($gamesCarousel)) {
                //    $gamesCarousel.reloadSlider({
                //        speed: 1000,
                //        mode: 'horizontal',
                //        auto: true,
                //        autoHover: true,
                //        slideWidth: 180,
                //        minSlides: 3,
                //        maxSlides: 6,
                //        slideMargin: (windowWidth > 1841 ? 20 : 10),
                //        pager: false
                //    });
                //
                //}
            }
        }

        var load_more = true;
        //Переменные для скролла
        var a1 = a2 = a3 = null,
            c1 = c2 = c3 = $(window),
            d1 = d2 = d3 = false;

        if (!($('.landing').length)) {
            $(window).on({
                resize: function () {
                    resizeWindow();
                },
                scroll: function () {
                    //Логика при скролле
                    // console.log($(document).outerHeight());
                    // console.log(c1.scrollTop());
                    // console.log($(document).outerHeight()-c1.scrollTop());
                    // if (($(document).outerHeight()-c1.scrollTop())<1300){
                    //     if (load_more){
                    //         $('div.pager').find('a').click();
                    //     }
                    //     load_more = false;
                    // }
                    var e2 = c1.scrollTop() >= $('.header-slider').height() - $('.header-nav').height();
                    a2 || (a2 = $("body"));
                    if (!d2 && e2) {
                        $('.main').css({'padding-top': ($('.header-nav').height() + $('.header-top').height() + $('.decor-border').height() - 6)});
                        a2.addClass('fixed');
                        d2 = true;

                        //if ((window.location + '').search(/\#main$/gi) > 0) {
                        //    //console.log('ok');
                        //    setTimeout(
                        //        function () {
                        //            window.scrollTo(0, 309);
                        //        }, 0
                        //    );
                        //}
                    }
                    else if (d2 && !e2) {
                        a2.removeClass('fixed');
                        $('.main').css({'padding-top': 0});
                        d2 = false
                    }
                }
            });
        }
        //Запускаем обработчик


        jQuery.fn.log = function (msg) {
            console.log("%s: %o", msg, this);
            return this;
        };

        window.log = function (msg, obj) {
            if (obj) {
                console.log("%s: %o", msg, obj);
            } else {
                console.log("%o", msg);
            }
        };

        function runChat(e) {
            e = e || window.event;
            if (e != undefined) e.preventDefault();
            Tawk_API.toggle();
        }

        if (document.location.href.search(/[?,&]chat/gi) !== -1) {
            Tawk_API.onLoad = function () {
                runChat();
            };
        }

        if (document.location.href.search(/\?provider/gi) != -1) {
            function getQueryParams(qs) {
                qs = qs.split("+").join(" ");
                var params = {},
                    tokens,
                    re = /[?&]?([^=]+)=([^&]*)/g;

                while (tokens = re.exec(qs)) {
                    params[decodeURIComponent(tokens[1])]
                        = decodeURIComponent(tokens[2]);
                }

                return params;
            }

            var $_GET = getQueryParams(document.location.search);

            if ($_GET.provider != 'undefined') {
                $('.provider').find('[data-alias="' + $_GET.provider + '"]').parent().addClass('active');
            }

        }


        $('.open_chat').on('click', function () {
            runChat()
        });

        $.validator.addMethod("customemail", function (value, element) {
            return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
        }, "Неправильный формат е-майл адреса");

        if (LANG == 'pl') {

            $.validator.addMethod("customemail", function (value, element) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            }, "Nieprawidłowy format adresu e-mail");

            $.extend($.validator.messages, {
                required: "To pole jest wymagane.",
                remote: "Proszę o wypełnienie tego pola.",
                email: "Proszę o podanie prawidłowego adresu email.",
                url: "Proszę o podanie prawidłowego URL.",
                date: "Proszę o podanie prawidłowej daty.",
                dateISO: "Proszę o podanie prawidłowej daty (ISO).",
                number: "Proszę o podanie prawidłowej liczby.",
                digits: "Proszę o podanie samych cyfr.",
                creditcard: "Proszę o podanie prawidłowej karty kredytowej.",
                equalTo: "Proszę o podanie tej samej wartości ponownie.",
                extension: "Proszę o podanie wartości z prawidłowym rozszerzeniem.",
                maxlength: $.validator.format("Proszę o podanie nie więcej niż {0} znaków."),
                minlength: $.validator.format("Proszę o podanie przynajmniej {0} znaków."),
                rangelength: $.validator.format("Proszę o podanie wartości o długości od {0} do {1} znaków."),
                range: $.validator.format("Proszę o podanie wartości z przedziału od {0} do {1}."),
                max: $.validator.format("Proszę o podanie wartości mniejszej bądź równej {0}."),
                min: $.validator.format("Proszę o podanie wartości większej bądź równej {0}."),
                pattern: $.validator.format("Pole zawiera niedozwolone znaki.")
            });
        } else if (LANG == 'sv') {

            $.validator.addMethod("customemail", function (value, element) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            }, "Wrong e-mail format");
        } else if (LANG == 'ru') {
            $.extend($.validator.messages, {
                required: "Это поле необходимо заполнить.",
                remote: "Пожалуйста, введите правильное значение.",
                email: "Пожалуйста, введите корректный адрес электронной почты.",
                url: "Пожалуйста, введите корректный URL.",
                date: "Пожалуйста, введите корректную дату.",
                dateISO: "Пожалуйста, введите корректную дату в формате ISO.",
                number: "Пожалуйста, введите число.",
                digits: "Пожалуйста, вводите только цифры.",
                creditcard: "Пожалуйста, введите правильный номер кредитной карты.",
                equalTo: "Пожалуйста, введите такое же значение ещё раз.",
                extension: "Пожалуйста, выберите файл с правильным расширением.",
                maxlength: $.validator.format("Пожалуйста, введите не больше {0} символов."),
                minlength: $.validator.format("Пожалуйста, введите не меньше {0} символов."),
                rangelength: $.validator.format("Пожалуйста, введите значение длиной от {0} до {1} символов."),
                range: $.validator.format("Пожалуйста, введите число от {0} до {1}."),
                max: $.validator.format("Пожалуйста, введите число, меньшее или равное {0}."),
                min: $.validator.format("Пожалуйста, введите число, большее или равное {0}.")
            });
            $.validator.addMethod("customemail", function (value, element) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            }, "Неправильный формат е-майл адреса");
        } else {
            $.extend($.validator.messages, {});
            $.validator.addMethod("customemail", function (value, element) {
                return /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(value);
            }, "Malformed email address");
        }
        //$(".ajax-profile-form").validate({errorPlacement: function (error, element) {}});
        $(".ajax-register-form_game").validate({
            rules: {
                login: {
                    required: true,
                    minlength: 5,
                    maxlength: 25
                },
                email: {
                    required: true,
                    maxlength: 100
                },
                password: {
                    required: true,
                    minlength: 6
                },
                retype: {
                    required: true,
                    minlength: 6
                },
                accept: {
                    required: true,
                }
            }
        });

        $(".ajax-profile-form").validate({
            rules: {
                login: {
                    required: true,
                    minlength: 5,
                    maxlength: 25
                },
                email: {
                    required: true,
                    maxlength: 100
                },
                password: {
                    required: true,
                    minlength: 6
                },
                retype: {
                    required: true,
                    minlength: 6
                },
                accept: {
                    required: true,
                }
            }
        });
        $(".ajax-edit-form").validate({
            rules: {
                login: {
                    required: true,
                    minlength: 5,
                    maxlength: 25
                },
                email: {
                    required: true,
                    maxlength: 100
                },
                password: {
                    required: true,
                    minlength: 6
                },
                retype: {
                    required: true,
                    minlength: 6
                },
                accept: {
                    required: true
                }
            }
        });
        $(".ajax-change-password-form").validate({
            rules: {
                new: {
                    required: true,
                    minlength: 6
                },
                password: {
                    required: true,
                    minlength: 6
                },
                retype: {
                    required: true,
                    minlength: 6
                }
            }
        });
        //$(".ajax-register-form").validate({errorPlacement: function (error, element) {}});
        $(".ajax-withdraw-form").validate({
            errorPlacement: function (error, element) {
                //$.unmask();
            }
        });


        // $('a[data="play"]').on(
        //     'click', gameClick
        // );
        //
        // function gameClick(e) {
        //
        //     //console.log('start');
        //     //e = e || window.event;
        //     //e.preventDefault();
        //     //window.open(
        //     //    this.href,'_blank'
        //     //);
        //     // $.fn.soft2bet('playtechAuth');
        //     //return false;
        // }


        $(".update-info").on(
            'click', function (e) {
                // console.log('wwww');
                // console.log(e);
                var btn = $(this);
                if (btn.hasClass('disabled')) return;
                btn.addClass('disabled');

                var oldBalance = $('.player-balance').html();
                var oldBonus = $('.player-bonus').html();
                var oldBonus_rollover = $('.bonus_rollover').html();
                var oldBonus_rollover_left = $('.bonus_rollover_left').html();
                var oldProgress = $('.player-progress').html();
                var oldAp_point = $('.ap_point');
                var oldLoyaltyTitle = $('.loyalty_title');
                var oldMainBonus_rollover = $('.main_bonus_rollover');

                var oldbonus_created = $('.bonus_created');
                var oldbonus_expired = $('.bonus_expired');

                $('.player-balance, .player-bonus, .player-progress').html('<i class="fa fa-spinner faa-spin animated"></i>');
                $('.progress').css('width', 0 + '%');

                btn.soft2bet(
                    'updatePlayerInfo', {
                        beforeSend: function () {
                            btn.removeClass('disabled');
                            btn.each(
                                function () {
                                    $(this).contents().wrap('<p class="hide"></p>');
                                    $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                                }
                            );
                        },
                        success: function (data) {
                            //console.log(data);
                            // console.log(data);
                            btn.removeClass('disabled');
                            btn.each(
                                function () {
                                    $(this).find('i').remove();
                                    $(this).find('p.hide').contents().unwrap();
                                }
                            );

                            var sport = window.location.pathname.match(/(\/[A-z]{2}\/sport)$/g) || window.location.pathname.match(/(\/[A-z]{2}\/e-sport)$/g);
                            var balance = parseFloat(data.balance.toString().replace(',', '.')).toFixed(2);
                            var bonus = 0, playedRollover = 0, totalRollover = 0, progress = 0;
                            var sport_bonus = 0, sportPlayedRollover = 0, sportTotalRollover = 0, sportProgress = 0;

                            sport_bonus = parseFloat(data.sport_bonus.toString().replace(',', '.')).toFixed(2);
                            bonus = parseFloat(data.bonus.toString().replace(',', '.')).toFixed(2);
                            playedRollover = parseFloat(data.bonus_rollover.toString().replace(',', '.')).toFixed(1);
                            totalRollover = parseFloat(data.bonus_rollover_start.toString().replace(',', '.')).toFixed(1);
                            progress = parseInt(data.bonus_progress);

                            sportPlayedRollover = parseFloat(data.sport_bonus_played_rollover.toString().replace(',', '.')).toFixed(1);
                            sportTotalRollover = parseFloat(data.sport_bonus_total_rollover.toString().replace(',', '.')).toFixed(1);
                            sportProgress = (sportTotalRollover > 0 && sportTotalRollover > 0) ? parseInt((sportPlayedRollover / sportTotalRollover) * 100) : 0;
                            //console.log(sportTotalRollover, sportPlayedRollover);

                            var tabBonusSport = $('#tabbonus_sport');
                            var tabCasinoBonus = $('#tabbonus');
                            if (tabBonusSport.length !== 0 || tabCasinoBonus.length !== 0) {
                                tabBonusSport.find('.bonus_rollover_left').html(sportTotalRollover - sportPlayedRollover);
                                tabBonusSport.find('.player-bonus').html(sport_bonus);
                                tabBonusSport.find('.bonus_created').html(data.sport_bonus_created ? data.sport_bonus_created : '*');
                                tabBonusSport.find('.bonus_expired').html(data.sport_bonus_expires ? data.sport_bonus_expires : '*');
                                tabCasinoBonus.find('.bonus_rollover_left').html(totalRollover - playedRollover);
                                tabCasinoBonus.find('.player-bonus').html(bonus);
                                tabCasinoBonus.find('.bonus_created').html(data.bonus_created ? data.bonus_created : '*');
                                tabCasinoBonus.find('.bonus_expired').html(data.bonus_expired ? data.bonus_expired : '*');
                            }

                            if (sport) {
                                bonus = sport_bonus;
                                playedRollover = sportPlayedRollover;
                                totalRollover = sportTotalRollover;
                                progress = sportProgress;
                            }

                            if (data.kyc) {
                                $(".kyccontrol").each(function () {
                                    $(this).attr('href', "#kyc-form")
                                });
                            } else {
                                $(".kyccontrol").each(function () {
                                    $(this).attr('href', '#deposite-form-' + $(this).data('system'))
                                });
                            }

                            $('.header-top .player-balance').html(balance);
                            $('.header-top .ap_point').html(data.loyalty);
                            $('.header-top .loyalty_title').html(data.loyalty_title);
                            $('.header-top .player-bonus').html(bonus);
                            $('.header-top .bonus_rollover').html(playedRollover);
                            $('.header-top .bonus_rollover_left').html((totalRollover - playedRollover).toFixed(1));

                            $('.header-top .player-progress').html(progress + '%');
                            $('.header-top .progress-bar__value').css('width', progress + '%');
                            $('.header-top .progress').css('width', progress + '%');

                            $('.main_bonus_rollover').html(data.bonus_rollover_start);

                            var foundSportAutoBonus = false;
                            var foundCasinoAutoBonus = false;
                            for (var ia = 0; ia < data.my_bonus.length; ia++) {
                                console.log(data.my_bonus[ia]['type']);
                                if (sport && data.my_bonus[ia]['type'] === 'sport') {
                                    $('.user_info_refresh').addClass('active');
                                    foundSportAutoBonus = true;
                                    $('.user_info_refresh > a').attr('href', '/' + LANG + '/account/bonus_sport');
                                    break;
                                }
                                if (!sport && data.my_bonus[ia]['type'] === 'casino') {
                                    $('.user_info_refresh').addClass('active');
                                    foundCasinoAutoBonus = true;
                                    $('.user_info_refresh > a').attr('href', '/' + LANG + '/account/bonus');
                                    break;
                                }
                            }
                            if (sport && !foundSportAutoBonus) {
                                $('.user_info_refresh').removeClass('active');
                            }
                            if (!sport && !foundCasinoAutoBonus) {
                                $('.user_info_refresh').removeClass('active');
                            }
                            /*if (data.my_bonus_activ != undefined && data.my_bonus_activ == true){
                                $('.user_info_refresh').addClass('active');
                            } else {
                                $('.user_info_refresh').removeClass('active');
                            }*/


                            $('.stars').find('.active').removeClass('active');

                            $('.user-info__avatar').prop('class', 'user-info__avatar pull-left rang' + data.star);

                            $('.stars').find('li').each(function (i) {
                                if (i < data.star)
                                    $(this).addClass('active')
                            });

                            //if (true){
                            if ((parseInt(data.balance) + parseInt(data.bonus)) < 19 & $('html').hasClass('game') & !(getCookie('dep'))) {
                                // setCookie('dep', 1, {expires: 3600});
                                setCookie('dep', 1, 1 / 24);
                                fancyconfirm('<b class="f22">' + lowBalanceMsg + '</b>', {
                                        buttons: [{
                                            class: "no",
                                            type: "button",
                                            title: lowBalanceNoBtn,
                                            value: true
                                        }, {
                                            class: "yes",
                                            type: "button",
                                            title: lowBalanceYesBtn,
                                            value: false
                                        }],
                                        modal: false
                                    },

                                    function (resp) {
                                        if (resp) {
                                            window.location = 'en/registrationd56b.html';
                                        }
                                        return resp;
                                    }
                                );
                            }
                        },
                        error: function (msg) {
                            btn.removeClass('disabled');
                            btn.each(
                                function () {
                                    $(this).find('i').remove();
                                    $(this).find('p.hide').contents().unwrap();
                                }
                            );
                            $('.player-balance').html(oldBalance);
                            $('.player-bonus').html(oldBonus);
                            $('.bonus_rollover').html(oldBonus_rollover);
                            $('.bonus_rollover_left').html(oldBonus_rollover_left);

                            // console.log(oldProgress);

                            $('.player-progress').html(oldProgress);
                            $('.progress').css('width', parseInt(oldProgress) + '%');
                            $('.progress-bar__value').css('width', parseInt(oldProgress) + '%');


                            $('.bonus_created').html(oldbonus_created);
                            $('.bonus_expired').html(oldbonus_expired);

                            $('.main_bonus_rollover').html(oldMainBonus_rollover);

                            error(msg, true);

                            // window.location.reload();

                        }
                    }
                );


            }
        );
        var ResetBonusButton = $("#reset_bonus");
        ResetBonusButton.soft2bet(
            'reset_bonus', {
                beforeSend: function () {
                    $.mask();

                    // if (!$(this).valid()) return false;
                    // console.log('11');

                    ResetBonusButton.removeClass('disabled');
                    ResetBonusButton.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );


                },
                success: function (message) {
                    // console.log(message);
                    ResetBonusButton.removeClass('disabled');
                    ResetBonusButton.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    $.fancybox.close();

                    $(this).find('input[name="check"]').remove();

                    $('.main_bonus').removeClass('bonus_active');


                    $('.clear-reset').html('--------------');

                    $.unmask();
                    updateUserInfo();

                    success(message);
                },
                confirm: function (message) {
                    $('body').children('div.loadmask').remove();

                    var $this = $(this);

                    var $ajaxResetBonus = $(this).find('button[type="submit"]');
                    var $ajaxResetBonusSpan = $ajaxResetBonus.find('span');
                    $ajaxResetBonus.removeAttr('disabled');
                    $ajaxResetBonusSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    //console.log(message);
                    fancyconfirm(message, {
                            buttons: [{
                                class: "no",
                                type: "button",
                                title: GlobalTranslate[LANG + '_goplay'],//"Играть дальше",
                                value: false
                            }, {
                                class: "yes",
                                type: "button",
                                title: GlobalTranslate[LANG + '_reset'],//"Отменить",
                                value: true
                            }],
                            modal: true
                        },

                        function (resp) {
                            // console.log(resp);
                            if (resp) {
                                $this.append($("<input>", {
                                    type: "hidden",
                                    name: "check",
                                    value: resp,
                                }));
                                $this.click();
                                // console.log($this);

                            } else {
                                ResetBonusButton.removeClass('disabled');
                                ResetBonusButton.each(
                                    function () {
                                        $(this).find('i').remove();
                                        $(this).find('p.hide').contents().unwrap();
                                    }
                                );
                                $.fancybox.close();
                            }
                            return resp;
                        });


                },
                error: function (msg) {
                    btn.removeClass('disabled');
                    btn.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );

                    error(msg, true);
                    $.unmask();

                }
            }
        );

        var ResetBonusButtonPage = $("#tabbonus .reset_main_bonus");
        ResetBonusButtonPage.soft2bet(
            'reset_bonus', {
                beforeSend: function () {
                    $.mask();

                    // if (!$(this).valid()) return false;
                    // console.log('11');

                    ResetBonusButtonPage.removeClass('disabled');
                    ResetBonusButtonPage.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );


                },
                success: function (message) {

                    // $(this).closest('tr').find('td').html('');
                    // console.log(message);
                    ResetBonusButtonPage.removeClass('disabled');
                    ResetBonusButtonPage.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    $.fancybox.close();


                    $(this).find('input[name="check"]').remove();
                    $('#tabbonus .main_bonus').removeClass('bonus_active');

                    $.unmask();


                    $('#confirm').find('input[name=check]').remove();
                    // $('#reset_bonus_page').remove();

                    $('.clear-reset').html('--------------');

                    // location.reload();
                    updateUserInfo();

                    success(message);
                },
                confirm: function (message) {
                    $('body').children('div.loadmask').remove();

                    var $this = $(this);

                    var $ajaxResetBonus = $(this).find('button[type="submit"]');
                    var $ajaxResetBonusSpan = $ajaxResetBonus.find('span');
                    $ajaxResetBonus.removeAttr('disabled');
                    $ajaxResetBonusSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    //console.log(message);
                    fancyconfirm(message, {
                            buttons: [{
                                class: "no",
                                type: "button",
                                title: GlobalTranslate[LANG + '_ok'],//"Отменить",
                                value: true
                            }, {
                                class: "yes",
                                type: "button",
                                title: GlobalTranslate[LANG + '_no'],//"Играть дальше",
                                value: false
                            }],
                            modal: true
                        },

                        function (resp) {
                            // console.log(resp);
                            if (resp) {
                                $this.append($("<input>", {
                                    type: "hidden",
                                    name: "check",
                                    value: resp,
                                }));
                                $this.click();
                                // console.log($this);

                            } else {
                                ResetBonusButtonPage.removeClass('disabled');
                                ResetBonusButtonPage.each(
                                    function () {
                                        $(this).find('i').remove();
                                        $(this).find('p.hide').contents().unwrap();
                                    }
                                );
                                $.fancybox.close();

                            }
                            return resp;
                        });


                },
                error: function (msg) {
                    /*btn.removeClass('disabled');
                    btn.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );*/

                    error(msg, false);
                    $.unmask();

                }
            }
        );

        var ResetSportBonusButtonPage = $("#tabbonus_sport .reset_main_bonus, #reset_bonus_sport");
        ResetSportBonusButtonPage.soft2bet(
            'resetbonus_sport', {
                beforeSend: function () {
                    $.mask();

                    // if (!$(this).valid()) return false;
                    // console.log('11');

                    ResetBonusButtonPage.removeClass('disabled');
                    ResetBonusButtonPage.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );


                },
                success: function (message) {

                    // $(this).closest('tr').find('td').html('');
                    // console.log(message);
                    ResetBonusButtonPage.removeClass('disabled');
                    ResetBonusButtonPage.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    $.fancybox.close();


                    $(this).find('input[name="check"]').remove();
                    $('#tabbonus_sport .main_bonus').removeClass('bonus_active');

                    $.unmask();


                    $('#confirm').find('input[name=check]').remove();
                    // $('#reset_bonus_page').remove();

                    $('.clear-reset').html('--------------');

                    // location.reload();
                    updateUserInfo();

                    success(message);
                },
                confirm: function (message) {
                    $('body').children('div.loadmask').remove();

                    var $this = $(this);

                    var $ajaxResetBonus = $(this).find('button[type="submit"]');
                    var $ajaxResetBonusSpan = $ajaxResetBonus.find('span');
                    $ajaxResetBonus.removeAttr('disabled');
                    $ajaxResetBonusSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    //console.log(message);
                    fancyconfirm(message, {
                            buttons: [{
                                class: "no",
                                type: "button",
                                title: GlobalTranslate[LANG + '_ok'],//"Отменить",
                                value: true
                            }, {
                                class: "yes",
                                type: "button",
                                title: GlobalTranslate[LANG + '_no'],//"Играть дальше",
                                value: false
                            }],
                            modal: true
                        },

                        function (resp) {
                            // console.log(resp);
                            if (resp) {
                                $this.append($("<input>", {
                                    type: "hidden",
                                    name: "check",
                                    value: resp,
                                }));
                                $this.click();
                                // console.log($this);

                            } else {
                                ResetBonusButtonPage.removeClass('disabled');
                                ResetBonusButtonPage.each(
                                    function () {
                                        $(this).find('i').remove();
                                        $(this).find('p.hide').contents().unwrap();
                                    }
                                );
                                $.fancybox.close();

                            }
                            return resp;
                        });


                },
                error: function (msg) {
                    /*btn.removeClass('disabled');
                    btn.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );*/

                    error(msg, false);
                    $.unmask();

                }
            }
        );

        var ReplaceBonusButtonPage = $(".replace_bonus_page");
        ReplaceBonusButtonPage.soft2bet(
            'replace_bonus', {
                beforeSend: function () {
                    $.mask();

                    // if (!$(this).valid()) return false;
                    // console.log('11');

                    $(this).removeClass('disabled');
                    $(this).each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );


                },
                success: function (message) {
                    $(this).closest('tr').remove();

                    // $(this).closest('tr').find('td').html('');
                    // console.log(message);
                    $(this).removeClass('disabled');
                    $(this).each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    $.fancybox.close();

                    $(this).find('input[name="check"]').remove();
                    $.unmask();

                    // location.reload();
                    updateUserInfo();

                    success(message);
                },
                confirm: function (message) {
                    $('body').children('div.loadmask').remove();

                    var $this = $(this);

                    var $ajaxResetBonus = $(this).find('button[type="submit"]');
                    var $ajaxResetBonusSpan = $ajaxResetBonus.find('span');
                    $ajaxResetBonus.removeAttr('disabled');
                    $ajaxResetBonusSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    //console.log(message);
                    fancyconfirm(message, {
                            buttons: [{
                                class: "no",
                                type: "button",
                                title: GlobalTranslate[LANG + '_cancel'],//"Играть дальше",
                                value: false
                            }, {
                                class: "yes",
                                type: "button",
                                title: GlobalTranslate[LANG + '_replace'],//"Отменить",
                                value: true
                            }],
                            modal: true
                        },

                        function (resp) {
                            // console.log(resp);
                            if (resp) {
                                $this.append($("<input>", {
                                    type: "hidden",
                                    name: "check",
                                    value: resp,
                                }));
                                $this.click();
                                // console.log($this);

                            } else {
                                ReplaceBonusButtonPage.removeClass('disabled');
                                ReplaceBonusButtonPage.each(
                                    function () {
                                        $(this).find('i').remove();
                                        $(this).find('p.hide').contents().unwrap();
                                    }
                                );
                                $.fancybox.close();
                            }
                            return resp;
                        });


                },
                error: function (msg) {
                    $(this).removeClass('disabled');
                    $(this).each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );

                    error(msg, false);
                    $.unmask();

                }
            }
        );


        var ActivateBonusButtonPage = $(".activate_bonus_page");
        ActivateBonusButtonPage.soft2bet(
            'activate_bonus', {
                beforeSend: function () {
                    $.mask();

                    // if (!$(this).valid()) return false;
                    // console.log('11');

                    $(this).removeClass('disabled');
                    $(this).each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );


                },
                success: function (message) {

                    // $(this).closest('tr').find('td').html('');
                    // console.log(message);
                    $(this).removeClass('disabled');
                    $(this).each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    $.fancybox.close();


                    $(this).find('input[name="check"]').remove();
                    if ($(this).parents('#tabbonus_sport').length > 0) {
                        $('#tabbonus_sport .main_bonus').addClass('bonus_active');
                    } else {
                        //$('#tabbonus a.reset_main_bonus').show();
                        $('#tabbonus .main_bonus').addClass('bonus_active');
                    }
                    $(this).closest('tr').remove();

                    $.unmask();

                    // location.reload();
                    updateUserInfo();

                    success(message);
                },
                confirm: function (message) {
                    $('body').children('div.loadmask').remove();

                    var $this = $(this);

                    var $ajaxResetBonus = $(this).find('button[type="submit"]');
                    var $ajaxResetBonusSpan = $ajaxResetBonus.find('span');
                    $ajaxResetBonus.removeAttr('disabled');
                    $ajaxResetBonusSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    //console.log(message);
                    fancyconfirm(message, {
                            buttons: [{
                                class: "no",
                                type: "button",
                                title: GlobalTranslate[LANG + '_cancel'],//"Играть дальше",
                                value: false
                            }, {
                                class: "yes",
                                type: "button",
                                title: GlobalTranslate[LANG + '_ok'],//"Отменить",
                                value: true
                            }],
                            modal: true
                        },

                        function (resp) {
                            // console.log(resp);
                            if (resp) {
                                $this.append($("<input>", {
                                    type: "hidden",
                                    name: "check",
                                    value: resp,
                                }));
                                $this.click();
                                // console.log($this);

                            } else {
                                ActivateBonusButtonPage.removeClass('disabled');
                                ActivateBonusButtonPage.each(
                                    function () {
                                        $(this).find('i').remove();
                                        $(this).find('p.hide').contents().unwrap();
                                    }
                                );
                                $.fancybox.close();
                            }
                            return resp;
                        });


                },
                error: function (msg) {
                    $(this).removeClass('disabled');
                    $(this).each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );

                    error(msg, false);
                    $.unmask();

                }
            }
        );


        var MergeBonusButtonPage = $(".merge_bonus_page");
        MergeBonusButtonPage.soft2bet(
            'merge_bonus', {
                beforeSend: function () {
                    $.mask();

                    // if (!$(this).valid()) return false;
                    // console.log('11');

                    $(this).removeClass('disabled');
                    $(this).each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );


                },
                success: function (message) {

                    $(this).closest('tr').remove();
                    // console.log(message);
                    $(this).removeClass('disabled');
                    $(this).each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    $.fancybox.close();

                    $(this).find('input[name="check"]').remove();
                    $.unmask();
                    updateUserInfo();

                    success(message);
                },
                confirm: function (message) {
                    $('body').children('div.loadmask').remove();

                    var $this = $(this);

                    var $ajaxResetBonus = $(this).find('button[type="submit"]');
                    var $ajaxResetBonusSpan = $ajaxResetBonus.find('span');
                    $ajaxResetBonus.removeAttr('disabled');
                    $ajaxResetBonusSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    //console.log(message);
                    fancyconfirm(message, {
                            buttons: [{
                                class: "no",
                                type: "button",
                                title: GlobalTranslate[LANG + '_cancel'],//"Играть дальше",
                                value: false
                            }, {
                                class: "yes",
                                type: "button",
                                title: GlobalTranslate[LANG + '_merge'],//"Отменить",
                                value: true
                            }],
                            modal: true
                        },

                        function (resp) {
                            // console.log(resp);
                            if (resp) {
                                $this.append($("<input>", {
                                    type: "hidden",
                                    name: "check",
                                    value: resp,
                                }));
                                $this.click();

                            } else {

                                MergeBonusButtonPage.removeClass('disabled');
                                MergeBonusButtonPage.each(
                                    function () {
                                        $(this).find('i').remove();
                                        $(this).find('p.hide').contents().unwrap();
                                    }
                                );
                                $.fancybox.close();

                                // window.location = '/';
                            }
                            return resp;
                        });


                },
                error: function (msg) {
                    $(this).removeClass('disabled');
                    $(this).each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );

                    error(msg, false);
                    $.unmask();

                }
            }
        );


        window.updateUserInfo = function (e) {
            $(".update-info").click();
        };
        updateUserInfo();

        var link = (
            $('.update-info').length > 0
        ) ? 'game/[game_alias]/' : '#authorization-form';
        var target = (
            $('.update-info').length > 0
        ) ? 'data="play"' : '';


        $('form').each(
            function () {
                this.reset();
            }
        );

        $("a[target='support-win']").click(
            function (e) {
                e.preventDefault();
                //$("#jivo-label").click();
                Tawk_API.toggle();
            }
        );

        //Confirm Notification Box

        function fancyconfirm(msg, options, callback) {
            //console.log('aaaa');
            var ret = false;
            //console.log(1);
            $.fancybox("#confirm", {
                padding: 0,
                closeBtn: true,
                'scrolling': 'visible',
                modal: options.modal,
                beforeShow: function () {

                    $(".fancybox-wrap").addClass("fancybox-custom");
                    //this.content.prepend("<p class=\"title\"></p>");
                    this.content.find('.text-content p').html(msg);

                    if (options.buttons == null) {
                        options.buttons = [{
                            class: "no",
                            type: "button",
                            title: "Вернуться в игру",
                            value: false
                        }, {
                            class: "yes",
                            type: "button",
                            title: "Вывести",
                            value: true
                        }];
                    }

                    for (i = 0; i < options.buttons.length; i++) {
                        this.content.find('.button_box').append($("<button>", {
                            type: "button",
                            class: "btn confirm " + options.buttons[i].class,
                            value: options.buttons[i].value
                        }).data("index", i).html('<span>' + options.buttons[i].title + '</span>'));
                    }
                    $(this.content).css("text-align", "center");
                },
                afterShow: function () {
                    $(".confirm").on("click", function (event) {
                        ret = options.buttons[$(this).data("index")].value;
                        $.fancybox.close();
                    });
                },
                afterClose: function () {
                    this.content.find('.text-content p').html("");
                    this.content.find('.button_box').html("");
                    callback.call(this, ret);
                }
            });
        };


        var errorBlock = $('#runtime-error');
        var errorTextBlock = errorBlock.find('.text-content p');
        window.error = function (error, reload) {

            $('#runtime-error-link').fancybox({
                afterClose: function () {
                    if (typeof  reload != 'undefined' && reload == true)
                        window.location.reload(true);
                }
            });

            if (typeof error == 'number') {
                var message = (
                    errorMessages[error]
                ) ? errorMessages[error] : errorMessages[0];
                if (message.length > 0)
                    errorTextBlock.html(message);

                $('#runtime-error-link').click();

                //errorBlock.fadeIn('fast');
                //setTimeout(
                //    function () {
                //        errorBlock.fadeOut('slow');
                //    }, 3000
                //);
            }
            else if (typeof error == 'string') {
                errorTextBlock.html(error);

                $('#runtime-error-link').click();

                //errorBlock.fadeIn('fast');
                //setTimeout(
                //    function () {
                //        errorBlock.fadeOut('slow');
                //    }, 3000
                //);
            }
        };

        var successBlock = $('#runtime-info');
        var successTextBlock = successBlock.find('.text-content p');
        window.success = function (message, redirect) {
            if (message.length > 0)
                successTextBlock.html(message);
            $('#runtime-info-link').click();
            if (redirect != undefined && redirect == true)
                window.location = 'index.html';
        };

        //
        //var successBlock = $('#runtime-success');
        //var successTextBlock = successBlock.find('.text-content p');
        //window.success = function (message) {
        //    successTextBlock.html(message);
        //    $('#runtime-success-link').click();
        //};
        //
        //


        var infoBlock = $('#runtime-info');
        var infoTextBlock = infoBlock.find('.text-content p');
        window.info = function (message, redirect) {
            if (message.length > 0)
                infoTextBlock.html(message);
            $('#runtime-info-link').click();
            if (redirect != undefined && redirect == true)
                window.location = 'index.html';
        };

        var welcomeBlock = $('#runtime-welcome');
        var welcomeTextBlock = welcomeBlock.find('.text-content p');
        window.welcome = function (message, redirect) {
            if (message.length > 0)
                welcomeTextBlock.html(message);

            $('#runtime-welcome-link').click();
            if (redirect != undefined && redirect == true)
                window.location = 'index.html';

            //successBlock.fadeIn('fast');
            //setTimeout(
            //    function () {
            //        successBlock.fadeOut('slow');
            //    }, 3000
            //);
        };

        $("#datefrom").datepicker(
            {
                changeYear: true,
                //showOn: "button",
                //buttonImage: "img/calendar-icon.png",
                //buttonImageOnly: true,
                //buttonText: "Выберите дату отсчета",
                dateFormat: "dd.mm.yy",
                onClose: function (selectedDate) {
                    $("#dateto").datepicker("option", "minDate", selectedDate);
                },
                closeText: "X",
                showButtonPanel: true,
                showOtherMonths: true,
                selectOtherMonths: true
            }
        );
        $("#dateto").datepicker(
            {
                defaultDate: "+1d",
                changeYear: true,
                maxDate: "0d",
                //showOn: "button",
                //buttonImage: "img/calendar-icon.png",
                //buttonImageOnly: true,
                //buttonText: "Выберите дату завершения",
                dateFormat: "dd.mm.yy",
                onClose: function (selectedDate) {
                    $("#datefrom").datepicker("option", "maxDate", selectedDate);
                },
                closeText: "X",
                showButtonPanel: true,
                showOtherMonths: true,
                selectOtherMonths: true
            }
        );

        $('#period').on('change', function () {
            $("#datefrom").datepicker("setDate", $(this).find('option:selected').data('from'));
            $("#dateto").datepicker("setDate", $(this).find('option:selected').data('to'));
        });

        $('.datepicker').on('click', function () {
            $('#period').find('option[value=specific]').prop('selected', true);
            $('#period').trigger('refresh');
        });

        $('input[placeholder], textarea[placeholder]').placeholder();
        $('.styled').styler();
        if (window.PIE) {
            $('nav').each(
                function () {
                    PIE.attach(this);
                }
            );
        }

        var icons = {
            header: "icon-down",
            activeHeader: "icon-up"
        };

        $('.accordion').accordion({
            collapsible: true,
            autoHeight: true,
            heightStyle: "content",
            icons: icons
        });

        /* ---[ Pay_System Deposit]--- */
        var paymentBlockDeposit = $('.deposit-profile__pay-systems');
        var paymentHeadersDeposit = paymentBlockDeposit.find('.user-deposit-payment_mode__head__item a');
        var paymentTabsDeposit = paymentBlockDeposit.find('.user-deposit-payment_mode__tab');
        paymentHeadersDeposit.bind(
            'click', function (e) {
                e = e || window.event;
                e.preventDefault();

                //window.history.pushState(null, null, this.href);
                $(this).closest('.profile__pay-systems').find('.active').removeClass('active');
                $(this).parent().addClass('active');

                $(this).closest('.profile__pay-systems').find('.show_tab').addClass('hide');
                $(paymentTabsDeposit[paymentHeadersDeposit.index(this)]).removeClass('hide').addClass('show_tab');
            }
        );

        /* ---[ Pay_System Withdraw]--- */
        var paymentBlockWithdraw = $('.profile__pay-systems');
        var paymentHeadersWithdraw = paymentBlockWithdraw.find('.user-payment_mode__head__item a');
        var paymentTabsWithdraw = paymentBlockWithdraw.find('.user-payment_mode__tab');
        paymentHeadersWithdraw.bind(
            'click', function (e) {
                e = e || window.event;
                e.preventDefault();


                $(this).closest('.profile__pay-systems').find('.active').removeClass('active');
                $(this).parent().addClass('active');

                $(this).closest('.profile__pay-systems').find('.show_tab').addClass('hide');
                $(paymentTabsWithdraw[paymentHeadersWithdraw.index(this)]).removeClass('hide').addClass('show_tab');
            }
        );

        /* ---[ PROFILE ]--- */
        // var profileBlock = $('.user-profile');
        // var profileHeaders = profileBlock.find('.user-profile__head__item a');
        // var profileTabs = profileBlock.find('.user-profile__tab');


        var profileBlock = $('.account_page');
        var profileHeaders = profileBlock.find('.profile_top_nav_menu a');
        var profileTabs = $('#tab');
        profileHeaders.bind(
            'click', function (e) {
                e = e || window.event;
                e.preventDefault();

                window.history.pushState(null, null, this.href);
                $(this).parent().addClass('active').siblings().removeClass('active');


                // $('.user-info__nav').find('ul li').eq(profileHeaders.index(this)).addClass('active').siblings().removeClass('active');

                // $('.account_page_content').eq(profileHeaders.index(this)).find('active').addClass('active').siblings().removeClass('active');
                $('.account_page_content .tab_account').addClass('hide');
                $('.account_page_content .tab_account').eq(profileHeaders.index(this)).removeClass('hide');

                $('.account_page_content .user-profile__tab')
                    .eq($(this).parent('li').index())
                    .find('.active')
                    .removeClass('active')

                $('.account_page_content .user-profile__tab')
                    .eq($(this).parent('li').index())
                    .find('a[data-tab="' + $(this).data('tab') + '"]')
                    .parent('li').addClass('active')


                $(profileTabs).find('.user-profile__tab').addClass('hide');
                $(profileTabs).find('.user-profile__tab[data-tab="' + $(this).data('tab') + '"]').removeClass('hide');

                // $(profileTabs[profileHeaders.index(this)]).removeClass('hide').siblings().addClass('hide');
            }
        );
        /* ---[ PROFILE SUBMENU ]--- */
        var profileSubBlock = $('.account_page_content');
        var profileSubHeaders = profileSubBlock.find('a');
        profileSubHeaders.bind(
            'click', function (e) {
                e = e || window.event;
                e.preventDefault();

                window.history.pushState(null, null, this.href);
                $(this).parent().addClass('active').siblings().removeClass('active');


                $(profileTabs).find('.user-profile__tab').addClass('hide');
                $(profileTabs).find('.user-profile__tab[data-tab="' + $(this).data('tab') + '"]').removeClass('hide');

                // $('.user-info__nav').find('ul li').eq(profileHeaders.index(this)).addClass('active').siblings().removeClass('active');
                // $(profileTabs[profileHeaders.index(this)]).removeClass('hide').siblings().addClass('hide');
            }
        );

        /* ---[ POPUP FORMS ]--- */
        var fancyboxPreviousURL;
        $('a.fancybox').fancybox(
            {
                helpers: {
                    overlay: {
                        locked: false
                    },
                    title: null
                },
                beforeShow: function () {
                    var href = this.element.attr('href');
                    if (href) {
                        fancyboxPreviousURL = window.location + '';
                        window.history.pushState(null, null, href);
                    }
                },
                beforeClose: function () {
                    if (fancyboxPreviousURL) {
                        window.history.pushState(null, null, fancyboxPreviousURL);
                        fancyboxPreviousURL = null;
                    }
                }
            }
        );

        window.slideToTop = function () {
            $('html, body').animate(
                {
                    scrollTop: $(".main").offset().top
                }, 1000
            );

        };

        var paginator = $('div.pager');
        var widgetLI = $('ul.our-games__list li.our-games__item:first');
        var forwardAJAXLink = function (e) {
            e = e || window.event;
            e.preventDefault();

            var href = this.href;
            // window.history.pushState(null, null, href);

            $.ajax(
                {
                    type: "GET",
                    url: href,
                    beforeSend: function () {
                        // $.mask();
                    },
                    success: function (data) {
                        var HTML = $($.parseHTML(data));
                        // widgetLI.siblings('li').remove();


                        if (HTML.find('.our-games__item.big'))
                            HTML.find('.our-games__item.big').remove();

                        $('ul.our-games__list').append(HTML.find('.our-games__list .our-games__item'));


                        $ourGames = $('#our-games'),
                            $ourGamesItem = $ourGames.find('.our-games__item');

                        $ourGamesItem.on({
                            mouseenter: function () {
                                var $this = $(this),
                                    $sepia = $this.find('.sepia');
                                $this.addClass('hover');
                                $sepia.stop(true, true).fadeIn(300);
                            },
                            mouseleave: function () {
                                var $this = $(this),
                                    $sepia = $this.find('.sepia');
                                $this.removeClass('hover');
                                $sepia.stop(true, true).fadeOut(300);
                            }
                        });


                        var newNav = HTML.find('div.pager');
                        paginator.prop('innerHTML', newNav.prop('innerHTML'));
                        paginator.find('a').bind('click', forwardAJAXLink);

                        //$('.our-games a[target="_window"]').on('click', gameClick);
                        // if ($('div.our-games').length>0){
                        //     var game_box = $('.our-games__item').outerWidth(true);
                        //     var gamesbox_width = Math.abs(($('body').outerWidth(true)-$('body').outerWidth(true)%game_box)/game_box)*game_box;
                        //
                        //     $('#main div.our-games').width(gamesbox_width);
                        // }
                        // $.unmask();
                        // slideToTop()
                        load_more = true;
                    },
                    error: function () {

                        load_more = true;
                        $.unmask();
                    }
                }
            );
        };

        paginator.find('a').bind('click', forwardAJAXLink);

        $.fn.orderChildren = function (order) {
            this.each(function () {
                var el = $(this);
                for (var i = order.length; i >= 0; i--) {
                    el.prepend(el.children(order[i]));
                }
            });
            return this;
        };
        var mainMenu = $('div.header-nav');
        var mainMenuHeaders = $('ul.header-nav__list li');
        var our_games = $('section.our-games');
        var subMenuBox = $('div.sub_menu .header-nav__sub');
        var maimMenuAJAXLink = function (e) {

            if ($('#our-games-vsport').length > 0){
                return true
            }

            e = e || window.event;
            e.preventDefault();

            // var href = this.href+location.search;
            var href = this.href;
            var title = $(this).data('title');
            var $this = this;
            window.history.pushState(null, null, href);
            load_more = true;
            $.ajax(
                {
                    type: "GET",
                    url: href,
                    beforeSend: function () {
                        $.mask();
                    },
                    success: function (data) {
                        $(subMenuBox[mainMenuHeaders.index($($this).parent())]).find('.active').removeClass('active');
                        $($this).parent().addClass('active').siblings().removeClass('active');
                        $(subMenuBox[mainMenuHeaders.index($($this).parent())]).addClass('active').siblings().removeClass('active');
                        var HTML = $($.parseHTML(data));

                        document.title = title.substr(0, 1).toUpperCase() + title.toLowerCase().substr(1);


                        $('html').removeClass();
                        $('html').addClass((window.location.pathname).substring(1, window.location.pathname.length).replace('index.html', '_'));

                        var fixed = '';
                        if ($('body').hasClass('fixed')) {
                            fixed = ' fixed';
                        }


                        $('body').removeClass();
                        $('body').addClass((window.location.pathname).substring(1, window.location.pathname.length).replace('index.html', '_') + " lang-" + LANG);
                        $('body').addClass(fixed);
                        // $('div#pagetitle').remove();
                        // console.log(window.location.pathname);

                        if ($('section.our-games').length) {
                            $('section.our-games').find('ul.our-games__list li.our-games__item').remove();
                            //console.log(our_games.find('ul.our-games__list li.our-games__item').length);
                            $('section.our-games').find('ul.our-games__list').html(HTML.find('li.our-games__item'));


                            $('#jssor_1').find('div.provider_bord').find('a').unbind('click');
                            // $('#jssor_1').find('div.provider_bord').removeClass('disabled').removeClass('enabled');
                            $('#jssor_1').after($(HTML).find('#jssor_1')).remove();

                            // runBrand();
                            $('#jssor_1').find('div.provider_bord').find('a.enabled').bind('click', brandMenuAJAXLink);

                        } else {
                            $('#main > div.inside').html(HTML);
                            // $('#main > div.inside .main-content').html(HTML);
                            // startJackPod();
                            // getWinners();
                            if ($(HTML).find('#jssor_1').length > 0) {



                                // runBrand();

                                $(HTML).find('div.provider_bord').find('a').unbind('click');
                                $(HTML).find('div.provider_bord').find('a.enabled').bind('click', brandMenuAJAXLink);


                            }
                        }


                        runBrand();

                        $ourGames = $('#our-games'),
                            $ourGamesItem = $ourGames.find('.our-games__item');

                        if ($ourGamesItem.find('.tournament-table-sidebar').length) {
                            $ourGamesItem.find('.tournament-table-sidebar').each(function () {

                                var deadline = new Date(Date.parse($(this).data('end') + ' 23:59:59'));
                                // console.log(deadline);
                                initializeClock($(this).data('alias'), deadline);
                            });

                        }
                        $ourGamesItem.on({
                            mouseenter: function () {
                                var $this = $(this),
                                    $sepia = $this.find('.sepia');
                                $this.addClass('hover');
                                $sepia.stop(true, true).fadeIn(300);
                            },
                            mouseleave: function () {
                                var $this = $(this),
                                    $sepia = $this.find('.sepia');
                                $this.removeClass('hover');
                                $sepia.stop(true, true).fadeOut(300);
                            }
                        });


                        if ($('#our-games__news_slider').length) {
                            $('#our-games__news_slider').bxSlider({
                                auto: true,
                                mode: 'fade',
                                autoHover: true,
                                pager: true
                            });
                        }

                        var newNav = HTML.find('div.pager');
                        paginator.prop('innerHTML', newNav.prop('innerHTML'));
                        paginator.find('a').bind('click', forwardAJAXLink);

                        //window.startJackpotsGames($('.our-games__item .ticker'));
                        // tick_jackpot();
                        //$('.our-games a[data="play"]').on('click', gameClick);
                        if ($('div.our-games').length > 0) {
                            // var game_box = $('.our-games__item').eq(2).outerWidth(true);
                            var game_box = 200;
                            if (window.matchMedia("(min-width: 1366px)").matches) {
                                game_box = 260;
                            }
                            var gamesbox_width = (($(document).outerWidth(true) - $(document).outerWidth(true) % game_box) / game_box) * game_box;
                            // var gamesbox_width = (($('body').outerWidth(true)-$('body').outerWidth(true)%game_box)/game_box)*game_box;

                            $('#main div.our-games').width(gamesbox_width);
                        }
                        $.unmask();
                        $('div.our-games').css('visibility', 'visible');
                        //slideToTop()
                    },
                    error: function () {
                        $('div.our-games').css('visibility', 'visible');
                        $.unmask();
                    }
                }
            );
        };

        mainMenu.find('a').bind('click', maimMenuAJAXLink);


        var brandMenu = $('div.provider_bord');
        var brandMenuAJAXLink = function (e) {
            e = e || window.event;
            e.preventDefault();

            var href = location.protocol + '//' + location.host + location.pathname;


            // console.log(href);
            var title = $(this).data('alias');
            var $this = this;

            var filter = false;
            if (!$($this).parent().hasClass('active')) {
                href = href + '?provider=' + $(this).data('alias');
                filter = true;
            }


            window.history.pushState(null, null, href);
            load_more = true;
            $.ajax(
                {
                    type: "GET",
                    url: href,
                    beforeSend: function () {
                        $.mask();
                    },
                    success: function (data) {

                        if (filter) {
                            $($this).parent().addClass('active').siblings().removeClass('active');
                        } else {
                            $($this).parent().removeClass('active');
                        }
                        var HTML = $($.parseHTML(data));

                        if (filter)
                            HTML.find('.our-games__item.big').remove();


                        document.title = document.title.split(" ")[0] + ' - ' + title;
                        $('html').removeClass();
                        $('html').addClass((window.location.pathname).substring(1, window.location.pathname.length).replace('index.html', '_'));

                        // $('body').removeClass();
                        // $('body').addClass((window.location.pathname).substring(1, window.location.pathname.length).replace('/', '_') + " lang-" + LANG);
                        // $('div#pagetitle').remove();
                        // console.log(window.location.pathname);

                        if ($('section.our-games').length) {
                            $('section.our-games').find('ul.our-games__list li.our-games__item').remove();
                            //console.log(our_games.find('ul.our-games__list li.our-games__item').length);
                            $('section.our-games').find('ul.our-games__list').html(HTML.find('li.our-games__item'));

                        } else {
                            $('#main > div.inside .main-content').html(HTML);
                            // startJackPod();
                            // getWinners();
                        }
                        $ourGames = $('#our-games'),
                            $ourGamesItem = $ourGames.find('.our-games__item');

                        if ($ourGamesItem.find('.tournament-table-sidebar').length) {
                            $ourGamesItem.find('.tournament-table-sidebar').each(function () {

                                var deadline = new Date(Date.parse($(this).data('end') + ' 23:59:59'));
                                // console.log(deadline);
                                initializeClock($(this).data('alias'), deadline);
                            });

                        }
                        $ourGamesItem.on({
                            mouseenter: function () {
                                var $this = $(this),
                                    $sepia = $this.find('.sepia');
                                $this.addClass('hover');
                                $sepia.stop(true, true).fadeIn(300);
                            },
                            mouseleave: function () {
                                var $this = $(this),
                                    $sepia = $this.find('.sepia');
                                $this.removeClass('hover');
                                $sepia.stop(true, true).fadeOut(300);
                            }
                        });


                        if ($('#our-games__news_slider').length) {
                            $('#our-games__news_slider').bxSlider({
                                auto: true,
                                mode: 'fade',
                                autoHover: true,
                                pager: true
                            });
                        }

                        var newNav = HTML.find('div.pager');
                        paginator.prop('innerHTML', newNav.prop('innerHTML'));
                        paginator.find('a').bind('click', forwardAJAXLink);

                        //window.startJackpotsGames($('.our-games__item .ticker'));
                        // tick_jackpot();
                        //$('.our-games a[data="play"]').on('click', gameClick);
                        if ($('div.our-games').length > 0) {
                            // var game_box = $('.our-games__item').eq(2).outerWidth(true);
                            var game_box = 200;
                            if (window.matchMedia("(min-width: 1366px)").matches) {
                                game_box = 260;
                            }
                            var gamesbox_width = (($(document).outerWidth(true) - $(document).outerWidth(true) % game_box) / game_box) * game_box;
                            // var gamesbox_width = (($('body').outerWidth(true)-$('body').outerWidth(true)%game_box)/game_box)*game_box;

                            $('#main div.our-games').width(gamesbox_width);
                        }
                        $.unmask();
                        $('div.our-games').css('visibility', 'visible');
                        //slideToTop()
                    },
                    error: function () {
                        $('div.our-games').css('visibility', 'visible');
                        $.unmask();
                    }
                }
            );
        };

        brandMenu.find('a').unbind('click');
        brandMenu.find('a.enabled').bind('click', brandMenuAJAXLink);


        var paySystemsBlock = $('.pay__systems');
        var paySystemsHeaders = paySystemsBlock.find('.payment-systems__list li');
        var paySystemsTabs = paySystemsBlock.find('.pay_systems-content .pay_systems-content-item');
        paySystemsHeaders.find('a').bind(
            'click', function (e) {
                e = e || window.event;
                e.preventDefault();

                window.history.pushState(null, null, this.href);
                $(this).parent().addClass('active').siblings().removeClass('active');
                $(paySystemsTabs[paySystemsHeaders.index($(this).parent())]).addClass('active').siblings().removeClass('active');
            }
        );

        var bonusTable = $('table.bonus__table');
        bonusTable.find('a.bonus-terms-expand').bind(
            'click', function (e) {
                e = e || window.event;
                e.preventDefault();

                var i = $(this);
                if (i.hasClass('down')) {
                    i.removeClass('down').addClass('right');
                }
                else {
                    i.removeClass('right').addClass('down');
                }
                $(this).closest('tr').next().toggleClass('active');
                // console.log($(this));
                if ($(this).find('.minus').hasClass('visible_bonus')) {
                    $(this).find('.plus').addClass('visible_bonus');
                    $(this).find('.minus').removeClass('visible_bonus');
                }
                else {
                    $(this).find('.minus').addClass('visible_bonus');
                    $(this).find('.plus').removeClass('visible_bonus');
                }
            }
        );
        bonusTable.find('div.bonus-terms-expand').bind(
            'click', function (e) {
                e = e || window.event;
                e.preventDefault();

                var i = $(this);
                if (i.hasClass('down')) {
                    i.removeClass('down').addClass('right');
                }
                else {
                    i.removeClass('right').addClass('down');
                }
                $(this).closest('tr').next().toggleClass('active');

                if ($('.bonus-terms-expand .minus').hasClass('visible_bonus')) {
                    $('.bonus-terms-expand .plus').addClass('visible_bonus');
                    $('.bonus-terms-expand .minus').removeClass('visible_bonus');
                }
                else {
                    $('.bonus-terms-expand .minus').addClass('visible_bonus');
                    $('.bonus-terms-expand .plus').removeClass('visible_bonus');
                }
            }
        );


        var tournamentTable = $('table.tournament__table');
        tournamentTable.find('button.tournament-terms-expand').bind(
            'click', function (e) {
                e = e || window.event;
                e.preventDefault();

                var i = $(this);
                if (i.hasClass('down')) {
                    i.removeClass('down').addClass('right');
                }
                else {
                    i.removeClass('right').addClass('down');
                }
                $(this).closest('tr').next().toggleClass('active');
            }
        );
        tournamentTable.find('div.tournament-terms-expand').bind(
            'click', function (e) {
                e = e || window.event;
                e.preventDefault();

                var i = $(this);
                if (i.hasClass('down')) {
                    i.removeClass('down').addClass('right');
                }
                else {
                    i.removeClass('right').addClass('down');
                }
                $(this).closest('tr').next().toggleClass('active');
            }
        );

        $(".gotop").on('click', function (event) {
            event.preventDefault();
            $('body,html').animate({
                    scrollTop: 0,
                }, 600
            );
        });

        //
        // $("a").on('click', function (event) {
        //     console.log(event);
        // });


        // if ($('.cms-css').length === 0) {

            $('.cms-css').find('a.hash-nav').on('click', function (e) {
                e.preventDefault();
                // console.log($(this).hash);
                // console.log($(this).attr('href'));
                window.scrollTo(0, $($(this).attr('href')).offset().top - 140);
            })
            // var s_to = $('#' + hash).offset().top;
            // setTimeout(function () {
            //     window.scrollTo(0, s_to);
            //
            //     //$(document.body).animate({
            //     //    'scrollTop': s_to
            //     //}, 500);
            // }, 100);
        // }

        //
        // if ($('.lend').length == 0) {
        //
        //     if (window.location.hash) {
        //
        //         if ((window.location + '').search(/\#main$/gi) > 0) {
        //             setTimeout(
        //                 function () {
        //                     window.scrollTo(0, 294);
        //                 }, 500
        //             );
        //         } else {
        //             fancyboxPreviousURL = (
        //                 window.location + ''
        //             ).match(/([^#]+)#.*/)[1];
        //             var hash = window.location.hash;
        //
        //             if ($(hash).length > 0) {
        //                 setTimeout(
        //                     function () {
        //                         window.scrollTo(0, 0);
        //                     }, 0
        //                 );
        //                 $.fancybox(
        //                     hash, {
        //                         helpers: {
        //                             overlay: {
        //                                 locked: false
        //                             },
        //                             title: null
        //                         },
        //                         beforeClose: function () {
        //                             if (fancyboxPreviousURL) {
        //                                 window.history.pushState(null, null, fancyboxPreviousURL);
        //                                 fancyboxPreviousURL = null;
        //                             }
        //                         }
        //                     }
        //                 );
        //             } else {
        //                 if ($('[name="' + hash.replace('#', '') + '"]').length > 0) {
        //                     var s_to = $('[name="' + hash.replace('#', '') + '"]').offset().top - 40;
        //                     setTimeout(function () {
        //                         window.scrollTo(0, s_to);
        //
        //                         //$(document.body).animate({
        //                         //    'scrollTop': s_to
        //                         //}, 500);
        //                     }, 100);
        //
        //                 }
        //             }
        //
        //
        //         }
        //     }
        // }
        //

        function socialNetworkLogin() {
            window.history.pushState(null, null, window.location.href.split('#')[0]);
            $("#auto" +
                "" +
                "" +
                "" +
                "" +
                "" +
                "").remove();

            // var csrf = "<?php echo (isset($_SESSION['csrf']) ? $_SESSION['csrf'] : '')?>";
            $('body').append(
                '<form style="display: none;" id="autoLogin"><input type="hidden" name="login" value=""/>' +
                '<input type="hidden" name="password" value=""/><input type="hidden" name="csrf" value="social_login"/></form>'
            );

            $("#autoLogin").soft2bet(
                'login', {
                    beforeSend: function () {
                        $.unmask();
                        $.mask();
                    },
                    success: function () {
                        window.location = 'index.html';
                    },
                    error: function (msg) {
                        // console.log('socialNetworkLogin');
                        // console.log(msg);
                        if (msg.action == 'activation_required') {
                            $.unmask();

                            error(msg);
                        } else {
                            error(msg);
                            // $('[href="#email-form"]').click();
                            $.unmask();
                        }
                    }
                }
            );
            $("#autoLogin").submit();
        }

        var $ajaxSNCurrnecyForm = $('form.ajax-choose-currency-form');
        var $ajaxSNCurrnecyFormButton = $ajaxSNCurrnecyForm.find('button[type="submit"]');
        $ajaxSNCurrnecyForm.submit(function () {
            $.ajax(
                {
                    type: "POST",
                    data: $ajaxSNCurrnecyForm.serialize(),
                    url: '/ajax/social_set_currency',
                    beforeSend: function () {
                        $.mask();
                    },
                    success: function (data) {
                        // console.log('ajax-choose-currency-form');
                        // console.log(data);
                        if (data.error) {
                            error(data.error);
                        } else {
                            $.fancybox.close();
                            socialNetworkLogin();
                        }
                    },
                    error: function (msg) {
                        error(msg)
                        $.unmask();
                    }
                }
            );
            return false;
        });

        var $ajaxSNEmailForm = $('form.ajax-email-form');
        var $ajaxSNEmailFormButton = $ajaxSNEmailForm.find('button[type="submit"]');
        $ajaxSNEmailForm.submit(function () {
            $.ajax(
                {
                    type: "POST",
                    data: $ajaxSNEmailForm.serialize(),
                    url: '/ajax/social_set_email',
                    beforeSend: function () {
                        $.mask();
                    },
                    success: function (data) {
                        // console.log('ajax-email-form');
                        // console.log(data);
                        if (data.error) {
                            error(data.error);
                        } else {
                            $.fancybox.close();
                            socialNetworkLogin();
                        }
                        $.unmask();
                    },
                    error: function (msg) {
                        error(msg)
                        $.unmask();
                    }
                }
            );
            return false;
        });

        var $ajaxLoginForm = $('form.ajax-login-form');
        var $ajaxLoginFormButton = $ajaxLoginForm.find('button[type="submit"]');
        var $ajaxLoginFormButtonSpan = $ajaxLoginFormButton.find('span');
        $ajaxLoginForm.soft2bet(
            'login', {
                beforeSend: function (dt) {
                    $ajaxLoginFormButton.attr('disabled', 'disabled');
                    $ajaxLoginFormButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );
                },
                success: function (data) {
                    // console.log(data);
                    if (data.redirect)
                        window.location = data.redirect;
                    else
                        window.location = 'index.html';
                },
                error: function (msg) {
                    // console.log(msg);
                    //$('#popup-login-error').find('h3').html(msg);
                    $ajaxLoginFormButton.removeAttr('disabled');
                    $ajaxLoginFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );

                    if (msg.data) {
                        error(msg + '<b style="color: #2196f3">' + msg.data + '</b>');
                    } else {
                        error(msg);
                    }
                    // $("#loginError").trigger('click');
                }
            }
        );

        var $downloadAppPhone = $('form.download_app_phone');
        var $downloadAppPhoneButton = $downloadAppPhone.find('button[type="submit"]');
        var $downloadAppPhoneButtonSpan = $downloadAppPhoneButton.find('span');
        $downloadAppPhone.soft2bet(
            'downloadAppPhone', {
                beforeSend: function () {
                    $downloadAppPhoneButton.attr('disabled', 'disabled');
                    $downloadAppPhoneButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );

                    $.mask();
                },
                success: function (data) {

                    $.unmask();
                    // console.log(data);
                    info(data);
                    // if (data.redirect)
                    //     window.location = data.redirect;
                    // else
                    //     window.location = '/';
                },
                error: function (msg) {
                    $.unmask();

                    // console.log(msg);
                    //$('#popup-login-error').find('h3').html(msg);
                    $downloadAppPhoneButton.removeAttr('disabled');
                    $downloadAppPhoneButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );

                    error(msg);
                }
            }
        );

        if (window.location.hash == "#sn-login") {
            socialNetworkLogin();
        }

        var $ajaxLogoutButton = $('a#logout');
        var $ajaxLogoutButtonSpan = $ajaxLogoutButton.find('span');
        $ajaxLogoutButton.soft2bet(
            'logout', {
                beforeSend: function () {
                    $ajaxLogoutButton.attr('disabled', 'disabled');
                    $ajaxLogoutButtonSpan.contents().wrap('<p class="hide"></p>');
                    $ajaxLogoutButtonSpan.append('<i class="fa fa-spinner faa-spin animated"></i>');
                },
                success: function () {
                    window.location = 'index.html';
                },
                error: function (msg) {

                    window.location = 'index.html';
                    //$ajaxLogoutButton.removeAttr('disabled').find('i').remove();
                    //$ajaxLogoutButton.find('p.hide').contents().unwrap();
                    //error(msg);
                }
            }
        );

        var $ajaxLanguageBox = $('#lang_switch select');
        $ajaxLanguageBox.soft2bet(
            'switch_language', {
                beforeSend: function () {
                    //$ajaxLogoutButton.attr('disabled', 'disabled');
                    //$ajaxLogoutButtonSpan.contents().wrap('<p class="hide"></p>');
                    //$ajaxLogoutButtonSpan.append('<i class="fa fa-spinner faa-spin animated"></i>');
                },
                success: function () {
                    window.location.reload();
                },
                error: function (msg) {
                    $ajaxLogoutButton.removeAttr('disabled').find('i').remove();
                    $ajaxLogoutButton.find('p.hide').contents().unwrap();
                    error(msg);
                }
            }
        );

        var $ajaxRegisterForm = $('form.ajax-register-form');
        var $ajaxRegisterFormButton = $ajaxRegisterForm.find('button[type="submit"]');
        var $ajaxRegisterFormButtonSpan = $ajaxRegisterFormButton.find('span');

        $ajaxRegisterForm.soft2bet(
            'register', {
                beforeSend: function () {
                    if (!$ajaxRegisterForm.valid()) {
                        return false;
                    }

                    $ajaxRegisterFormButton.attr('disabled', 'disabled');
                    $ajaxRegisterFormButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );
                    $.mask();

                    $('.hidden-dial-code').remove();
                    $('<input />').attr('type', 'hidden')
                        .attr('class', 'hidden-dial-code')
                        .attr('name', 'phonecode')
                        .attr('value', $('.flag-container .selected-dial-code').text().replace(/\D/g, ""))
                        .prependTo($(this));

                    return true;
                },
                success: function (data) {
                    $ajaxRegisterFormButton.removeAttr('disabled');
                    $ajaxRegisterFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    $.fancybox.close();
                    setCookie('iaredir', '1', 1 / 24 / 60);//ad serving pixel cookie, to be outputed one time only after registration
                    setCookie('iauserid', data.userID, 1 / 24 / 60);
                    info(data.message);
                    setTimeout(function () {
                        window.location.href = '/' + LANG;
                    }, 3000);
                },
                error: function (msg) {
                    $.unmask();
                    $ajaxRegisterFormButton.removeAttr('disabled');
                    $ajaxRegisterFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    error(msg);
                }
            }
        );


        var $ajaxRegisterFormGame = $('form.ajax-register-form_game');
        var $ajaxRegisterFormGameButton = $ajaxRegisterForm.find('button[type="submit"]');
        var $ajaxRegisterFormGameButtonSpan = $ajaxRegisterFormButton.find('span');

        $ajaxRegisterFormGame.soft2bet(
            'register', {
                beforeSend: function () {
                    if (!$ajaxRegisterFormGame.valid()) return false;

                    $ajaxRegisterFormGameButton.attr('disabled', 'disabled');
                    $ajaxRegisterFormGameButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );
                    return true;
                },
                success: function (msg) {
                    $ajaxRegisterFormGameButton.removeAttr('disabled');
                    $ajaxRegisterFormGameButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    $.fancybox.close();
                    window.location = 'en/registrationd56b.html?msgbox=welcome&amp;message';

                    $.mask();
                },
                error: function (msg) {
                    $ajaxRegisterFormGameButton.removeAttr('disabled');
                    $ajaxRegisterFormGameButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    error(msg);
                }
            }
        );


        var $ajaxEditForm = $('form.ajax-edit-form');
        var $ajaxEditFormButton = $ajaxEditForm.find('button[type="submit"]');
        var $ajaxEditFormButtonSpan = $ajaxEditFormButton.find('span');
        $ajaxEditForm.soft2bet(
            'edit', {
                beforeSend: function () {
                    if (!$ajaxEditForm.valid()) return false;
                    $ajaxEditFormButton.attr('disabled', 'disabled');
                    $ajaxEditFormButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );
                    return true;
                },
                success: function (msg) {
                    $ajaxEditFormButton.removeAttr('disabled');
                    $ajaxEditFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    success(msg);
                },
                error: function (msg) {
                    $ajaxEditFormButton.removeAttr('disabled');
                    $ajaxEditFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    error(msg);
                }
            }
        );

        $(".forgot").click(
            function () {
                $('form.ajax-forgot-password-form').get(0).reset();
            }
        );

        var $ajaxRestoreForm = $('form.ajax-forgot-password-form');
        var $ajaxRestoreFormButton = $ajaxRestoreForm.find('button[type="submit"]');
        var $ajaxRestoreFormButtonSpan = $ajaxRestoreFormButton.find('span');
        $ajaxRestoreForm.soft2bet(
            'restore', {
                beforeSend: function () {
                    $ajaxRestoreFormButton.attr('disabled', 'disabled');
                    $ajaxRestoreFormButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );
                },
                success: function (msg) {
                    $ajaxRestoreFormButton.removeAttr('disabled');
                    $ajaxRestoreFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    $(this).find('input').val('');
                    $.fancybox.close();
                    // console.log(msg);
                    success(msg);
                },
                error: function (msg) {
                    $ajaxRestoreFormButton.removeAttr('disabled');
                    $ajaxRestoreFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    error(msg);
                }
            }
        );

        var $ajaxChangePasswordForm = $('form.ajax-change-password-form');
        var $ajaxChangePasswordFormButton = $ajaxChangePasswordForm.find('button[type="submit"]');
        var $ajaxChangePasswordFormButtonSpan = $ajaxChangePasswordFormButton.find('span');
        $ajaxChangePasswordForm.soft2bet(
            'changePassword', {
                beforeSend: function () {

                    if (!$ajaxChangePasswordForm.valid()) return false;
                    $ajaxChangePasswordFormButton.attr('disabled', 'disabled');
                    $ajaxChangePasswordFormButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );
                    return true;
                },
                success: function (msg) {
                    $ajaxChangePasswordFormButton.removeAttr('disabled');
                    $ajaxChangePasswordFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    success(msg);
                },
                error: function (msg) {
                    $ajaxChangePasswordFormButton.removeAttr('disabled');
                    $ajaxChangePasswordFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    error(msg);
                }
            }
        );


        var $ajaxProfileForm = $('form.ajax-profile-form');
        var $ajaxProfileFormButton = $ajaxProfileForm.find('button[type="submit"]');
        var $ajaxProfileFormButtonSpan = $ajaxProfileFormButton.find('span');
        $ajaxProfileForm.soft2bet(
            'edit', {
                update: true,
                beforeSend: function () {
                    if (!$ajaxProfileForm.valid()) return false;

                    $ajaxProfileFormButton.attr('disabled', 'disabled');
                    $ajaxProfileFormButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );
                    return true;
                },
                success: function () {
                    $ajaxProfileFormButton.removeAttr('disabled');
                    $ajaxProfileFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );

                    if ($('#profile-form').data('next')) $.fancybox.open($('#profile-form').html('').data('next'));
                    if ($('#profile-form').data('submit')) {
                        $('#profile-form').data('submit').submit();
                    }


                },
                error: function (msg) {
                    $ajaxProfileFormButton.removeAttr('disabled');
                    $ajaxProfileFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    error(msg);
                }
            }
        );
        var $ajaxDepositeForm = $('form.ajax-deposit-form');

        $ajaxDepositeForm.soft2bet(
            'deposite', {
                beforeSend: function () {
                    var win = window;
                    var $ajaxDepositeFormButton = $(this).find('button[type="submit"]');
                    var $ajaxDepositeFormButtonSpan = $ajaxDepositeFormButton.find('span');
                    $ajaxDepositeFormButton.attr('disabled', 'disabled');
                    $ajaxDepositeFormButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );
                    return true;
                },
                success: function (url) {

                    $.fancybox.close();
                    if (APP) {
                        window.open(url);
                        return;
                    }

                    //if ($(this).find('input[name="paymethod"]').val()=='yandex' || $(this).find('input[name="paymethod"]').val()=='w1'){
                    if ($(this).find('input[name="paymethod"]').val() == 'yandex') {
                        window.open(url, "paywin");
                    } else {
                        $.fancybox.open(
                            {
                                padding: 0,
                                href: url,
                                minHeight: 700,
                                height: 800,
                                type: 'iframe'
                            }
                        );
                    }


                    var $ajaxDepositeFormButton = $(this).find('button[type="submit"]');
                    var $ajaxDepositeFormButtonSpan = $ajaxDepositeFormButton.find('span');
                    $ajaxDepositeFormButton.removeAttr('disabled');
                    $ajaxDepositeFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                },
                error: function (msg) {

                    var $ajaxDepositeFormButton = $(this).find('button[type="submit"]');
                    var $ajaxDepositeFormButtonSpan = $ajaxDepositeFormButton.find('span');
                    $ajaxDepositeFormButton.removeAttr('disabled');
                    $ajaxDepositeFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    error(msg);
                }
            }
        );

        if ($('.game_page').length > 0) {

            $('ul.dep_amount li').on('click', function () {
                $(this).closest('form').find('input[name="amount"]').val(parseInt($(this).data('amount')));
            });
        }


        var $ajaxWithdrawForm = $('form.ajax-withdraw-form');
        $ajaxWithdrawForm.soft2bet(
            'withdraw', {
                beforeSend: function () {
                    if (!$(this).valid()) return false;

                    var $ajaxWithdrawFormButton = $(this).find('button[type="submit"]');
                    var $ajaxWithdrawFormButtonSpan = $ajaxWithdrawFormButton.find('span');
                    $ajaxWithdrawFormButton.attr('disabled', 'disabled');
                    $ajaxWithdrawFormButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );
                    return true;
                },
                success: function (msg) {

                    var $ajaxWithdrawFormButton = $(this).find('button[type="submit"]');
                    var $ajaxWithdrawFormButtonSpan = $ajaxWithdrawFormButton.find('span');
                    $ajaxWithdrawFormButton.removeAttr('disabled');
                    $ajaxWithdrawFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    $.fancybox.close();
                    //$(".update-info").click();
                    $('#getWithdrawList').click();
                    success(msg);
                },
                confirm: function (message) {

                    var $this = $(this);

                    var $ajaxWithdrawFormButton = $(this).find('button[type="submit"]');
                    var $ajaxWithdrawFormButtonSpan = $ajaxWithdrawFormButton.find('span');
                    $ajaxWithdrawFormButton.removeAttr('disabled');
                    $ajaxWithdrawFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    //console.log(message);
                    fancyconfirm(message, {
                            buttons: [{
                                class: "no",
                                type: "button",
                                title: GlobalTranslate[LANG + '_goplay'],//"Играть дальше",
                                value: false
                            }, {
                                class: "yes",
                                type: "button",
                                title: GlobalTranslate[LANG + '_withdraw'],//"Играть дальше",
                                value: true
                            }],
                            modal: true
                        },

                        function (resp) {
                            if (resp) {
                                $this.append($("<input>", {
                                    type: "hidden",
                                    name: "check",
                                    value: !resp,
                                }));
                                $this.submit();
                            } else {
                                window.location = 'index.html';
                            }
                            return resp;
                        });


                },
                error: function (msg) {

                    var $ajaxWithdrawFormButton = $(this).find('button[type="submit"]');
                    var $ajaxWithdrawFormButtonSpan = $ajaxWithdrawFormButton.find('span');
                    $ajaxWithdrawFormButton.removeAttr('disabled');
                    $ajaxWithdrawFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    error(msg);
                }
            }
        );

        function collWC() {

            var $ajaxWithdrawCancelForm = $('form.ajax-withdraw-cancel-form');

            $ajaxWithdrawCancelForm.soft2bet(
                'withdrawcancel', {
                    beforeSend: function () {

                        var $ajaxWithdrawCancelFormButton = $(this).find('button[type="submit"]');

                        $ajaxWithdrawCancelFormButton.attr('disabled', 'disabled');

                        var $ajaxWithdrawCancelFormButtonSpan = $ajaxWithdrawCancelFormButton.find('span');
                        $ajaxWithdrawCancelFormButtonSpan.each(
                            function () {
                                $(this).contents().wrap('<p class="hide"></p>');
                                $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                            }
                        );
                    },
                    success: function (msg) {

                        var $ajaxWithdrawCancelFormButton = $(this).find('button[type="submit"]');
                        var $ajaxWithdrawCancelFormButtonSpan = $ajaxWithdrawCancelFormButton.find('span');
                        $ajaxWithdrawCancelFormButton.removeAttr('disabled');
                        $ajaxWithdrawCancelFormButtonSpan.each(
                            function () {
                                $(this).find('i').remove();
                                $(this).find('p.hide').contents().unwrap();
                            }
                        );
                        $(this).closest('tr').remove();
                        //$(".update-info").click();
                        info(msg);
                    },
                    error: function (msg) {

                        var $ajaxWithdrawCancelFormButton = $(this).find('button[type="submit"]');
                        var $ajaxWithdrawCancelFormButtonSpan = $ajaxWithdrawCancelFormButton.find('span');
                        $ajaxWithdrawCancelFormButton.removeAttr('disabled');
                        $ajaxWithdrawCancelFormButtonSpan.each(
                            function () {
                                $(this).find('i').remove();
                                $(this).find('p.hide').contents().unwrap();
                            }
                        );
                        error(msg);
                    }
                }
            );

        }

        collWC()

        var $ajaxHistoryForm = $('form.ajax-history-form');
        var $ajaxHistoryFormTable = $ajaxHistoryForm.find('table.profile__history__table');
        var $ajaxHistoryFormButton = $ajaxHistoryForm.find('button[type="submit"]');
        var $ajaxHistoryFormButtonSpan = $ajaxHistoryFormButton.find('span');
        $ajaxHistoryForm.soft2bet(
            'history', {
                beforeSend: function () {
                    $ajaxHistoryFormButton.attr('disabled', 'disabled');
                    $ajaxHistoryFormButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );
                },
                success: function (data) {

                    $ajaxHistoryFormTable.empty();
                    var list = $('#history-table-head').html();
                    $ajaxHistoryFormTable.append();
                    var pager = data.pager;
                    data = data.response;

                    // console.log(data);
                    for (var i = 0, l = data.length; i < l; i++) {
                        var entry = data[i];
                        list += '<tr><td>' + entry.type + '</td><td>' + entry.paymethod + '</td><td>' + entry.account + '</td><td>' + entry.amount
                            + '</td><td>' + entry.date + '</td><td>' + entry.status + '</td></tr>';
                    }

                    if (pager.totalPages > 1) {
                        var pageIsland = 2;
                        var pageEdge = 3;

                        list += '<caption align="bottom" style="margin-top: 12px;">';
                        var pagefrom = parseInt(pager.currentPage, 10) - pageIsland;
                        var pageto = parseInt(pager.currentPage, 10) + pageIsland;


                        if (pagefrom < 1) {
                            pageto += Math.abs(pagefrom) + 1;
                            pagefrom = 1;
                        }


                        if (pager.totalPages > 10) {
                            var firstDelimiter = ' ... ',
                                secondDelimiter = ' ... ';

                            if (pagefrom <= pageEdge) {
                                firstDelimiter = '';
                                pagefrom = pageEdge + 1;
                            }

                            if (pagefrom - 1 <= pageEdge)
                                firstDelimiter = '';

                            if (pageto >= pager.totalPages - pageEdge + 1) {
                                secondDelimiter = '';
                                pageto = pager.totalPages - pageEdge;
                            }

                            for (var i = 1; i < pageEdge + 1; i++) {
                                list += '<button type="submit" page="' + i + '" class="btn-pager" ' + (i == pager.currentPage ? 'disabled' : '') + '>' + i + '</button>'
                            }

                            list += firstDelimiter;

                            for (var i = pagefrom; i < pageto + 1; i++) {
                                list += '<button type="submit" page="' + i + '" class="btn-pager ' + (i == pager.currentPage ? 'active' : '') + '" ' + (i == pager.currentPage ? 'disabled' : '') + '>' + i + '</button>'
                            }

                            list += secondDelimiter;

                            for (var i = pager.totalPages - pageEdge + 1; i < pager.totalPages + 1; i++) {
                                list += '<button type="submit" page="' + i + '" class="btn-pager" ' + (i == pager.currentPage ? 'disabled' : '') + '>' + i + '</button>'
                            }
                        } else {
                            for (var i = 1; i < pager.totalPages + 1; i++) {
                                list += '<button type="submit" page="' + i + '" class="btn-pager" ' + (i == pager.currentPage ? 'disabled' : '') + '>' + i + '</button>'
                            }
                        }
                        list += '</caption>';
                    }
                    list += '</tbody>';
                    $ajaxHistoryFormTable.append(list);

                    $ajaxHistoryForm.find('button[type="submit"]').unbind('click').bind('click', function () {
                        $ajaxHistoryForm.find('input[name="page"]').val($(this).attr('page'));
                        $ajaxHistoryForm.find('button[type="submit"].active').removeClass('active');
                    });
                    $ajaxHistoryFormButton.removeAttr('disabled');
                    $ajaxHistoryFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );

                    $('#hide_payment_details').on('click', function (e) {
                        if ($(this).prop('checked')) {
                            // console.log('checked');
                            $('.profile__history__table').find('td:nth-child(3)').css('color', 'transparent');
                        } else {
                            $('.profile__history__table').find('td:nth-child(3)').css('color', '#312f29');

                            // console.log('unchecked');

                        }
                    });
                },
                error: function (msg) {
                    $ajaxHistoryFormButton.removeAttr('disabled');
                    $ajaxHistoryFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    error(msg);
                }
            }
        );

//Ajax withdraw cancel list
        var $getWithdrawList = $('#getWithdrawList');
        var $ajaxWithdrawCancelListForm = $('#withdraw-cancel');
        var $ajaxWithdrawCancelListFormTable = $ajaxWithdrawCancelListForm.find('table.withdraw_list');
        var $ajaxWithdrawCancelListFormButton = $getWithdrawList;
        var $ajaxWithdrawCancelListFormButtonSpan = $ajaxWithdrawCancelListFormButton.find('span');
        $getWithdrawList.soft2bet(
            'withdraw_list', {
                beforeSend: function () {
                    $ajaxWithdrawCancelListFormButton.attr('disabled', 'disabled');
                    $ajaxWithdrawCancelListFormButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );
                },
                success: function (data) {

                    $ajaxWithdrawCancelListFormTable.empty();
                    var list = $('#withdraw-cancel-table-head').html();
                    $ajaxWithdrawCancelListFormTable.append();
                    data = data.response;


                    for (var i = 0, l = data.length; i < l; i++) {
                        var entry = data[i];

                        list += '<tr>' +
                            '<td>' + entry.type + '</td>' +
                            '<td>' + entry.paymethod + '</td>' +
                            '<td>' + entry.amount + '</td>' +
                            '<td>' + entry.date + '</td>' +
                            '<td>' + entry.status + '</td>' +
                            '<td>' +
                            '<form class="ajax-withdraw-cancel-form">' +
                            '<input type="hidden" name="uuid" value="' + entry.uuid + '">' +
                            '<button class="btn small blue" type="submit">' +
                            '<span class="withdraw_cancel">' + entry.buttontext + '</span></button>' +
                            '</form>' +
                            '</td>' +
                            '</tr>'

                    }

                    $ajaxWithdrawCancelListFormTable.append(list);

                    collWC()


                    $ajaxWithdrawCancelListFormButton.removeAttr('disabled');
                    $ajaxWithdrawCancelListFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                },
                error: function (msg) {
                    $ajaxWithdrawCancelListFormButton.removeAttr('disabled');
                    $ajaxWithdrawCancelListFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    error(msg);
                }
            }
        );


        //----------- play history start
        var phFormData = new FormData();
        var esLimit = 10000;
        var paginatorPerPage = 20;
        phFormData.append("page", '0');
        phFormData.append("limit", paginatorPerPage.toString());
        phFormData.append('order[]', 'modified');
        phFormData.append('order[]', 'desc');
        var tabGameHistory = $('.profile__game-history').parent().parent();
        var playHistoryPaginator = tabGameHistory.find('.profile__game-history__paginator');
        var playHistoryTable = tabGameHistory.find('.profile__history__table');
        var phtHead = playHistoryTable.find('th');
        var ghTableBody = playHistoryTable.find('tbody');

        var iconsOrder = {
            desc: '<i class="zmdi zmdi-caret-down zmdi-hc-lg"></i>',
            asc: '<i class="zmdi zmdi-caret-up zmdi-hc-lg"></i>'
        };
        var orderClasses = Object.keys(iconsOrder);
        var orderFields = ['gamedate', 'modified', 'gamename', 'bet', 'win', 'balance', 'bonus'];

        var getHistory = function () {

            if (playHistoryPaginator.length === 0)
                return false;

            $.ajax(
                {
                    type: 'POST',
                    url: '/ajax/game_history',
                    async: true,
                    data: phFormData,
                    dataType: 'json',
                    processData: false,
                    contentType: false,
                    beforeSend: function () {
                        $.mask();
                        return true;
                    },
                    success: function (data) {
                        $.unmask();
                        if (!data.validated) {
                            error(data.msg);
                        }
                        if (typeof data.response.order === 'object' && data.response.order.length === 2) {
                            phtHead.each(function (index) {
                                $(this).find('i').remove();
                                $(this).removeClass();
                                if ($(this).data('order') === data.response.order[0]) {
                                    $(this).append(iconsOrder[data.response.order[1]]);
                                    $(this).addClass(data.response.order[1]);
                                }
                            });
                        }
                        ghTableBody.html('');
                        data.response.data.forEach(function (el) {
                            var tr = $('<tr></tr>');
                            tr.append(
                                $('<td></td>').text(el.betdate),
                                $('<td></td>').text(el.windate),
                                $('<td></td>').text(el.gamename),
                                $('<td></td>').text(el.bet),
                                $('<td></td>').text(el.win),
                                $('<td></td>').text(el.balance),
                                $('<td></td>').text(el.bonus)
                            );
                            ghTableBody.append(tr);
                        });


                        var paginatorLimit = Math.ceil(data.response.total / paginatorPerPage);
                        playHistoryPaginator.html('');
                        if (paginatorLimit <= 1) {
                            return;
                        }
                        paginatorLimit = data.response.total > esLimit ? (esLimit / paginatorPerPage) : paginatorLimit;
                        var paginatorNow = (data.response.page || 0) + 1;
                        var paginatorDelta = 4;
                        var paginatorStart = (paginatorNow - paginatorDelta) < 2 ? 2 : (paginatorNow - paginatorDelta);
                        var paginatorEnd = (paginatorNow + paginatorDelta) > (paginatorLimit - 1) ? paginatorLimit - 1 : paginatorNow + paginatorDelta;
                        playHistoryPaginator.append(makePaginatorElement(1, paginatorNow));
                        for (var pg = paginatorStart; pg <= paginatorEnd; pg++) {
                            playHistoryPaginator.append(makePaginatorElement(pg, paginatorNow));
                        }
                        playHistoryPaginator.append(makePaginatorElement(paginatorLimit, paginatorNow));
                        registerPaginatorClick(paginatorNow);
                        if (data.response.total > esLimit) {
                            playHistoryPaginator.append('<div class="info">' + t('Max 500 pages, use date filter.') + '</div>');
                        }
                    },
                    error: function (data) {
                        $.unmask();
                    }
                }
            )
        };
        var makePaginatorElement = function (page, now) {
            return '<a class="btn paginator-btn ' + (page === now ? 'active' : '') +
                '" data-page="' + (page - 1) + '" href="#">' + page + '</a>';
        };
        var registerPaginatorClick = function (now) {
            playHistoryPaginator.find('a.paginator-btn').click(function (e) {
                e.preventDefault();
                var dataPage = $(this).data('page').toString();
                if ((now - 1) === parseInt(dataPage)) {
                    return;
                }
                phFormData.set("page", $(this).data('page'));
                getHistory();
            });
        };

        if (!tabGameHistory.hasClass('hide') && playHistoryTable.find('td').length < 1) {
            getHistory();
        }
        $('ul.sidebar-nav__list > li.game-history').click(function () {
            if (!tabGameHistory.hasClass('hide') && playHistoryTable.find('td').length < 1) {
                getHistory();
            }
        });

        tabGameHistory.find('button.btn').click(function (e) {
            e.preventDefault();
            phFormData.delete('conditions[from]');
            phFormData.delete('conditions[to]');
            phFormData.set('page', '0');
            var from = $(this).parent().prev().find('input.from').val();
            var to = $(this).parent().prev().find('input.to').val();
            if (from !== '') {
                phFormData.set('conditions[from]', from);
            }
            if (to !== '') {
                phFormData.set('conditions[to]', to);
            }
            getHistory();
        });

        phtHead.click(function () {
            var orderCls = this.className || 'asc';
            var orderField = $(this).data('order').toString();
            if (orderClasses.indexOf(orderCls) > -1 && orderFields.indexOf(orderField) > -1) {
                orderCls = (orderCls === orderClasses[0] ? orderClasses[1] : orderClasses[0]);
                phFormData.delete('order[]');
                phFormData.append('order[]', orderField);
                phFormData.append('order[]', orderCls);
                getHistory();
            }
        });

        tabGameHistory.find('input.from').datetimepicker(
            {
                timeInput: true,
                controlType: 'select',
                maxDate: new Date(),
                dateFormat: "yy-mm-dd",
                timeFormat: "HH:mm",
                onClose: function (selectedDate) {
                    tabGameHistory.find('input.to').datepicker("option", "minDate", selectedDate);
                }
            }
        );
        tabGameHistory.find('input.to').datetimepicker(
            {
                timeInput: true,
                controlType: 'select',
                maxDate: new Date(),
                dateFormat: "yy-mm-dd",
                timeFormat: "HH:mm",
                onClose: function (selectedDate) {
                    tabGameHistory.find('input.from').datepicker("option", "maxDate", selectedDate);
                }
            }
        );

        //---------- play history end


        var $ajaxUploadForm = $('form.ajax-upload-form');
        var $ajaxUploadFormButton = $ajaxUploadForm.find('button[type="submit"]');
        var $ajaxUploadFormButtonSpan = $ajaxUploadFormButton.find('span');


        $ajaxUploadForm.soft2bet(
            'upload', {
                beforeSend: function () {
                    $ajaxUploadFormButton.attr('disabled', 'disabled');
                    $ajaxUploadFormButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );
                },
                success: function (msg) {
                    $(this).find("input[type=text], input[type=file],textarea")
                        .val("")
                        .trigger('refresh');

                    $ajaxUploadFormButton.removeAttr('disabled');
                    $ajaxUploadFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    success(msg);
                },
                error: function (msg) {
                    $ajaxUploadFormButton.removeAttr('disabled');
                    $ajaxUploadFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );

                    error(msg);
                }
            }
        );


        var langWidth = 34;
        var toggleButtonWidth = 15;
        var langCount = $('.lang-switcher').find('li').length;
        $('.lang-switcher').click(function () {
            if ($(this).hasClass('open')) {
                // $('.lang-switcher').stop().animate({opacity: 0}, function () {
                $(this).removeClass('open');
                // });
                // $('.lang-switcher ul').stop().animate({opacity: 0}, function () {
                $(this).removeClass('open');
                // });
            } else {
                // $('.lang-switcher').stop().animate({opacity: 1}, function () {
                $(this).addClass('open');
                // });
                // $('.lang-switcher ul').stop().animate({opacity: 1}, function () {
                $(this).addClass('open');
                // });
            }
            //$(this).toggleClass('open');
        });

        $('.lang-switcher li a').click(function () {
            if (!$('.lang-switcher').hasClass('open')) {
                $('.lang-switcher').click();
                return false;
            }
        });

        var $ajaxPromocodeForm = $('form.ajax-promocode-form');
        var $ajaxPromocodeFormButton = $ajaxPromocodeForm.find('button[type="submit"]');
        var $ajaxPromocodeFormButtonSpan = $ajaxPromocodeFormButton.find('span');
        $ajaxPromocodeForm.soft2bet(
            'promocode', {
                beforeSend: function () {
                    $ajaxPromocodeFormButton.attr('disabled', 'disabled');
                    $ajaxPromocodeFormButtonSpan.each(
                        function () {
                            $(this).contents().wrap('<p class="hide"></p>');
                            $(this).append('<i class="fa fa-spinner faa-spin animated"></i>');
                        }
                    );
                },
                success: function (msg) {
                    $ajaxPromocodeFormButton.removeAttr('disabled');
                    $ajaxPromocodeFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    success(msg);
                },
                error: function (msg) {
                    $ajaxPromocodeFormButton.removeAttr('disabled');
                    $ajaxPromocodeFormButtonSpan.each(
                        function () {
                            $(this).find('i').remove();
                            $(this).find('p.hide').contents().unwrap();
                        }
                    );
                    error(msg);
                }
            }
        );


        function tick_jackpot() {
            $('.our-games__item .ticker').each(function () {
                // console.log('start');
                // console.log($(this).data('info').current);
                // console.log($(this).data('info').step);
                var START = parseInt($(this).data('info').current);
                var STEP = parseFloat($(this).data('info').step);
                var LAG = 100;
                var exampleOdometerValue = START;
                var exampleOdometer = $(this).find('span').eq(1);

                setInterval(function () {
                    var number = numeral(exampleOdometerValue += (STEP / 10));
                    exampleOdometer.html(number.format('0,0.00'));
                }, LAG);
            });
        }

        // tick_jackpot();

        //setTimeout(function (){
        //    console.log(jQuery('.our-games__item .ticker').length);
        //    window.startJackpotsGames($('.our-games__item .ticker'));
        //},2000);

        $("#jssor_1").css('width',$('.our-games').width() + 'px')

        function runBrand() {
            var jssor_1_options = {
                // $Width: $('.our-games').width() + 'px',
                // width: $('.our-games').width() + 'px',
                $AutoPlay: false,
                $AutoPlaySteps: 2,
                $SlideDuration: 160,
                $SlideWidth: 110,
                $SlideSpacing: Math.round($('.our-games').width() / 110),
                // $SlideSpacing: 17,
                $Cols: Math.round($('.our-games').width() / 110),
                // $Cols: 17,
                $ArrowNavigatorOptions: {
                    $Class: $JssorArrowNavigator$,
                    $Steps: Math.round(Math.round($('.our-games').width() / 110) / 2 ),
                    // $Steps: 17
                },
                $BulletNavigatorOptions: {
                    $Class: $JssorBulletNavigator$,
                    $SpacingX: 1,
                    $SpacingY: 1
                }
            };


            $("#jssor_1 .provider_bord").orderChildren([
                ".enabled",
                ".disabled"
            ]);
            var jssor_1_slider = new $JssorSlider$("jssor_1", jssor_1_options);

            function ScaleSlider() {
                var refSize = jssor_1_slider.$Elmt.parentNode.clientWidth;
                if (refSize) {
                    refSize = Math.min(refSize, 900);
                    jssor_1_slider.$ScaleWidth(refSize);
                }
                else {
                    window.setTimeout(ScaleSlider, 30);
                }
            }

            // ScaleSlider();
            // $(window).bind("load", ScaleSlider);
            // $(window).bind("resize", ScaleSlider);
            // $(window).bind("orientationchange", ScaleSlider);
            /*responsive code end*/

            jQuery(".provider_bord img").click(function () {
                // console.log($(this).closest('.provider'));
                jQuery(".provider").find("*").css("border", "0px solid red").length;

                if (!$(this).closest('.provider').hasClass('active') && !$(this).closest('.provider').hasClass('disabled')) {

                    // console.log('y');
                    jQuery(this).css({"border": "2px solid #ffba00", "height": "44px", "width": "106px"});
                }

            });


        }


        if ($('#jssor_1').length > 0) {

            runBrand();

        }

    }
);
