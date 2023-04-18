<?php

/**
 * Section name: Breadcrumb
 * Description: Display the breadcrumb after banner of website
 * Author : Monamedia
 */
global $post;
$current = get_queried_object();

$array = [
	[ 'url' => get_the_permalink( MONA_PAGE_HOME ), 'title' => get_the_title( MONA_PAGE_HOME ) ],
];

if ( wp_get_post_parent_id( get_the_ID() ) ) {
	$parentId = wp_get_post_parent_id( get_the_ID() );
	$array[]  = [
		'url'   => get_permalink( $parentId ),
		'title' => get_the_title( $parentId ),
	];
}

if ( is_home() ) {

	$array[] = [
		'url'   => '',
		'title' => get_the_title( MONA_PAGE_BLOG ),
	];
} else if ( is_single() ) {
	$array[] = [
		'url'   => get_permalink( MONA_PAGE_BLOG ),
		'title' => get_the_title( MONA_PAGE_BLOG ),
	];

	$array[] = [
		'url'   => '',
		'title' => get_the_title( $post->ID ),
	];
} else if ( is_category() ) {
	$array[] = [
		'url'   => get_permalink( ( MONA_PAGE_BLOG ) ),
		'title' => get_the_title( MONA_PAGE_BLOG ),
	];
	$array[] = [
		'url'   => '',
		'title' => $current->name,
	];
} else if ( is_post_type_archive( 'product' ) ) {
	$array[] = [
		'url'   => '',
		'title' => get_the_title( MONA_WC_PRODUCTS ),
	];
} else if ( is_tax( 'product_cat' ) ) {
	$array[] = [
		'url'   => get_permalink( MONA_WC_PRODUCTS ),
		'title' => get_the_title( MONA_WC_PRODUCTS ),
	];

	$array[] = [
		'url'   => '',
		'title' => $current->name,
	];
} else if ( is_search() ) {
	$array[] = [
		'url'   => '',
		'title' => __( 'Kết quả tìm kiếm', 'monamedia' ),
	];
} else if ( is_page() ) {
	$array[] = [
		'url'   => '',
		'title' => esc_html( get_the_title( $post->ID ) ),
	];
}
?>

<!-- BREADCRUMB -->
<ul class="breadcrumbs-list">
	<?php
	foreach ( $array as $key => $breadcrumb_item ) {
		$href               = $breadcrumb_item['url'];
		$title              = $breadcrumb_item['title'];
		$current_breadcrumb = '';
		if ( $breadcrumb_item == end( $array ) ) {
			$href               = 'javascript:;';
			$current_breadcrumb = 'current';
		}
		?>
        <li class="breadcrumbs-item <?php echo $current_breadcrumb ?>">
			<?php echo "<a href='$href'>$title</a>" ?>
        </li>
	<?php } ?>
</ul>