jQuery(document).ready(function($) {

    var $document = $(document),
        $window = $(window),
        $navbar = $('#top-navbar'),
        $navbarContent = $('#top-navbar-content'),
        $navbarToggle = $('#top-navbar-toggle'),
        $days = $('td.day');

    $navbarContent.localScroll({
        filter:'.smoothScroll',
        duration: 300,
        hash: true,
        onBefore: function() {
            if ($navbarToggle.is(':visible')) {
                $navbarContent.collapse('hide');
            }
        }
    });

    $navbarContent.on('hide.bs.collapse', function () {
        $navbar.removeClass('expanded');
    });

    $navbarContent.on('show.bs.collapse', function () {
        $navbar.addClass('expanded');
    });

    var updateNavbarTransparency = function() {
        if ($window.scrollTop() > 0) {
            $navbar.addClass('opaque');
        } else {
            $navbar.removeClass('opaque');
        }
    };
    updateNavbarTransparency();
    $window.scroll(updateNavbarTransparency);

    $('.gregorian-to-discordian-calendar [data-toggle="tooltip"]').tooltip({
        container : '.gregorian-to-discordian-calendar'
    });

    $('.discordian-to-std-scale [data-toggle="tooltip"]').tooltip({
        container : '.discordian-to-std-scale'
    });

    $days.hover(function(event) {
        try {
            var dayNumber = $(this).data("day");
            $("td.day-" + dayNumber).addClass("active").tooltip("show");
        } catch(ex) {}
    },
    function(event) {
        try {
            var dayNumber = $(this).data("day");
            $("td.day.active").removeClass("active").tooltip("hide");
        } catch(ex) {}
    });
});
