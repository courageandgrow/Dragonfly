/**========================================================================
 *                           FOUC
 *========================================================================**/
var elm = document.getElementsByTagName("html")[0];
elm.style.display = "none";

document.addEventListener("DOMContentLoaded", function (event) {
    console.log("AMW Script: FOUC");
    elm.style.display = "block";
});



/**========================================================================
 *                           INLINE LOGO → MOBILE MENU
 *========================================================================**/
jQuery(function ($) {

    console.log("AMW Script: Inline Logo -> Mobile Menu");

    $window = $(window);
    $body = $('.cg-header-menu');

    function resize() {
        console.log("AMW Debug")
        var isSmallWindow = $window.width() < 981;

        // Toggle classes based on window size
        $body.toggleClass('et_pb_menu--style-left_aligned', isSmallWindow);
        $body.toggleClass('et_pb_menu--style-inline_centered_logo', !isSmallWindow);
    }

    setTimeout(function () {
        $(window)
            .resize(resize)
            .trigger('resize');
    }, 100);
});


/**========================================================================
 *                           COLLAPSIBLE MENU
 *========================================================================**/
/* Source: https://www.peeayecreative.com/how-to-collapse-divi-mobile-menu-submenus/ */

jQuery(function ($) {
    $(document).ready(function () {

        console.log("AMW Script: Collapsible Menu");

        $("body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu  li.page_item_has_children").append('<a href="#" class="mobile-toggle"></a>');
        $('ul.et_mobile_menu li.menu-item-has-children .mobile-toggle, ul.et_mobile_menu li.page_item_has_children .mobile-toggle').click(function (event) {
            event.preventDefault();
            $(this).parent('li').toggleClass('dt-open');
            $(this).parent('li').find('ul.children').first().toggleClass('visible');
            $(this).parent('li').find('ul.sub-menu').first().toggleClass('visible');
        });
        iconFINAL = 'P';
        $('body ul.et_mobile_menu li.menu-item-has-children, body ul.et_mobile_menu li.page_item_has_children').attr('data-icon', iconFINAL);
        $('.mobile-toggle').on('mouseover', function () {
            $(this).parent().addClass('is-hover');
        }).on('mouseout', function () {
            $(this).parent().removeClass('is-hover');
        })
    });
}); 


/**========================================================================
 *                           SCROLLING MENU ACTIVE LINK
 *========================================================================**/

// Generated via ChatGPT. Script also in Code Snippets doc in Notion. 
// Begin jQuery function when the document is ready
jQuery(function ($) {

    console.log("AMW Script: Scrolling Menu Active Link");
    
    // Add 'current-menu-item' class to the first menu item upon page load
    $('#cg-menu li:first-child').addClass('current-menu-item')

    // Calculate and store the top positions of each section in an array
    // jQuery's .map() function is used to create a new array with the top positions of each section
    var sectionPositions = $('.cg-style').map(function () {
        return $(this).offset().top;
    }).get();

    // Recalculate section positions on window resize
    $(window).resize(function () {
        //console.log("resized!");
        sectionPositions = $('.cg-style').map(function () {
            return $(this).offset().top;
        }).get();
    });

    // Log for debugging
    // console.log(sectionPositions);

    // Sets variable so calculation 
    var isFirstScroll = true;

    // Perform the following operations when the window is scrolled
    $(window).scroll(function () {

        if (isFirstScroll) {
            sectionPositions = $('.cg-style').map(function () {
                return $(this).offset().top;
            }).get();
            isFirstScroll = false;
        }

        // Get the current scroll position
        var scrollPos = $(window).scrollTop();

        // Log the current scroll position for debugging purposes
        //console.log("scrollPos=" + scrollPos);

        // Initialize a variable to hold the current section
        var currentSection = null;

        // Go through each section
        $('.cg-style').each(function (i) {

            // If the scroll position is greater than or equal to the top position of the current section minus 100,
            // set the current section to this section
            // This will set the current section to the first section that has its top boundary within 100px of the viewport top
            if (scrollPos >= sectionPositions[i] - 100) {
                currentSection = $(this);
            }
        });

        // Check if the user is at the top of the page to highlight Home
        if (scrollPos <= 100) {
            $('.current-menu-item').removeClass('current-menu-item');
            $('#cg-menu li:first-child').addClass('current-menu-item');
            return;  // Exit the function early since we've found our highlighted menu item
        }

        // If a section is currently in view
        if (currentSection != null) {

            // Remove 'current-menu-item' class from all menu items
            $('.current-menu-item').removeClass('current-menu-item')

            // Add 'current-menu-item' class to the menu item that corresponds to the current section
            // This is done by finding the menu item whose link's href attribute matches the ID of the current section
            $('#cg-menu li').filter(function () {
                //console.log(currentSection.attr('id'));
                return $(this).find('a').attr('href').slice(1) === currentSection.attr('id');
            }).addClass('current-menu-item')

            // If the current section's ID is 'tip', add the 'tip-button-active' class to '#tip-button'
            if (currentSection.attr('id') === 'tip') {
                $('#tip-button').addClass('tip-button-active');
            } else { // Otherwise, remove the 'tip-button-active' class from '#tip-button'
                $('#tip-button').removeClass('tip-button-active');
            }
        }
    });

});
