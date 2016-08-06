var agent = navigator.userAgent || navigator.vendor || window.opera || '';
var isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(agent);
var isIOS = /iPhone|iPad|iPod/i.test(agent);

if (isIOS) {
    {% include js/iosfix.js %}
}

jQuery(document).ready(function($) {

    var $document = $(document),
        $window = $(window),
        $navbar = $('#top-navbar'),
        $navbarContent = $('#top-navbar-content'),
        $days = $('td.day');

    $('.gregorian-to-discordian-calendar [data-toggle="tooltip"]').tooltip({
        container : '.gregorian-to-discordian-calendar'
    });

    $('.discordian-to-std-scale [data-toggle="tooltip"]').tooltip({
        container : '.discordian-to-std-scale'
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
