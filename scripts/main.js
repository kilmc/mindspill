$(document).ready(function() {
  $('.logo').click(function() {
    $('.site-description').slideToggle('fast', function() {
      // Animation complete.
    });
  });
});