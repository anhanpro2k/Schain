jQuery(document).ready(function ($) {
    $(document).on('click', '.mona-close-popup', function (e) {
        e.preventDefault();
        jQuery.magnificPopup.close();
    });
    $(document).on('click', '.mona-popup-message .login-tab', function (e) {
        var $this = $(this);
        var $id = $this.attr('data-tab');

        $($id).stop().show().siblings('.tab-content').stop().hide();
        $this.stop().addClass('current').siblings('.login-tab').stop().removeClass('current');
    });

    $('.mona-logout-action').on('click', function (e) {
        e.preventDefault();
        var $this = $(this);
        if (!$this.hasClass('loading')) {
            $.ajax({
                url: mona_filter_ajax_url.ajaxURL,
                type: 'post',
                data: {
                    action: 'mona_ajax_logout',

                },
                error: function (request) {
                    $this.removeClass('loading');
                },
                beforeSend: function () {
                    $this.addClass('loading');
                },
                success: function (result) {
                    window.location.reload();
                }
            });
        }
    });
    $(document).on('click', '.mona-action-login', function (e) {
        e.preventDefault();
        var $this = $(this);

        if ($('#mona-longin-form-wrap').length) {
            jQuery.magnificPopup.close();
            jQuery.magnificPopup.open({
                preloader: false,
                mainClass: 'mfp-zoom-in',
                modal: true,
                items: {
                    src: '<div class="mona-popup-message mfp-with-anim">' + $('#mona-longin-form-wrap').html() + '</div>',
                    type: "inline",
                    midClick: true
                },
                callbacks: {

                    open: function () {

                        if ($this.hasClass('register')) {
                            $('.mona-popup-message').find('#tab-register').addClass('current').siblings().removeClass('current');
                            $('.login-signup-tab-container #sign-up').show().siblings().hide();
                        } else {
                            $('.mona-popup-message').find('#tab-login').addClass('current').siblings().removeClass('current');
                            $('.login-signup-tab-container #login').show().siblings().hide();
                        }
                    }
                }
            });
        }
    });
    $(document).on('submit', '#mona-login-form', function (e) {
        e.preventDefault();
        var $this = $(this);
        var box_loading = $this.find(".box-loading");
        var $form = $this.serialize();
        if (!$this.hasClass('loading')) {
            $.ajax({
                url: mona_filter_ajax_url.ajaxURL,
                type: 'post',
                data: {
                    action: 'mona_ajax_login',
                    form: $form,
                },
                error: function (request) {
                    box_loading.removeClass('loading');
                },
                beforeSend: function () {
                    box_loading.addClass('loading');
                    $this.find('#response-login').fadeOut().html('');
                },
                success: function (result) {
                    var $data = $.parseJSON(result);
                    if ($data.status == 'success') {
                        window.location.reload();
                    } else {
                        box_loading.removeClass('loading');
                        $this.find('#response-login').css("color", "red");
                        $this.find('#response-login').html($data.mess).fadeIn();
                    }
                }
            });
        }

    });
    $(document).on('submit', '#mona-register-popup', function (e) {
        e.preventDefault();
        var $this = $(this);
        var box_loading = $this.find(".box-loading");
        var $form = $this.serialize();
        if (!$this.hasClass('loading')) {
            $.ajax({
                url: mona_filter_ajax_url.ajaxURL,
                type: 'post',
                data: {
                    action: 'mona_ajax_register',
                    form: $form,
                },
                error: function (request) {
                    box_loading.removeClass('loading');
                },
                beforeSend: function () {
                    box_loading.addClass('loading');
                    $this.find('#response-register').fadeOut().html('');
                },
                success: function (result) {
                    var $data = $.parseJSON(result);
                    if ($data.status == 'success') {
                        window.location.reload();
                    } else {
                        box_loading.removeClass('loading');
                        $this.find('#response-register').css("color", "red");
                        $this.find('#response-register').html($data.mess).fadeIn();
                    }
                }
            });
        }
    });
    $('#mona-foget-submit-form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);
        var box_loading = $this.find(".box-loading");
        var $form = $this.serialize();
        if (!$this.hasClass('loading')) {
            $.ajax({
                url: mona_filter_ajax_url.ajaxURL,
                type: 'post',
                data: {
                    action: 'mona_ajax_send_foget_pass',
                    form: $form,
                },
                error: function (request) {
                    box_loading.removeClass('loading');
                },
                beforeSend: function () {
                    box_loading.addClass('loading');
                    $this.find('#response-foget').fadeOut().html('');
                },
                success: function (result) {
                    var $data = $.parseJSON(result);
                    if ($data.status == 'success') {
                        box_loading.removeClass('loading');
                        $this.find('#response-foget').css("color", "green");
                        $this.find('#response-foget').html($data.mess).fadeIn();
                    } else {
                        box_loading.removeClass('loading');
                        $this.find('#response-foget').css("color", "red");
                        $this.find('#response-foget').html($data.mess).fadeIn();
                    }
                }
            });
        }
    });
    $('#mona-foget-reset-form').on('submit', function (e) {
        e.preventDefault();
        var $this = $(this);
        var box_loading = $this.find(".box-loading");
        var $form = $this.serialize();
        if (!$this.hasClass('loading')) {
            $.ajax({
                url: mona_filter_ajax_url.ajaxURL,
                type: 'post',
                data: {
                    action: 'mona_ajax_reset_pass',
                    form: $form,
                },
                error: function (request) {
                    box_loading.removeClass('loading');
                },
                beforeSend: function () {
                    box_loading.addClass('loading');
                    $this.find('#response-foget').fadeOut().html('');
                },
                success: function (result) {
                    var $data = $.parseJSON(result);
                    if ($data.status == 'success') {
                        window.location.href = $data.mess;
                    } else {
                        box_loading.removeClass('loading');
                        $this.find('#response-foget').html($data.mess).fadeIn();
                    }
                }
            });
        }
    });

});


