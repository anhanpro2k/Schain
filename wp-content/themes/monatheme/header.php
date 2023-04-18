<?php

/**
 * The template for displaying header.
 *
 * @package Monamedia
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}
?>
<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd">
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) & !(IE 8)]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->

<head>
    <!-- Meta
                ================================================== -->
    <meta charset="<?php bloginfo( 'charset' ); ?>">
    <meta name="viewport"
          content="initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no, width=device-width">
	<?php wp_site_icon(); ?>
    <link rel="pingback" href="<?php bloginfo( 'pingback_url' ); ?>"/>
    <link rel="stylesheet" href="<?php echo get_site_url() ?>/template/css/style.css">
    <link rel="stylesheet" href="<?php echo get_site_url() ?>/template/css/backdoor.css"/>
    <link rel="icon" type="image/png" href="<?php echo get_site_url() ?>/template/assets/images/mona.png"/>
	<?php wp_head(); ?>
</head>
<?php
if ( wp_is_mobile() ) {
	$body = 'mobile-detect';
} else {
	$body = 'desktop-detect';
}
?>

<body <?php body_class( $body ); ?>>
<header class="header">
    <div class="container large">
        <div class="header-wrap flex flex-ai-center flex-jc-between">
            <div class="header-btn">
                <div class="toggle toggle-header">
                    <div class="toggle-inner">
                            <span class="toggle-item">
                                <img src="<?php echo get_site_url() ?>/template/assets/images/menu-hd.svg" alt="">
                            </span>
                        <span class="toggle-item">
                                <img src="<?php echo get_site_url() ?>/template/assets/images/close-hd.svg" alt="">
                            </span>
                    </div>
                </div>
                <span class="toggle-text"><?php echo __( 'Danh mục', 'monamedia' ); ?></span>
            </div>
            <div class="header-menu">
                <div class="menu-nav">
					<?php
					/**
					 * GET MAIN MENU
					 */
					wp_nav_menu( array(
						'container'       => false,
						'container_class' => '',
						'menu_class'      => 'menu-list',
						'theme_location'  => 'main-menu',
						'before'          => '',
						'after'           => '',
						'link_before'     => '',
						'link_after'      => '',
						'fallback_cb'     => false,
						'walker'          => new Mona_Walker_Nav_Menu,
					) );
					?>
                </div>
            </div>
            <div class="header-logo">
                <a href="<?php echo get_site_url(); ?>">
					<?php echo wp_get_attachment_image( get_theme_mod( 'custom_logo' ), 'image-small-square' ); ?>
                </a>
            </div>

            <div class="header-lang">
                <div class="lang pos-relative">
                    <div class="lang-selected flex flex-ai-center">
                        <img src="<?php echo get_site_url() ?>/template/assets/images/vn-icon.svg" alt="">
                        <span class="text">VIE</span>
                        <span class="icon">
                                <i class="fas fa-chevron-down"></i>
                            </span>
                    </div>
                    <ul class="lang-lst pos-abs">
                        <li class="lang-item">
                            <img src="<?php echo get_site_url() ?>/template/assets/images/vn-icon.svg" alt="">
                            <span class="text">VIE</span>
                        </li>
                        <li class="lang-item">
                            <img src="<?php echo get_site_url() ?>/template/assets/images/vn-icon.svg" alt="">
                            <span class="text">VIE</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="header-search">
                    <span class="icon">
                        <img src="<?php echo get_site_url() ?>/template/assets/images/search.svg" alt="">
                    </span>

                <div class="form-search">
                    <form action="#">
                        <div class="form-wrap flex">
                            <input class="btn-search" type="submit" value="">
                            <input type="text" class="input" placeholder="Bạn đang tìm gì?">
                        </div>
                    </form>
                </div>
            </div>
            <div class="header-user">
                <div class="icon">
                    <img src="<?php echo get_site_url() ?>/template/assets/images/user-icon.svg" alt="">
                </div>

                <div class="header-modal">
                    <div class="header-modal-wrap">

						<?php
						if ( is_user_logged_in() ) {
							?>
                            <div class="header-modal-box">
                                <span class="avt">
                                    <img src="<?php echo get_site_url() ?>/template/assets/images/avt.png" alt="">
                                </span>
								<?php
								$user_id = get_current_user_id(); // get the ID of the current user
								?>
                                <span class="name"><?php echo $display_name = get_the_author_meta( 'display_name', $user_id ); // get the display name of the user;?></span>
                            </div>
                            <ul class="header-modal-list">
                                <li class="header-modal-item">
                                    <a href="" class="header-modal-link">Thông tin tài khoản</a>
                                </li>
                                <li class="header-modal-item">
                                    <a href="" class="header-modal-link">Đơn hàng của tôi</a>
                                </li>
                            </ul>


                            <div class="header-modal-bottom">
                                <a href="<?php echo esc_url( wc_get_account_endpoint_url( 'customer-logout' ) ); ?>"
                                   class="header-modal-link"><?php echo __( 'Đăng xuất', 'monamedia' ); ?></a>
                            </div>
							<?php
						} else { ?>
                            <a href="javascript:;" class="btn btn-singin no-bg t-third bd-third popup-open"
                               data-popup="fsi">
                                <span class="btn-inner">
                                    <?php echo __( 'Đăng nhập', 'monamedia' ); ?>
                                </span>
                            </a>

                            <a href="javascript:;" class="btn btn-singup popup-open" data-popup="fsu">
                                <span class="btn-inner">
                                    <?php echo __( 'Đăng ký', 'monamedia' ); ?>
                                </span>
                            </a>
							<?php
						} ?>
                    </div>
                </div>

            </div>
            <div class="header-cart">
                <a href="" class="btn icon-right">
                        <span class="btn-inner">
                            <span class="text">Giỏ hàng</span>

                            <span class="icon">
                                <img src="<?php echo get_site_url() ?>/template/assets/images/cart-icon.svg" alt="">
                            </span>
                        </span>
                </a>
            </div>
        </div>
    </div>
</header>

<div class="header-ct">
    <div class="header-menu-desk">
        <div class="menu-nav">
			<?php
			/**
			 * GET PRODUCTS MENU
			 */
			wp_nav_menu( array(
				'container'       => false,
				'container_class' => '',
				'menu_class'      => 'menu-list',
				'theme_location'  => 'vertical-menu',
				'before'          => '',
				'after'           => '',
				'link_before'     => '',
				'link_after'      => '',
				'fallback_cb'     => false,
				'walker'          => new Mona_Walker_Nav_Menu,
			) );
			?>
            <!-- <ul class="menu-list">
				<li class="menu-item">
					<a href="">Tất cả sản phẩm</a>
				</li>
				<li class="menu-item dropdown">
					<a href="">Đảo hải tặc</a>

					<ul class="menu-list">
						<li class="menu-item">
							<a href="">
								Đảo hải tặc 1
							</a>
						</li>
						<li class="menu-item">
							<a href="">
								Đảo hải tặc 2
							</a>
						</li>
					</ul>
				</li>
				<li class="menu-item dropdown">
					<a href="">Anime</a>

					<ul class="menu-list">
						<li class="menu-item">
							<a href="">
								Đảo hải tặc 1
							</a>
						</li>
						<li class="menu-item dropdown">
							<a href="">
								Đảo hải tặc 2
							</a>
						</li>
					</ul>
				</li>
				<li class="menu-item dropdown">
					<a href="">Pakugan</a>

					<ul class="menu-list">
						<li class="menu-item">
							<a href="">
								Đảo hải tặc 1
							</a>
						</li>
						<li class="menu-item dropdown">
							<a href="">
								Đảo hải tặc 2
							</a>
						</li>
					</ul>
				</li>
				<li class="menu-item dropdown">
					<a href="">Pokemon</a>

					<ul class="menu-list">
						<li class="menu-item">
							<a href="">
								Đảo hải tặc 1
							</a>
						</li>
						<li class="menu-item dropdown">
							<a href="">
								Đảo hải tặc 2
							</a>
						</li>
					</ul>
				</li>
			</ul> -->
        </div>
    </div>
    <div class="header-menu">
        <div class="header-nav flex flex-jc-between flex-ai-center">
            <div class="header-lang">
                <div class="lang pos-relative">
                    <div class="lang-selected flex flex-ai-center">
                        <img src="<?php echo get_site_url() ?>/template/assets/images/vn-icon.svg" alt="">
                        <span class="text">VIE</span>
                        <span class="icon">
                                <i class="fas fa-chevron-down"></i>
                            </span>
                    </div>
                    <ul class="lang-lst pos-abs">
                        <li class="lang-item">
                            <img src="<?php echo get_site_url() ?>/template/assets/images/vn-icon.svg" alt="">
                            <span class="text">VIE</span>
                        </li>
                        <li class="lang-item">
                            <img src="<?php echo get_site_url() ?>/template/assets/images/vn-icon.svg" alt="">
                            <span class="text">VIE</span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="menu-nav">
                <ul class="menu-list">

                    <li class="menu-item">
                        <a href="home.html"> Trang chủ </a>
                    </li>
                    <li class="menu-item current-menu-item">
                        <a href="">Giới thiệu</a>
                    </li>
                    <li class="menu-item">
                        <a href="">Tất cả sản phẩm</a>
                    </li>
                    <li class="menu-item dropdown">
                        <a href="">Đảo hải tặc</a>

                        <ul class="menu-list">
                            <li class="menu-item">
                                <a href="">
                                    Đảo hải tặc 1
                                </a>
                            </li>
                            <li class="menu-item">
                                <a href="">
                                    Đảo hải tặc 2
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item dropdown">
                        <a href="">Anime</a>

                        <ul class="menu-list">
                            <li class="menu-item">
                                <a href="">
                                    Đảo hải tặc 1
                                </a>
                            </li>
                            <li class="menu-item dropdown">
                                <a href="">
                                    Đảo hải tặc 2
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item dropdown">
                        <a href="">Pakugan</a>

                        <ul class="menu-list">
                            <li class="menu-item">
                                <a href="">
                                    Đảo hải tặc 1
                                </a>
                            </li>
                            <li class="menu-item dropdown">
                                <a href="">
                                    Đảo hải tặc 2
                                </a>
                            </li>
                        </ul>
                    </li>
                    <li class="menu-item dropdown">
                        <a href="">Pokemon</a>

                        <ul class="menu-list">
                            <li class="menu-item">
                                <a href="">
                                    Đảo hải tặc 1
                                </a>
                            </li>
                            <li class="menu-item dropdown">
                                <a href="">
                                    Đảo hải tặc 2
                                </a>
                            </li>
                        </ul>
                    </li>

                </ul>
            </div>

            <div class="contact">
                <ul class="contact-lst">
                    <li class="contact-item">
                            <span class="contact-text">
                                <span class="icon"><i class="fa-solid fa-location-dot"></i></span>
                                <span class="tit">Địa chỉ:</span>
                                <span class="text">Tổ 5 ấp Suối Mây, xã Dương Tơ, TP. Phú Quốc, Kiên Giang
                                </span>
                            </span>
                    </li>
                    <li class="contact-item">
                        <a href="#" class="contact-text">
                            <span class="icon"><i class="fa-solid fa-phone"></i></span>
                            <span class="tit">Số điện thoại:</span>
                            <span class="text">0983.533.005</span>
                        </a>
                    </li>
                    <li class="contact-item">
                        <a href="#" class="contact-text">
                            <span class="icon"><i class="fa-solid fa-phone"></i></span>
                            <span class="tit">Số điện thoại:</span>
                            <span class="text">0338.831.219 </span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
        <div class="sc-hd">
            <ul class="sc-hd-list">
                <li class="sc-hd-item">
                    <a href="#" class="sc-hd-link">
                        <img src="<?php echo get_site_url() ?>/template/assets/images/fb.png" alt="">
                    </a>
                </li>
                <li class="sc-hd-item">
                    <a href="#" class="sc-hd-link">
                        <img src="<?php echo get_site_url() ?>/template/assets/images/insta.png" alt="">
                    </a>
                </li>
                <li class="sc-hd-item">
                    <a href="#" class="sc-hd-link">
                        <img src="<?php echo get_site_url() ?>/template/assets/images/youtube.png" alt="">
                    </a>
                </li>
                <li class="sc-hd-item">
                    <a href="#" class="sc-hd-link">
                        <img src="<?php echo get_site_url() ?>/template/assets/images/tt.png" alt="">
                    </a>
                </li>
            </ul>
        </div>
    </div>

</div>

<div class="bg-fade hd-bg"></div>