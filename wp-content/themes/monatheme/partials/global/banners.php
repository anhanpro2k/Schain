<?php

/**
 * Section name: Banners Global
 * Description: Show banner
 * Author: Monamedia
 * Order: 0
 */

$type_checked = get_field( 'mona_banner_type_checked' );
$current      = get_queried_object();
?>
<div class="bn <?php echo ( $type_checked ) ? 'bn-lg' : 'bn-sm' ?>">
    <div class="bn-img">
		<?php
		// Lấy và kiểm tra hình ảnh banner
		$mona_banner_desk_img   = get_field( 'mona_banner_desk_img' );
		$mona_banner_mobile_img = get_field( 'mona_banner_mobile_img' );
		$mona_banner_subtitle   = get_field( 'mona_banner_subtitle' );
		$mona_banner_title      = get_field( 'mona_banner_title' );

		if ( is_post_type_archive( 'product' ) || is_tax( 'product_cat' ) ) {
			$mona_banner_desk_img   = get_field( 'mona_banner_desk_img', MONA_WC_PRODUCTS );
			$mona_banner_mobile_img = get_field( 'mona_banner_mobile_img', MONA_WC_PRODUCTS );
			$mona_banner_subtitle   = get_field( 'mona_banner_subtitle', MONA_WC_PRODUCTS );
			$mona_banner_title      = get_field( 'mona_banner_title', MONA_WC_PRODUCTS );
			$type_checked           = get_field( 'mona_banner_type_checked', MONA_WC_PRODUCTS );

		}


		if ( wp_is_mobile() && ! empty( $mona_banner_mobile_img ) ) {
			echo wp_get_attachment_image( $mona_banner_mobile_img, 'banner-mobile-image' );
		} else if ( ! wp_is_mobile() && ! empty( $mona_banner_desk_img ) ) {
			echo wp_get_attachment_image( $mona_banner_desk_img, 'banner-desktop-image' );
		} else {
			echo '<img src="' . get_template_directory_uri() . '/public/helpers/images/banner-default-min.png" alt="" />';
		}
		?>
    </div>
    <div class="container">
        <div class="bn-wrap">
            <div class="bn-ct">
				<?php if ( $type_checked && ! empty( get_field( 'mona_banner_subtitle' ) ) ) : ?>
                    <span class="bn-current text-center upper mb-10 block"><?php echo $mona_banner_subtitle; ?></span>
				<?php endif; ?>
				<?php
				// If displaying the product post type archive, use the title of the product page
				if ( is_post_type_archive( 'product' ) ) {
					$title = get_the_title( MONA_WC_PRODUCTS );
				} else {
					// Otherwise, use the banner title if available, otherwise use the title of the current page or taxonomy
					$title = ! empty( $mona_banner_title ) ? $mona_banner_title : ( is_tax() ? $current->name : get_the_title() );
				}
				// Output the title with an H1 tag and specified classes
				echo '<h1 class="bn-title upper text-center mb-16">' . $title . '</h1>';
				?>

				<?php
				/**
				 * GET TEMPLATE PART
				 * BREADCRUMBS
				 */
				$slug = '/partials/breadcrumb';
				echo get_template_part( $slug );
				?>
            </div>
        </div>
    </div>
</div>