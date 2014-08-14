//Lightbox

$('.js-lightbox').click(function(){
  $('.custom-lightbox').fadeIn();
});

$('.overlay, .js-close').click(function(){
  $('.custom-lightbox').fadeOut();
});

//Sticky

$(document).ready(function(){
    $(".nav").sticky({topSpacing:0});
  });

//Navigation
$('.nav > ul > li > a').click(function(){

  if ($(this).siblings().size() > 0) {

    $(this).toggleClass('open');

  } else {
    return true;
  }
  $(this).siblings('.sub-menu').toggleClass('open');
});

$('.cat a').click(function(){
  if ($(this).siblings().size() > 0) {
    $(this).parent().siblings().children('a').removeClass('open').siblings('ul').removeClass('active');
    $(this).toggleClass('open');
    $(this).siblings('ul').toggleClass('active');
  } else {
    return true;
  }
});

$('.bxslider').bxSlider({
  auto: true,
  pager: true,
  controls: false
});

//Height
//Doing this just for window detection
jQuery.browser = {};
    (function () {
        jQuery.browser.msie = false;
        jQuery.browser.version = 0;
        if (navigator.userAgent.match(/MSIE ([0-9]+)\./)) {
            jQuery.browser.msie = true;
            jQuery.browser.version = RegExp.$1;
        }
    })();

//SET VIEW PORT HEIGHT Functionally
function getBrowserHeight() {
    if ($.browser.msie) {
        return document.compatMode == "CSS1Compat" ? document.documentElement.clientHeight :
                 document.body.clientHeight;
    } else {
        return self.innerHeight;
    }
}

$('#wrapper').css('min-height', getBrowserHeight());

$(document).ready(function(){
    $(window).resize(function(){
        $('.bx-viewport').css('height', getBrowserHeight());
        $('#wrapper').css('min-height', getBrowserHeight());
        //slider.viewport.height(getViewportHeight());
    });
});

//Back to Top
$('#backlink').click(function(){

  $('html,body').animate({
    scrollTop: 0
  }, 1500);


});

// Google Fonts - Roboto Condensed

WebFontConfig = {
    google: { families: [ 'Roboto+Condensed:400,700:latin', 'Open+Sans::latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();
