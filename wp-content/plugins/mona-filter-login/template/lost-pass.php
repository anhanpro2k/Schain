<?php
if ( is_user_logged_in() ) {
	wp_redirect( get_home_url() );
}
get_header();
while ( have_posts() ):
	the_post();
	$signature = get_field( "signature_login_page" );
	$title     = get_field( "title_login_page" );
	?>

    <main class="main">
        <div class="sign">
            <div class="sign-br" style="background-image: url(<?php the_post_thumbnail_url(); ?>);">
                <div class="sign-container">
                    <div class="dnor sign-list">
                        <div class="dnor-item sign-left">
                            <div class="sign-content">
                                <h2 class="sign-title">
                                    <p class="taken" data-aos="fade-down-cus">
										<?php echo $signature; ?>
                                    </p>
                                    <p class="text" data-aos="fade-up-cus">
										<?php echo $title; ?>
                                    </p>
                                </h2>
                            </div>
                        </div>
                        <div class="dnor-item sign-right">
                            <div class="sign-form" data-aos="flip-right">
                                <div class="head mb-30">
                                    <h3 class="t-title mb-16">
										<?php the_title(); ?>
                                    </h3>
                                    <div class="text c-text mona-content">
										<?php the_content(); ?>
                                    </div>
                                </div>
								<?php if ( ! isset( $_GET['reset'] ) ) { ?>
                                    <form action="" method="post" id="mona-foget-submit-form">
                                        <div class="form-gr">
                                            <div class="sign-form-wrap">
                                                <img src="<?php echo site_url(); ?>/template/assets/images/sign-icon-user.svg"
                                                     alt="" class="icon">
                                                <input type="email" class="sign-form-input re-input"
                                                       name="register_email" required placeholder="Email">
                                            </div>
                                        </div>
                                        <div class="form-gr box-submit-form">
                                            <input type="submit" class="btn full" value="Lấy lại mật khẩu">
                                            <div class="box-loading">
                                                <div class="lds-ring">
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="css-response-error" id="response-foget">
                                        </div>
                                    </form>
								<?php } else { ?>
                                    <form action="" id="mona-foget-reset-form" method="post">
                                        <input type="hidden" name="key" value="<?php echo $_GET['key']; ?>"/>
                                        <input type="hidden" name="login" value="<?php echo $_GET['login']; ?>"/>
                                        <div class="form-gr">
                                            <div class="sign-form-wrap">
                                                <img src="<?php echo site_url(); ?>/template/assets/images/sign-icon-lock.svg"
                                                     alt="" class="icon">
                                                <input type="password" class="sign-form-input re-input"
                                                       name="new_password" required
                                                       placeholder="Enter your new password">
                                            </div>
                                        </div>
                                        <div class="form-gr">
                                            <div class="sign-form-wrap">
                                                <img src="<?php echo site_url(); ?>/template/assets/images/sign-icon-lock.svg"
                                                     alt="" class="icon">
                                                <input type="password" class="sign-form-input re-input"
                                                       name="usr_reset_pass" required
                                                       placeholder="Enter your new password">
                                            </div>
                                        </div>
                                        <div class="form-gr box-submit-form">
                                            <input type="submit" class="btn full" value="Đổi lại mật khẩu">
                                            <div class="box-loading">
                                                <div class="lds-ring">
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                    <div></div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="css-response-error" id="response-foget">

                                        </div>
                                    </form>
								<?php } ?>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>

<?php
endwhile;
get_footer();
?>