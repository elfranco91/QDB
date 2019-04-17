
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

  //prevent sending if button is clicked without proper data
$(document).ready(function(){
  $('.submit').click(function (event){

    console.log('clicked Button')

    var email = $('.email').val()
    var subject = $('.subject').val()
    var message = $('.message').val()
    var statusElm = $('.status')
    statusElm.empty()

    //valadate a proper email address

    if (email.length > 5 && email.includes('@') && email.includes('.')) {
      statusElm.append('<div>Email is valid</div>')
    } else {
      event.preventDefault()
      statusElm.append('<div>Email is not valid</div>')
    }
      //valadate subject

      if(subject.length >= 2) {
        statusElm.append('<div>Subject is valid</div>')
      } else {
        event.preventDefault()
        statusElm.append('<div>Subject is not valid</div>')
      }
        //valadate message
      if(message.length >= 10) {
        statusElm.append('<div>Message is valid</div>')
      } else {
        event.preventDefault()
        statusElm.append('<div>Message is not valid</div>')
      }
  })
})

