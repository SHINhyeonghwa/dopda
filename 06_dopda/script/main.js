// SCROLL TOP BUTTON
$(function(){
    $(window).scroll(function(){
        if($(window).scrollTop() > 30 ){
            $('header').addClass('active');
            $('.scroll-top').addClass('active');
        }
        else{
            $('header').removeClass('active');
            $('.scroll-top').removeClass('active');
        }
    });
});
// SCROLLA 
$(function(){
    $('.animate').scrolla({
        mobile:true,
        once:false
    }); 
});
// SLICK JS
$(function(){
    $('.visual .slide').slick({
        arrows:false,
        dots:true,
        autoplay:true,
        fade:true,
        autoplaySpeed:3500,
        pauseOnHover:false,
        pauseOnFocus:false
    });
});
















































