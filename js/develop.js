$('body').append('<div id="sizer"></div>');
$( '#sizer' ).click( function() {
  $('body').toggleClass( 'show-grid' );
});
$( 'h2' ).prev( 'p' ).addClass( 'bellow-3');