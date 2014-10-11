$(document).ready(function() {
    // Hide after div by default
    $('#after-review').hide();
    $('.instruction #after-review').hide();
    $( ".review-create .button" ).click(function() {
      alert("I am an alert box!");
      $('#before-review').hide();
      $('#after-review').show();
      $('.instruction #after-review').show();
    });
});
