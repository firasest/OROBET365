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

$(document).bind("mobileinit", function () {
    $.mobile.ajaxEnabled = false;
});
$(document).ready(function () {
    window.error = function(msg, type) {
        if (typeof type == 'undefined') {
            type = 'toast';
        }

        if (APP) {
            if (type == 'toast') {
                Android.showToast(msg);
            } else {
                Android.showToast(msg);
            }
        } else {
            if (type == 'toast') {
                toast(msg);
            } else {
                new $.nd2Toast({ // The 'new' keyword is important, otherwise you would overwrite the current toast instance
                    message: msg, // Required
                    action: { // Optional (Defines the action button on the right)
                        title: '<i class="zmdi zmdi-close zmdi-hc-2x"></i>', // Title of the action button
                        fn: function () { // function that will be triggered when action clicked
                            //$.nd2Toast.hide;
                        }
                    },
                    ttl: 5000 // optional, time-to-live in ms (default: 3000)
                });
            }
        }
    };

    window.info = function(msg) {
        if (APP) {
            Android.showToast(msg);
        } else {
            new $.nd2Toast({ // The 'new' keyword is important, otherwise you would overwrite the current toast instance
                message : msg, // Required
                ttl : 5000 // optional, time-to-live in ms (default: 3000)
            });
        }
    };
    window.success = function(msg) {
        if (APP) {
            Android.showToast(msg);
        } else {
            new $.nd2Toast({ // The 'new' keyword is important, otherwise you would overwrite the current toast instance
                message : msg, // Required
                ttl : 5000 // optional, time-to-live in ms (default: 3000)
            });
        }
    };
    var toast=function(msg, timeout){
        if (typeof timeout == 'undefined') timeout = 3000;
        $("<div class='ui-loader ui-overlay-shadow ui-body-e ui-corner-all'><div>"+msg+"</div></div>")
            .addClass('toast')
            .appendTo( $.mobile.pageContainer ).delay( timeout )
            .fadeOut( 400, function(){
                $(this).remove();
            });
    }
});

function setCookie(cname,cvalue,exdays,path) {
    path = typeof path !== 'undefined' ? path : '/';
    var d = new Date();
    d.setTime(d.getTime()+(exdays*24*60*60*1000));
    var expires = "expires="+d.toGMTString();
    var domain = (location.hostname.substr(0,4) == 'www.' ? location.hostname.substr(4) : location.hostname);
    document.cookie = cname + "=" + cvalue + "; " + expires + "; domain=."+domain+"; path=" + path;
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
function deleteCookie(cname) {
    setCookie(cname, '', -1);
}
function t(str) {
    if (typeof TRANSLATE === 'undefined') {
        console.log('TRANSLATE not loaded');
        return str;
    }
    return typeof TRANSLATE[str] !== 'undefined' ? TRANSLATE[str] : str;
}
function showLoader() {
    if (APP) {
        Android.showLoader();
    } else {
        $.mobile.loading('show');
    }
}

function hideLoader() {
    if (APP) {
        Android.hideLoader();
    } else {
        $.mobile.loading('hide');
    }
}
function SportLogin() {
    $("#popup-login").popup("open");
}
function SportRegistration() {
    window.location.href = '/'+LANG+'/registration';
}

const request = (method, url, data) => {
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
    new Noty({
        text: text,
        timeout: timeout ? timeout : 5000,
        progressBar: true,
        closeWith: ['click', 'button'],
        type: type ? type : 'info',
        theme: 'argo'
    }).show();
};
