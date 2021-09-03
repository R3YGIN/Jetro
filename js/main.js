$(function(){

$('.slider__big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 1500,
    asNavFor: '.slider__nav'
  });
  $('.slider__nav').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__big',
    dots: false,
    arrows: false,
    centerMode: true,
    focusOnSelect: true
  });


  $('.header__menu-btn').on('click', function(){
    $('.header__menu > ul').slideToggle();
  })


});