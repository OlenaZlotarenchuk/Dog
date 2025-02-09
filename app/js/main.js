$(function(){

    $('.menu__btn').on('click', function(){
        $('.menu__btn').toggleClass('active');
        $('.menu__list').slideToggle(); 
    });

});

$(document).ready(function(){
    $('.products_testimonial-slider').slick(
        {
            arrows: false,
            dots: true,
            speed:1000,
            easing:'ease',
            adaptiveHeight: true,
            draggable:false,
            centerMode: true,
            centerPadding: '60px',
            slidesToShow: 3,
            infinite:true,
            autoplay: true,
            pauseOnFocus: false,

            responsive: [
                {
                  breakpoint: 930,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '20px',
                    slidesToShow: 1
                  }
                },
                {
                  breakpoint: 480,
                  settings: {
                    arrows: false,
                    centerMode: true,
                    centerPadding: '10px',
                    slidesToShow: 1
                  }
                }
              ]
        }
    );
});
