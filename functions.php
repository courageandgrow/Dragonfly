<?php

    /**========================================================================
     *                           ENQUEUE
     *========================================================================**/

    // Enqueue the parent theme's style and custom scripts
    function divi_child_enqueue_styles() {
        $version = wp_get_theme()->get('Version');

        // Enqueue parent theme's style
        wp_enqueue_style('divi-parent-style', get_template_directory_uri() . '/style.css', array(), $version);

        // Enqueue child theme's split styles
        wp_enqueue_style('child-theme-variables', get_stylesheet_directory_uri() . '/css/variables.css', array(), $version);
        wp_enqueue_style('child-theme-typography', get_stylesheet_directory_uri() . '/css/typography.css', array('child-theme-variables'), $version);
        wp_enqueue_style('child-theme-menus', get_stylesheet_directory_uri() . '/css/menus.css', array('child-theme-variables'), $version);
        wp_enqueue_style('child-theme-buttons', get_stylesheet_directory_uri() . '/css/buttons.css', array('child-theme-variables'), $version);
        wp_enqueue_style('child-theme-icons', get_stylesheet_directory_uri() . '/css/icons.css', array('child-theme-variables'), $version);
        wp_enqueue_style('child-theme-containers', get_stylesheet_directory_uri() . '/css/containers.css', array('child-theme-variables'), $version);
        wp_enqueue_style('child-theme-optin', get_stylesheet_directory_uri() . '/css/optin.css', array('child-theme-variables'), $version);
        wp_enqueue_style('child-theme-pricing', get_stylesheet_directory_uri() . '/css/pricing.css', array('child-theme-variables'), $version);
        wp_enqueue_style('child-theme-portfolios', get_stylesheet_directory_uri() . '/css/portfolios.css', array('child-theme-variables'), $version);
        wp_enqueue_style('child-theme-faqs', get_stylesheet_directory_uri() . '/css/faqs.css', array('child-theme-variables'), $version);
        wp_enqueue_style('child-theme-blog', get_stylesheet_directory_uri() . '/css/blog.css', array('child-theme-variables'), $version);

        // Enqueue jQuery (included with WordPress)
        wp_enqueue_script('jquery');

        // Enqueue your custom script (cg-scripts.js), making sure it depends on jQuery
        wp_enqueue_script(
            'cg-scripts', // A unique handle for your script
            get_stylesheet_directory_uri() . '/cg-scripts.js', // Path to your script
            array('jquery'), // Dependencies (jQuery in this case)
            '1.0.0', // Version number
            false // Load in the footer
        );
    }

    add_action('wp_enqueue_scripts', 'divi_child_enqueue_styles');




    /**========================================================================
     *                           DYNAMIC COPYRIGHT
     *========================================================================**/
    function cg_copyright_function() {
        $site_name = get_bloginfo('name');
        return '&copy;' . date("Y") . ' ' . $site_name;
    }

    add_shortcode('cg_copyright', 'cg_copyright_function');


