<?php

/**
 * Template name: Trang chủ Page
 * @author : Hy Hý
 */
get_header();
while (have_posts()) :
    the_post();
?>
    <main class="main">
        <?php
        Elements::Group(
            'home',
            [
                'home-gallery' => [
                    'insert' => [
                        'after' => [
                            'global/footer-meta'
                        ]
                    ]
                ]
            ]
        )->Html();
        ?>
    </main>
    <?php
    /**
     * GET TEMPLATE PART
     * BANNER
     */
    $slug = '/partials/global/footer-meta';
    echo get_template_part($slug);
    ?>
<?php
endwhile;
get_footer();
