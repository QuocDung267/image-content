wow = new WOW({
    animateClass: 'animated',
    offset: 40,
    live: true
});
wow.init();


$('.bw_lastChildMenu').click(function() {
    $('.bw_menuMobile').addClass('bw_show');
    $('.bw_menuMobile h3 span').click(function() {
        $(this).closest('.bw_menuMobile').removeClass('bw_show');
    });
    $('.bw_menuMobile ul span').click(function() {
        $(this).closest('li').toggleClass('bw_active');
    });
});

$('.bw_clickToDiv').click(function() {
    var thisID = $(this).attr('data-href');
    $('html,body').animate({
            scrollTop: $(thisID).offset().top
        },
        'slow');
})