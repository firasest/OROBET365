(function ($) {
    if (typeof $ != 'function') throw new Error('jQuery is required');

    var prefix = '';
    var sid = '';
    var siteUrl = '';
    // var siteUrl = 'http://' + document.location.host;

    var errorMessages = {
        0: {pl: 'Nieoczekiwany błąd', ru: 'Непредвиденная ошибка', en: 'Unexpected error', se: 'oväntat fel'},
        2: 'Неверный логин или пароль',
        3: 'Не указан логин или пароль',
        22: 'Учетная запись заблокирована',
        48: 'Данный сервис недоступен в Вашей стране'
    };

    var soft2bet = {
        postlogin: function (data) {
            $.ajax(
                {
                    type: 'POST',
                    url: siteUrl + '/ajax/postlogin' + sid,
                    data: data,
                    //data: 'data='+(data),
                    //data: JSON.stringify(data),
                    dataType: 'json',
                    timeout: 1000,
                    success: function (data) {
                        // console.log(data);
                    },
                    error: function (data) {
                        // console.log(data);
                    }
                }
            );//.abort();
        },
        login: function (settings) {
            $(this).bind(
                'submit.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    var formData = new FormData(this);

                    if (typeof settings.beforeSend == 'function') {
                        settings.beforeSend.call(HTMLElement);
                    }

                    grecaptcha.execute('6LcKQaUUAAAAAHSfknW2-4vYEgEAMXDkk8c4eP-N', {action: 'login'})
                    .then(function(token) {
                        formData.append('recaptchaToken', token);
                        $.ajax(
                            {
                                type: 'POST',
                                url: siteUrl + '/ajax/login' + sid,
                                data: formData,
                                dataType: 'json',
                                processData: false,
                                contentType: false,
                                success: function (data) {
                                    if (data.validated) {

                                        if (typeof settings.success == 'function') {
                                            settings.success.call(HTMLElement, data.response);
                                        }
                                    }
                                    else {
                                        // console.log(data);
                                        if (typeof settings.error == 'function') {
                                            settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                        }
                                    }
                                },
                                error: function (data) {
                                    // console.log(data);
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                    }
                                }
                            }
                        );
                    });
                }
            );
            return this;
        },
        downloadAppPhone: function (settings) {
            $(this).bind(
                'submit.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    var formData = new FormData(this);

                    if (typeof settings.beforeSend == 'function') {
                        settings.beforeSend.call(HTMLElement);
                    }

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/downloadappphone' + sid,
                            data: formData,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data) {
                                if (data.validated) {


                                    // soft2bet.postlogin(data.response);


                                    //$.ajax(
                                    //    {
                                    //        type: 'POST',
                                    //        url: '/ajax/playerlaunch',
                                    //        data: {token: 1},
                                    //        async: true,
                                    //        dataType: 'json',
                                    //        success: function (data) {
                                    //            var player = data.response;
                                    //            init = {'errorCode':2,'actions':'SendLogin','playerMessage':iapiLogin((prefix + player.login).toUpperCase(), player.token,1, 'ru')};
                                    //            $.post('/ajax/reporterror', init);
                                    //            function authCallback(response)
                                    //            {
                                    //                console.log(response);
                                    //                //if (response['errorCode']) {
                                    //                $.post('/ajax/reporterror', response);
                                    //                //}
                                    //
                                    //            };
                                    //            iapiSetCallout('Login', authCallback);
                                    //        },
                                    //        error: function (data) {
                                    //        }
                                    //    }
                                    //);

                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                }
                                else {
                                    // console.log(data);
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                // console.log(data);
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
            return this;
        },
        logout: function (settings) {
            $(this).bind(
                'click.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;

                    if (typeof settings.beforeSend == 'function') {
                        settings.beforeSend.call(HTMLElement);
                    }

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/logout' + sid,
                            dataType: 'json',
                            success: function (data) {
                                if (data.validated) {
                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                    setTimeout(function () {
                        window.location = 'index.html';

                    }, 1000)
                }
            );
        },
        switch_language: function (settings) {
            $(this).bind(
                'change.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;

                    if (typeof settings.beforeSend == 'function') {
                        settings.beforeSend.call(HTMLElement);
                    }
                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/language' + sid,
                            dataType: 'json',
                            data: 'language=' + $(this).val(),
                            success: function (data) {
                                if (data.validated) {
                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        postregister: function (data) {
            $.ajax(
                {
                    type: 'POST',
                    url: siteUrl + '/ajax/postregister' + sid,
                    data: data,
                    //data: 'data='+(data),
                    //data: JSON.stringify(data),
                    dataType: 'json',
                    timeout: 1000,
                    success: function (data) {
                        // console.log(data);
                    },
                    error: function (data) {
                        // console.log(data);
                    }
                }
            );//.abort();
        },
        register: function (settings) {
            $(this).bind(
                'submit.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();


                    var HTMLElement = this;

                    var run = true;
                    if (typeof settings.beforeSend == 'function') {
                        run = settings.beforeSend.call(HTMLElement);
                    }
                    var formData = new FormData(this);

                    if (!run) return;

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/register' + sid,
                            data: formData,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data) {
                                //console.log(data);
                                //console.log(siteUrl);
                                if (data == null) {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, 'Not Result' || errorMessages[0][LANG]);
                                    }
                                }
                                if (data.validated) {

                                    // console.log(data.response);
                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                    // soft2bet.postregister(data.response);

                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
            return this;
        },
        restore: function (settings) {
            $(this).bind(
                'submit.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    var formData = new FormData(this);

                    if (typeof settings.beforeSend == 'function') {
                        settings.beforeSend.call(HTMLElement);
                    }

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/restore' + sid,
                            data: formData,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        edit: function (settings) {
            $(this).bind(
                'submit.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    var formData = new FormData(this);
                    var run = true;
                    if (typeof settings.beforeSend == 'function') {
                        run = settings.beforeSend.call(HTMLElement);
                    }

                    if (!run) return;

                    if (settings['update']) formData.append('request', 'update');

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/edit' + sid,
                            async: false,
                            data: formData,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },

        changePassword: function (settings) {
            $(this).bind(
                'submit.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    var formData = new FormData(this);

                    var run = true;
                    if (typeof settings.beforeSend == 'function') {
                        run = settings.beforeSend.call(HTMLElement);
                    }

                    if (!run) return;

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/changepassword' + sid,
                            data: formData,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        deposite: function (settings) {
            $(this).unbind('submit.soft2bet').bind(
                'submit.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    var formData = new FormData(this);

                    var canGo = true;

                    if (typeof settings.beforeSend == 'function') {
                        canGo = settings.beforeSend.call(HTMLElement);
                    }

                    //if (!canGo) return;

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/deposit' + sid,
                            data: formData,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        withdraw: function (settings) {
            $(this).bind(
                'submit.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    var formData = new FormData(this);

                    var run = true;
                    if (typeof settings.beforeSend == 'function') {
                        run = settings.beforeSend.call(HTMLElement);
                    }

                    if (!IS_MOBILE) {
                        if (!run) return;
                    }


                    // if (typeof settings.beforeSend == 'function') {
                    //     settings.beforeSend.call(HTMLElement);
                    // }

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/withdraw' + sid,
                            data: formData,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data) {
                                //console.log(data);
                                if (data.validated) {
                                    if (data.confirm) {
                                        if (typeof settings.confirm == 'function') {
                                            settings.confirm.call(HTMLElement, data.response);
                                        }
                                    } else {

                                        if (typeof settings.success == 'function') {
                                            settings.success.call(HTMLElement, data.response);
                                        }
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        history: function (settings) {
            $(this).bind(
                'submit.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    var formData = new FormData(this);

                    if (typeof settings.beforeSend == 'function') {
                        settings.beforeSend.call(HTMLElement);
                    }

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/history' + sid,
                            data: formData,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        withdraw_list: function (settings) {
            $(this).bind(
                'click.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    // var formData = new FormData(this);

                    if (typeof settings.beforeSend == 'function') {
                        settings.beforeSend.call(HTMLElement);
                    }

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/withdraw_list' + sid,
                            // data: formData,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                console.log(data);
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        upload: function (settings) {
            $(this).bind(
                'submit.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    var formData = new FormData(this);

                    if (typeof settings.beforeSend == 'function') {
                        settings.beforeSend.call(HTMLElement);
                    }

                    $.ajax({
                        type: 'POST',
                        url: siteUrl + '/ajax/verificationupload' + sid,
                        data: formData,
                        dataType: 'json',
                        processData: false,
                        contentType: false,
                        success: function (data) {
                            if (data.validated) {
                                if (typeof settings.success === 'function') {
                                    settings.success.call(HTMLElement, data.response);
                                }
                            } else {
                                if (typeof settings.error === 'function') {
                                    settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                }
                            }
                        },
                        error: function (data) {
                            if (typeof settings.error === 'function') {
                                settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                            }
                        }
                    });
                }
            );
        },
        promocode: function (settings) {
            $(this).bind(
                'submit.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    var formData = new FormData(this);

                    if (typeof settings.beforeSend == 'function') {
                        settings.beforeSend.call(HTMLElement);
                    }

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/promocode' + sid,
                            data: formData,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        phoneconfirm: function (settings) {
            $(this).bind(
                'submit.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    var formData = new FormData(this);

                    if (typeof settings.beforeSend == 'function') {
                        settings.beforeSend.call(HTMLElement);
                    }

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/phoneconfirm' + sid,
                            data: formData,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        withdrawcancel: function (settings) {
            $(this).bind(
                'submit.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    var formData = new FormData(this);

                    if (typeof settings.beforeSend == 'function') {
                        settings.beforeSend.call(HTMLElement);
                    }

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/withdrawcancel' + sid,
                            data: formData,
                            dataType: 'json',
                            processData: false,
                            contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        reset_bonus: function (settings) {//reset for desktop
            $(this).bind(
                'click.soft2bet', function (e) {

                    // console.log('0');

                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    //var formData = new FormData(this);

                    var run = true;
                    if (typeof settings.beforeSend == 'function') {
                        run = settings.beforeSend.call(HTMLElement);
                    }
                    //
                    // console.log(formData);
                    //
                    // if (!run) return;

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/resetbonus' + sid,
                            data: 'action=reset&type=casino&check=' + ($(this).find('input[name=check]').val() != undefined),
                            dataType: 'json',
                            // processData: false,
                            // contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (data.confirm) {
                                        if (typeof settings.confirm == 'function') {
                                            settings.confirm.call(HTMLElement, data.response);
                                        }
                                    } else {

                                        if (typeof settings.success == 'function') {
                                            settings.success.call(HTMLElement, data.response);
                                        }
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        resetbonus: function (settings) {
            $(this).bind(
                'click.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;

                    var run = true;
                    if (typeof settings.beforeSend == 'function') {
                        run = settings.beforeSend.call(HTMLElement);
                    }
                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/resetbonus' + sid,
                            dataType: 'json',
                            data: 'action=reset&type=casino&language=' + $(this).val(),
                            success: function (data) {
                                $('.update-info').click();
                                if (data.validated) {
                                    if (typeof settings.success == 'function') {
                                        settings.success.call(HTMLElement, data.response);
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        resetbonus_sport: function (settings) {//reset for desktop
            $(this).bind(
                'click.soft2bet', function (e) {

                    // console.log('0');

                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;
                    //var formData = new FormData(this);

                    var run = true;
                    if (typeof settings.beforeSend == 'function') {
                        run = settings.beforeSend.call(HTMLElement);
                    }
                    //
                    // console.log(formData);
                    //
                    // if (!run) return;
                    var check = '';
                    if (!IS_MOBILE) {
                        check += '&check=' + ($(this).find('input[name=check]').val() != undefined);
                    }
                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/resetbonus' + sid,
                            data: 'action=reset&type=sport' + check,
                            dataType: 'json',
                            // processData: false,
                            // contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (data.confirm) {
                                        if (typeof settings.confirm == 'function') {
                                            settings.confirm.call(HTMLElement, data.response);
                                        }
                                    } else {

                                        if (typeof settings.success == 'function') {
                                            settings.success.call(HTMLElement, data.response);
                                        }
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        merge_bonus: function (settings) {
            $(this).bind(
                'click.soft2bet', function (e) {

                    // console.log('0');

                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;

                    var run = true;
                    if (typeof settings.beforeSend == 'function') {
                        run = settings.beforeSend.call(HTMLElement);
                    }
                    //
                    // console.log(formData);
                    //
                    // if (!run) return;
                    var check = ($(this).find('input[name=check]').val() != undefined);
                    if (IS_MOBILE) {
                        check = 'true';
                    }

                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/bonus' + sid,
                            data: 'check=' + check + '&action=merge&uuid=' + $(this).data('uuid'),
                            dataType: 'json',
                            // processData: false,
                            // contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (data.confirm) {
                                        if (typeof settings.confirm == 'function') {
                                            settings.confirm.call(HTMLElement, data.response);
                                        }
                                    } else {

                                        if (typeof settings.success == 'function') {
                                            settings.success.call(HTMLElement, data.response);
                                        }
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        replace_bonus: function (settings) {
            $(this).bind(
                'click.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;

                    var run = true;
                    if (typeof settings.beforeSend == 'function') {
                        run = settings.beforeSend.call(HTMLElement);
                    }
                    var check = ($(this).find('input[name=check]').val() != undefined);
                    if (IS_MOBILE) {
                        check = 'true';
                    }
                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/bonus' + sid,
                            data: 'check=' + check + '&action=replace&uuid=' + $(this).data('uuid'),
                            dataType: 'json',
                            // processData: false,
                            // contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (data.confirm) {
                                        if (typeof settings.confirm == 'function') {
                                            settings.confirm.call(HTMLElement, data.response);
                                        }
                                    } else {

                                        if (typeof settings.success == 'function') {
                                            settings.success.call(HTMLElement, data.response);
                                        }
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        activate_bonus: function (settings) {
            $(this).bind(
                'click.soft2bet', function (e) {
                    e = e || window.event;
                    e.preventDefault();

                    var HTMLElement = this;

                    var run = true;
                    if (typeof settings.beforeSend == 'function') {
                        run = settings.beforeSend.call(HTMLElement);
                    }
                    var check = ($(this).find('input[name=check]').val() != undefined);
                    if (IS_MOBILE) {
                        check = 'true';
                    }
                    $.ajax(
                        {
                            type: 'POST',
                            url: siteUrl + '/ajax/bonus' + sid,
                            data: 'check=' + check + '&action=activate&uuid=' + $(this).data('uuid'),
                            dataType: 'json',
                            // processData: false,
                            // contentType: false,
                            success: function (data) {
                                if (data.validated) {
                                    if (data.confirm) {
                                        if (typeof settings.confirm == 'function') {
                                            settings.confirm.call(HTMLElement, data.response);
                                        }
                                    } else {

                                        if (typeof settings.success == 'function') {
                                            settings.success.call(HTMLElement, data.response);
                                        }
                                    }
                                }
                                else {
                                    if (typeof settings.error == 'function') {
                                        settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                                    }
                                }
                            },
                            error: function (data) {
                                if (typeof settings.error == 'function') {
                                    settings.error.call(HTMLElement, data.responseText || errorMessages[0][LANG]);
                                }
                            }
                        }
                    );
                }
            );
        },
        updatePlayerInfo: function (settings) {

            $.ajax(
                {
                    type: 'POST',
                    url: siteUrl + '/ajax/playerinfo' + sid,
                    data: [],
                    dataType: 'json',
                    processData: false,
                    contentType: false,
                    success: function (data) {
                        if (data.validated) {
                            if (typeof settings.success == 'function') {
                                settings.success.call(HTMLElement, data.response);
                            }
                        }
                        else {
                            if (typeof settings.error == 'function') {
                                settings.error.call(HTMLElement, data.error || errorMessages[0][LANG]);
                            }
                        }
                    },
                    error: function (data) {
                        //console.log(data);
                    }
                }
            );

        },
        init: function (config) {
            if (config['prefix']) prefix = config['prefix'];
            if (config['sid']) sid = "?sid=" + config['sid'];

            if (config['ssl']) {
                siteUrl = 'https://' + document.location.host;
            }


        },
        playtechAuth: function () {
            $.ajax(
                {
                    type: 'POST',
                    url: '/ajax/playerlaunch',
                    data: {token: 1},
                    async: true,
                    dataType: 'json',
                    success: function (data) {
                        var player = data.response;
                        init = {'errorCode': 2, 'actions': 'SendLogin', 'playerMessage': iapiLogin((player.login).toUpperCase(), player.token, 1, 'ru')};
                        $.post('/ajax/reporterror', init);

                        function authCallback(response) {
                            // console.log(response);
                            //if (response['errorCode']) {
                            $.post('/ajax/reporterror', response);
                            //}

                        };
                        iapiSetCallout('Login', authCallback);
                    },
                    error: function (data) {
                    }
                }
            );

        },
        /**
         * Required fingerprint2.js !!!
         */
        makeFingerPrint: function () {
            try {
                var fpn = new Fingerprint2({excludeScreenResolution: true});
                fpn.get(function (result) {
                    var date = new Date;
                    date.setDate(date.getDate() + 30);
                    document.cookie = 'fprint2=' + result + '; path=/; expires=' + date.toUTCString();
                });
            }
            catch (err) {

            }
        }
    };

    $.fn.soft2bet = function (action, data) {
        if (typeof soft2bet[action] != 'function') {
            throw new Error('Undefined action: "' + action + '"');
        }
        soft2bet[action].call(this, data);
        return this;
    };

})(jQuery);
