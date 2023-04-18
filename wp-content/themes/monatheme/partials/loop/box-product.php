<?php
global $post;
?>
<div class="pro-item-wrap">
    <div class="pro-item-img">
		<?php
		$mona_product_tag = get_field( 'mona_product_tag' );
		?>
		<?php
		if ( ! empty( $mona_product_tag ) && is_array( $mona_product_tag ) ) {
			?>
            <div class="pro-tag-list">
				<?php
				foreach ( $mona_product_tag as $key_tag => $item_tag ) {
					if ( $item_tag === 'bestseller' ) {
						?>
                        <span class="pro-tag"><?php echo __( 'Bán chạy', 'monamedia' ); ?></span>
						<?php
					} else if ( $item_tag === 'new' ) { ?>
                        <span class="pro-tag new"><?php echo __( 'Hàng mới', 'monamedia' ); ?></span>
						<?php
					}
				}
				?>
            </div>
			<?php
		}
		?>
        <a href="<?php echo get_permalink( $post->ID ); ?>" class="img-inner">
			<?php
			if ( ! empty( get_the_post_thumbnail( $post->ID ) ) ) {
				echo get_the_post_thumbnail( $post->ID, 'image-medium-square' );
			} else { ?>
                <img src="<?php echo get_template_directory_uri() ?>/public/helpers/images/default-thumbnail.jpg"
                     alt="">
				<?php
			} ?>
        </a>
		<?php
		$mona_product_option = get_field( 'mona_product_option', $post->ID );
		?>
		<?php
		if ( $mona_product_option == true ) {
			?>
			<?php
			if ( wp_is_mobile() ) {
				// Nếu đang trên điện thoại, đổi link để mở ứng dụng Messenger
				$chat_link = "fb-messenger://user/100537656312246";
			} else {
				// Nếu đang trên máy tính, giữ nguyên liên kết ban đầu
				$chat_link = "https://www.facebook.com/messages/t/100537656312246";
			}
			?>

            <a target="_blank" href="<?php echo $chat_link; ?>" class="pro-item-add">
				<?php echo __( 'Đặt hàng trước', 'monamedia' ); ?>
            </a>

			<?php
		} else { ?>
            <form class="frmAddProductCart">
                <input type="hidden" name="product_id" value="<?php echo $post->ID; ?>">
                <a href="javascript:;" class="pro-item-add mona-add-to-cart-list is-loading-btn">
					<?php echo __( 'Thêm vào giỏ', 'monamedia' ); ?>
                </a>
            </form>
			<?php
		} ?>
    </div>

    <div class="pro-item-content">
        <a href="<?php echo get_permalink( $post->ID ); ?>"
           class="pro-item-name"><?php echo get_the_title( $post->ID ); ?></a>
		<?php
		$product_price = floatval( get_post_meta( get_the_ID(), '_regular_price', true ) );
		echo '<span class="pro-item-price">';
		if ( $mona_product_option == true ) {
			echo __( 'Pre Order', 'monamedia' );
		} else {
			if ( ! empty( $product_price ) ) {
				echo number_format( $product_price, 0, '.', ',' ) . ' ' . __( 'đ', 'monamedia' );
			}
		}
		echo '</span>';
		?>


    </div>
</div>