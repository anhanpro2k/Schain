<?php

/**
 * Template name: Liên hệ Page
 * @author : Hy Hý
 */
get_header();
while (have_posts()) :
    the_post();
?>
    <main class="main">
        <?php
        /**
         * GET TEMPLATE PART
         * BANNER
         */
        $slug = '/partials/global/banners';
        echo get_template_part($slug);

        // Lấy field
        $mona_contact_section_contact = get_field('mona_contact_section_contact');
        ?>
        
        <div class="contact">
            <div class="container">
                <div class="contact-content d-wrap">
                    <div class="contact-content-left d-item">
                        <div class="contact-content-left-note">
                            <p class="note-text">
                                <?php echo $mona_contact_section_contact['contact_subtitle']; ?>
                            </p>
                        </div>
                        <div class="contact-content-left-title">
                            <p class="title-text">
                                <?php echo $mona_contact_section_contact['contact_title']; ?>
                            </p>
                        </div>
                        <div class="contact-content-left-content">
                            <?php echo $mona_contact_section_contact['contact_desc']; ?>
                        </div>
                        <div class="contact-content-left-img">
                            <?php echo wp_get_attachment_image($mona_contact_section_contact['contact_figure'], 'image-medium-square'); ?>
                        </div>
                    </div>
                    <div class="contact-content-right d-item">
                        <div class="contact-content-right-map">
                            <?php echo $mona_contact_section_contact['contact_iframe']; ?>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
    <?php
    /**
     * GET TEMPLATE PART
     * FOOTER META
     */
    $slug = '/partials/global/footer-meta';
    echo get_template_part($slug);
    ?>
<?php
endwhile;
get_footer();
