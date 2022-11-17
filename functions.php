<?php 

// Register ACF blocks via block.json 
function register_acf_blocks() {
    register_block_type( __DIR__ . '/build/blocks/block1' );
    register_block_type( __DIR__ . '/build/blocks/block2' );
}
add_action( 'init', 'register_acf_blocks', 5 );


function custom_scripts_and_styles() {
  $ASSET_INFO = include get_stylesheet_directory() . '/build/theme/index.asset.php';
  wp_enqueue_style( 'custom-style', get_stylesheet_directory_uri() . '/build/theme/index.css', array(), $ASSET_INFO['version'] );
  wp_enqueue_script( 'custom-script', get_stylesheet_directory_uri() . '/build/theme/index.js', $ASSET_INFO['dependencies'], $ASSET_INFO['version'] );
}
add_action( 'wp_enqueue_scripts', 'custom_scripts_and_styles' );