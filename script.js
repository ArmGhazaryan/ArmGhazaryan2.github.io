var fixmeTop = $('nav').offset().top;
$(window).scroll(function() {
var currentScroll = $(window).scrollTop();
if (currentScroll >= fixmeTop) {
$('nav').css({
  position: 'fixed',
  left: '0',
  top: '0',
  zIndex: '1',
  transition: '.9s',
});
}
else {
$('nav').css({ 
    position: 'static',
    width: '100%',
 });
}
});