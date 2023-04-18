<?php

/**
 * Section name: Lời cam kết
 * Description: 
 * Author: Monamedia
 * Order: 4
 */
?>
<div id="<?php echo $args['id'] ?>" class="<?php echo $args['classes'] ?> ser sec-decor">
    <div class="container">
        <div class="ser-wrap pos-relative">
            <div class="ser-list d-wrap flex-jc-between">
                <?php
                $mona_home_section_pledge = get_field('mona_home_section_pledge');
                foreach ($mona_home_section_pledge['pledge_list_item'] as $item) :
                    if (content_exists($item)) :
                ?>
                        <div class="ser-item d-item">
                            <div class="ser-item-wrap">
                                <div class="ser-item-icon">
                                    <?php echo wp_get_attachment_image($item['item_icon'], 'image-small-square'); ?>
                                </div>

                                <div class="ser-item-content">
                                    <p class="ser-item-tit"><?php echo $item['item_title']; ?></p>
                                    <p class="ser-item-desc"><?php echo $item['item_desc']; ?></p>
                                </div>
                            </div>
                        </div>
                <?php
                    endif;
                endforeach;
                ?>
            </div>
        </div>
    </div>
</div>