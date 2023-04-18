<?php
/**
 * The template for displaying single.
 *
 * @package Monamedia
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

get_header();
while ( have_posts() ):
    the_post();
    mona_set_post_view();
    ?>
    <?php
endwhile;
get_footer();