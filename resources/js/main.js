$(document).ready(function () {
  $('.frame').slick({
   arrows: false,
   autoplay: true,
   autoplaySpeed: 2000,
   fade: true
 });
});


$('#zoom-box').animate({
    width:'150px',
    height:'150px',
    top:'0',
    left:'0',
    'font-size':'50px',
    'line-height':'300px'
}, 6000);
