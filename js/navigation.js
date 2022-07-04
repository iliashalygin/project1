$(document).ready(function() {
    $('a[href*=#]').bind('click', function(e) {
    e.preventDefault();

    let target = $(this).attr("href");

    $('html').stop().animate({ scrollTop: $(target).offset().top}, 1000, function() {
    });

    return false;
    });
});