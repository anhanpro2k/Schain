<?php
/**
 * Section name: Footer Meta Global
 * Description: Show Footer Meta
 * Author: Monamedia
 * Order: 0
 */
?>
<div class="contact-component">
    <div class="container">
        <div class="contact-component-con d-wrap">
            <?php
            // form liên hệ
            $mona_footermeta_form = get_field('mona_footermeta_form', MONA_PAGE_HOME);
            if (content_exists($mona_footermeta_form)) :
            ?>
                <div class="contact-component-con-left d-2 d-item">
                    <div class="content">
                        <div class="title">
                            <p class="title-text"><?php echo $mona_footermeta_form['form_title']; ?></p>
                        </div>
                        <div class="form-footer-meta">
                            <?php
                            $form_shortcode = $mona_footermeta_form['form_shortcode'];
                            echo (do_shortcode($form_shortcode) != $form_shortcode) ? do_shortcode($form_shortcode) : '';
                            ?>
                        </div>
                    </div>
                </div>
            <?php endif; ?>

            <?php
            // form liên hệ
            $mona_footermeta_info = get_field('mona_footermeta_info', MONA_PAGE_HOME);
            if (content_exists($mona_footermeta_info)) :
            ?>
                <div class="contact-component-con-right d-2 d-item">
                    <div class="content">
                        <div class="title">
                            <p class="title-text"><?php echo $mona_footermeta_info['info_title']; ?></p>
                        </div>
                        <ul class="list-contact">
                            <?php
                            $info_list_item = $mona_footermeta_info['info_list_item'];
                            foreach ($info_list_item as $item) :
                                if (content_exists($item)) :
                            ?>
                                    <li class="list-item">
                                        <a href="<?php echo ($item['item_href'] != '') ? $item['item_href'] : 'javascript:;'; ?>" class="link-item">
                                            <span class="img-icon">
                                                <?php echo wp_get_attachment_image($item['item_icon'], 'image-small-square'); ?>
                                            </span>
                                            <span class="content">
                                                <?php echo $item['item_text']; ?>
                                            </span>
                                        </a>
                                    </li>
                            <?php endif;
                            endforeach; ?>
                        </ul>
                        <div class="img-contact">
                            <?php echo wp_get_attachment_image($mona_footermeta_info['info_img'], 'image-medium-square'); ?>
                        </div>
                    </div>
                </div>
            <?php endif; ?>
        </div>
    </div>
</div>