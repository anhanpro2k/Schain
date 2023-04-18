<?php

/**
 * Section name: Sản phẩm Pre-order
 * Description:
 * Author: Monamedia
 * Order: 3
 */
?>
<div id="<?php echo $args['id'] ?>" class="<?php echo $args['classes'] ?> proh section">
    <div class="container">
        <div class="proh-wrap">
			<?php
			$mona_home_section_preorder = get_field( 'mona_home_section_preorder' );
			?>
            <h2 class="t-title text-center fw-6 mb-40"><?php echo $mona_home_section_preorder['preorder_title']; ?></h2>

            <div class="proh-ct d-wrap">
                <div class="proh-left d-item">
                    <div class="proh-side">
						<?php
						// Lấy sản phẩm nổi bật
						$preorder_p_featured = $mona_home_section_preorder['preorder_p_featured'];
						$featured_p_id       = $preorder_p_featured['featured_p_id'];

						if ( ! empty( $featured_p_id ) ) :
							$f_product = wc_get_product( $featured_p_id[0] );
							?>
                            <div class="proh-side-ct">
                                <span class="pro-tag mb-24">Bán chạy</span>

								<?php
								if ( ! empty( $f_product ) ) {
									?>
                                    <p class="proh-side-name mb-16"><?php echo $f_product->get_title(); ?></p>


                                    <p class="proh-side-desc mb-32"><?php echo wp_trim_words( $f_product->get_short_description(), 15, "." ); ?></p>


                                    <a href="<?php echo $f_product->get_permalink(); ?>" class="btn mb-100">
                                        <span class="btn-inner"><?php echo __( 'Mua hàng ngay', 'monamedia' ); ?></span>
                                    </a>
									<?php
								}
								?>
                            </div>

                            <div class="proh-side-pro">
                                <div class="proh-side-dc">
									<?php echo wp_get_attachment_image( $preorder_p_featured['featured_bg'], 'image-medium-square' ) ?>
                                </div>
                                <div class="proh-side-img">
									<?php echo wp_get_attachment_image( $preorder_p_featured['featured_image'], 'image-medium-square' ) ?>
                                </div>
                                <div class="proh-side-stand">
                                    <img src="<?php echo get_site_url() ?>/template/assets/images/stand.svg" alt="">
                                </div>
                            </div>
						<?php endif; ?>
                    </div>
                </div>
                <div class="proh-right d-item">
                    <div class="pro-list d-wrap">
						<?php
						// Lấy danh sách sản phẩm theo danh mục được chọn
						$preorder_p_cat = $mona_home_section_preorder['preorder_p_cat'];

						$args     = array(
							'post_type'           => 'product',
							'post_status'         => 'publish',
							'ignore_sticky_posts' => 1,
							'posts_per_page'      => '6',
							'tax_query'           => array(
								array(
									'taxonomy' => 'product_cat',
									'field'    => 'term_id', //This is optional, as it defaults to 'term_id'
									'terms'    => $preorder_p_cat,
									'operator' => 'IN' // Possible values are 'IN', 'NOT IN', 'AND'.
								)
							)
						);
						$products = new WP_Query( $args );
						while ( $products->have_posts() ) : $products->the_post();
							global $product;
							?>
                            <div class="pro-item d-item d-3">
								<?php
								/**
								 * GET TEMPLATE PART
								 * BOX PRODUCT
								 */
								$slug = '/partials/loop/box';
								$name = 'product';
								echo get_template_part( $slug, $name );
								?>
                            </div>
						<?php endwhile;
						wp_reset_query(); ?>
                    </div>
                </div>
            </div>

            <a href="<?php echo esc_url( get_category_link( $preorder_p_cat ) ); ?>" class="btn center">
                <span class="btn-inner"><?php echo __( 'Xem thêm', 'monamedia' ); ?></span>
            </a>
        </div>
    </div>
</div>