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

                                <form action="" id="mona-login-form" method="post">
                                    <div class="form-gr">
                                        <div class="sign-form-wrap">
                                            <img src="<?php echo site_url(); ?>/template/assets/images/sign-icon-user.svg"
                                                 alt="" class="icon">
                                            <input type="text" class="sign-form-input re-input" name="user_name"
                                                   required placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="form-gr">
                                        <div class="sign-form-wrap">
                                            <img src="<?php echo site_url(); ?>/template/assets/images/sign-icon-lock.svg"
                                                 alt="" class="icon">
                                            <input type="password" class="sign-form-input re-input" name="user_pass"
                                                   required placeholder="Mật khẩu của bạn">
                                        </div>
                                    </div>
                                    <div class="form-gr box-submit-form">
                                        <input type="submit" class="btn full" value="Đăng nhập">
                                        <div class="box-loading">
                                            <div class="lds-ring">
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                                <div></div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-gr">
                                        <div class="sign-form-fl recheck-block fl-center spc-list">
                                            <div class="recheck-item spc-item">
                                                <input type="checkbox" name="user_remember" id="" class="recheck-input"
                                                       hidden>
                                                <div class="recheck-dot"></div>
                                                <p class="recheck-text t14">
													<?php _e( "Ghi nhớ tài khoản", "monamedia" ); ?>
                                                </p>
                                            </div>
                                            <div class="recheck-item spc-item">
                                                <a href="<?php echo get_the_permalink( MONA_FORGOT_PASS ); ?>"
                                                   class="btn-link">
													<?php _e( "Quên mật khẩu", "monamedia" ); ?>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-gr">
                                        <div class="text">
											<?php _e( "Bạn chưa có tài khoản?", "monamedia" ); ?>
                                            <a href="<?php echo get_the_permalink( MONA_REGISTER ); ?>"
                                               class="btn-link fw-7"><?php _e( "Đăng ký ngay", "monamedia" ); ?></a>
                                        </div>
                                    </div>
                                    <div class="css-response-error" id="response-login">

                                    </div>
                                </form>
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