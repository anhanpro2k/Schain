<?php
/**
 * The template for displaying index.
 *
 * @package Monamedia
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

/**
 * define acf
 */
if ( get_current_user_id() == 1 ) {
	define( 'ACF_LITE', false );
} else {
	define( 'ACF_LITE', true );
}

/**
 * define theme page
 */
define( 'MONA_PAGE_HOME', get_option( 'page_on_front', true ) );
define( 'MONA_PAGE_BLOG', get_option( 'page_for_posts', true ) );

// Woocommerce
define( 'MONA_WC_PRODUCTS', get_option( 'woocommerce_shop_page_id' ) );
define( 'MONA_WC_CART', get_option( 'woocommerce_cart_page_id' ) );
define( 'MONA_WC_CHECKOUT', get_option( 'woocommerce_checkout_page_id' ) );
define( 'MONA_WC_MYACCOUNT', get_option( 'woocommerce_myaccount_page_id' ) );
define( 'MONA_WC_THANKYOU', get_option( 'woocommerce_thanks_page_id' ) );


require_once( get_template_directory() . '/__autoload.php' );

