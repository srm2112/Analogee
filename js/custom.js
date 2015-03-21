
/*
function ($) {



// Works FILTERS
    var $grid = $('#repair-grid');
    $grid.shuffle({
        itemSelector: '.repair-grid', // the selector for the items in the grid
        speed: 500 // Transition/animation speed (milliseconds)
    });

    // reshuffle when user clicks a filter item //
    $('#repair-filter li a').click(function (e) {
        e.preventDefault();
        // set active class
        $('#repair-filter li a').removeClass('active');
        $(this).addClass('active');
        // get group name from clicked item
        var groupName = $(this).attr('data-group');
        // reshuffle grid
        $grid.shuffle('shuffle', groupName);
    });


    $(document).ready(function () {
        $('#repair-filter li a.active').click();
    });
})(jQuery);
*/