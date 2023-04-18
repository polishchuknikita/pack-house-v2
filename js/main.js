jQuery(document).ready(function($){
    //Check to see if the window is top if not then display button
    $(window).scroll(function(){
        if ($(this).scrollTop() > 300) {
            $('.scroll-to-top').addClass('active');
        } else {
            $('.scroll-to-top').removeClass('active');
        }
    });
    //Click event to scroll to top
    $('.scroll-to-top').click(function(){
        $('html, body').animate({scrollTop : 0},360);
        return false;
    });
});