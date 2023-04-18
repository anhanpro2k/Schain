<?php
    if (is_user_logged_in()) {
        wp_redirect(get_home_url());
    }
    get_header();
    while (have_posts()):
        the_post();
        $signature = get_field("signature_login_page");
        $title = get_field("title_login_page");
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
                                <form action="" method="post" id="mona-register-popup">
                                    <div class="form-gr">
                                        <div class="sign-form-wrap">
                                            <img src="<?php echo site_url(); ?>/template/assets/images/sign-icon-user.svg" alt="" class="icon">
                                            <input type="text" class="sign-form-input re-input"  name="register_display" required placeholder="Họ và tên">
                                        </div>
                                    </div>
                                    <div class="form-gr">
                                        <div class="sign-form-wrap">
                                            <img src="<?php echo site_url(); ?>/template/assets/images/sign-icon-user.svg" alt="" class="icon">
                                            <input type="text" class="sign-form-input re-input"  name="register_phone" required placeholder="Số điện thoại">
                                        </div>
                                    </div>
                                    <div class="form-gr">
                                        <div class="form-fl-item box-sex-register">
                                            <label for="" class="re-label">
                                                <?php _e("Giới tính *", "monamedia");?>
                                            </label>
                                            <div class="recheck-block flex-box">
                                                <div class="recheck-item">
                                                    <input type="radio" name="register_sex" value="male" id="" checked class="recheck-input" hidden>
                                                    <div class="recheck-dot"></div>
                                                    <p class="recheck-text">
                                                        <?php _e("Nam", "monamedia");?>
                                                    </p>
                                                </div>
                                                <div class="recheck-item">
                                                    <input type="radio" name="register_sex" id="" value="female" class="recheck-input" hidden>
                                                    <div class="recheck-dot"></div>
                                                    <p class="recheck-text">
                                                        <?php _e("Nữ", "monamedia");?>
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-gr">
                                        <div class="sign-form-wrap">
                                            <img src="<?php echo site_url(); ?>/template/assets/images/sign-icon-user.svg" alt="" class="icon">
                                            <input type="text" class="sign-form-input re-input"  name="register_loginname" required placeholder="Email">
                                        </div>
                                    </div>
                                    <div class="form-gr">
                                        <div class="sign-form-wrap">
                                            <img src="<?php echo site_url(); ?>/template/assets/images/sign-icon-lock.svg" alt="" class="icon">
                                            <input type="password" class="sign-form-input re-input" required name="register_pass" placeholder="Mật khẩu của bạn">
                                        </div>
                                    </div>
                                    <div class="form-gr">
                                        <div class="sign-form-wrap">
                                            <img src="<?php echo site_url(); ?>/template/assets/images/sign-icon-lock.svg" alt="" class="icon">
                                            <input type="password" class="sign-form-input re-input" required name="register_repass" placeholder="Nhập lại mật khẩu">
                                        </div>
                                    </div>
                                    <div class="form-gr box-submit-form">
                                        <input type="submit" class="btn full" value="Đăng ký">
                                        <div class="box-loading">
                                            <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
                                        </div>
                                    </div>
                                    <div class="form-gr">
                                        <div class="sign-form-fl recheck-block fl-center spc-list">
                                            <div class="recheck-item spc-item spc-accept-register">
                                                <input type="checkbox" name="accept_terms" id="" required class="recheck-input accept-register-mb">
                                                <div class="recheck-dot"></div>
                                                <p class="recheck-text t14">
                                                    <?php _e("Tôi muốn nhận các thông tin về chương trình ưu đãi và khuyến mãi đặc biệt
từ Rooty Trip. Tôi hiểu rằng tôi có thể bỏ theo dõi khi không muốn nhận 
thông tin vào bất cứ lúc nào", "monamedia")?>
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="form-gr">
                                        <div class="text">
                                            <?php _e("Bạn đã có tài khoản?", "monamedia"); ?>
                                            <a href="<?php echo get_the_permalink(MONA_LOGIN); ?>" class="btn-link fw-7"><?php _e("Đăng nhập ngay", "monamedia"); ?></a>
                                        </div>
                                    </div>
                                    <div class="css-response-error" id="response-register" style="display: none;">

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