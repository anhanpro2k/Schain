<?php
/**
 * Template name: Giới thiệu Page
 * @author : Hy Hý
 */
get_header();
while ( have_posts() ):
    the_post();
    ?>
    <?php
endwhile;
get_footer();