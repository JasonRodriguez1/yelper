$(document).ready(function() {
    // Hide after div by default
    $('#after-review').hide();
    $('.instruction #after-review').hide();
    $("h4 a").on("click", function() {
      $('#before-review').hide();
      $('#before-review h4').hide();
      $('#after-review').show();
      $('.instruction #after-review').show();
    });
});
