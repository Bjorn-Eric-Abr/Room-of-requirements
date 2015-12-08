// Moist menu
var primaryMenu = $('.primary-menu');
var menuTrigger = $('#menu-trigger');

menuTrigger.click(function(e) {
  event.preventDefault();
  primaryMenu.fadeToggle( 200, 'swing' );

});