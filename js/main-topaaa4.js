// JavaScript Document

var $popupInit; //вызов попапов

var a = window.location;
if (a.search) {
    var removeParams = ['authtk', 'mksrc'];
    var getParams = a.search.substring(1).split('&');
    var newParams = [];
    for (var gtp = 0; gtp < getParams.length; gtp++) {
        var found = false;
        for (var rmp = 0; rmp < removeParams.length; rmp++) {
            if (getParams[gtp].indexOf(removeParams[rmp]) > -1) {
                found = true;
            }
        }
        if (!found) {
            newParams.push(getParams[gtp]);
        }
    }

    if (newParams.length > 0) {
        var redir = '?' + newParams.join('&');
        if (a.search !== redir) {
            a.search = redir;
        }
    } else {
        a.search = '';
    }
}


function setCookie(cname, cvalue, exdays, path) {
    path = typeof path !== 'undefined' ? path : '/';
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toGMTString();
    var domain = (location.hostname.substr(0, 4) == 'www.' ? location.hostname.substr(4) : location.hostname);
    document.cookie = cname + "=" + cvalue + "; " + expires + "; domain=." + domain + "; path=" + path;
}

//Cookie

// function setCookie(name, value, options) {
//     options = options || {};
//
//     var expires = options.expires;
//
//     if (typeof expires == "number" && expires) {
//         var d = new Date();
//         d.setTime(d.getTime() + expires * 1000);
//         expires = options.expires = d;
//     }
//     if (expires && expires.toUTCString) {
//         options.expires = expires.toUTCString();
//     }
//
//     value = encodeURIComponent(value);
//
//     var updatedCookie = name + "=" + value;
//
//     for (var propName in options) {
//         updatedCookie += "; " + propName;
//         var propValue = options[propName];
//         if (propValue !== true) {
//             updatedCookie += "=" + propValue;
//         }
//     }
//
//     var domain = (location.hostname.substr(0,4) == 'www.' ? location.hostname.substr(4) : location.hostname);
//     updatedCookie += '; domain=.'+domain;
//
//     document.cookie = updatedCookie;
// }

function deleteCookie(name) {
    setCookie(name, "", -1)
}

function getCookie(name) {
    var matches = document.cookie.match(new RegExp(
        "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
    ));
    return matches ? decodeURIComponent(matches[1]) : undefined;
}


$(document).ready(function () {
    var errorBlock = $('#runtime-error');
    var errorTextBlock = errorBlock.find('.text-content p');
    window.error = function (error, reload) {
        if (typeof error == 'number') {
            var message = (
                errorMessages[error]
            ) ? errorMessages[error] : errorMessages[0];
            if (message.length > 0)
                errorTextBlock.html(message);
            //$('#runtime-error-link').click();
        } else if (typeof error == 'string') {
            errorTextBlock.html(error);
            //$('#runtime-error-link').click();
        }
        $.fancybox({
            href: '#runtime-error',
            padding: 0,
            closeBtn: true,
            'scrolling': 'visible',
            afterClose: function () {
                if (typeof reload != 'undefined' && reload !== false)
                    window.location = reload;
            },
            beforeShow: function () {
                $(".fancybox-wrap").addClass("fancybox-custom");
            }
        });
    };

    var successBlock = $('#runtime-success');
    var successTextBlock = successBlock.find('.text-content p');
    window.success = function (message, redirect) {
        if (message.length > 0) {
            successTextBlock.html(message);
        }
        $.fancybox({
            href: '#runtime-success',
            padding: 0,
            closeBtn: true,
            'scrolling': 'visible',
            beforeShow: function () {
                $(".fancybox-wrap").addClass("fancybox-custom");
            }
        });
        if (typeof redirect != "undefined" && redirect !== false)
            window.location = redirect;
    };
    $('.fancyclose').click(function () {
        $.fancybox.close();
    });
});//end ready

function popupFancybox() {//wrapped into a function since we need to call it after dynamically adding elements
    if ($popupInit.length) {
        $popupInit.fancybox({
            padding: 100,
            closeBtn: false,
            'scrolling': 'visible',
            beforeShow: function () {
                $(".fancybox-wrap").addClass("fancybox-custom hidedefclose");
            }
        });
    }
}

//sport
function SportLogin() {
    window.location.href = '/' + LANG + '/registration?login';
}

function SportRegistration() {
    window.location.href = '/' + LANG + '/registration';
}

function t(str) {
    if (typeof TRANSLATE === 'undefined') {
        console.log('TRANSLATE not loaded');
        return str;
    }
    return typeof TRANSLATE[str] !== 'undefined' ? TRANSLATE[str] : str;
}

showLoader = function () {
    $('body').append('<div class="loadmask"></div>');
};

hideLoader = function () {
    $('body').children('div.loadmask').remove();
};

const request = function (method, url, data) {
    return new Promise((resolve, reject) => {
        $.ajax({
            type: method,
            url: url,
            data: data,
            success: function (resData) {
                resolve(resData)
            },
            error: function (err) {
                reject(new Error(err.translatedDisplayMessage || t(err.message)));
            }
        });
    });
};

var createNotyMessage = function (text, timeout, type) {
    timeout = typeof timeout === "undefined" ? 5000 : timeout;
    timeout = timeout === 0 ? false : timeout;

    new Noty({
        text: text,
        timeout: timeout,
        progressBar: true,
        closeWith: ['click', 'button'],
        type: type ? type : 'info',
        theme: 'argo'
    }).show();
};

// Set the name of the hidden property and the change event for visibility
var hidden, visibilityChange, windowHidden;

if (typeof document.hidden !== "undefined") { // Opera 12.10 and Firefox 18 and later support
    hidden = "hidden";
    visibilityChange = "visibilitychange";
} else if (typeof document.msHidden !== "undefined") {
    hidden = "msHidden";
    visibilityChange = "msvisibilitychange";
} else if (typeof document.webkitHidden !== "undefined") {
    hidden = "webkitHidden";
    visibilityChange = "webkitvisibilitychange";
}


// If the page is hidden, pause the video;
// if the page is shown, play the video
function handleVisibilityChange() {
    windowHidden = document[hidden];
}

// Warn if the browser doesn't support addEventListener or the Page Visibility API
if (typeof document.addEventListener !== "undefined" && hidden !== undefined) {
    // Handle page visibility change
    document.addEventListener(visibilityChange, handleVisibilityChange, false);
}
