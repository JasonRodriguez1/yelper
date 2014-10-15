$(document).ready(function() {

});
// jQuery UI Tooltip styling
$( document ).tooltip({
      track: true,
      using: function( position, feedback ) {
        $( this ).css( position );
        $( "<div>" )
          .addClass( "arrow" )
          .addClass( feedback.vertical )
          .addClass( feedback.horizontal )
          .appendTo( this );
      }
  });
