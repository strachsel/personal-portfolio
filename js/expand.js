$(document).ready(function(){
  $(document).on('click', '.viewProject a', function(e){
      e.preventDefault();
      // get specific project .expanded item.
      // change from id of expanded to class.
      var portfolioId = $(this).data('portfolio-id');
      $('.modalDialog').hide();
      $('.modalDialog-'+ portfolioId).show('slow', function() {
      });
      $('body').addClass('scrollprevent');
    });

// update to .close class.  target close class
  $(document).on('click', '.close', function(e){
      e.preventDefault();
    // get specific project .expanded item.
      $('.modalDialog').hide('slow', function(){
      });
      $('body').removeClass('scrollprevent');
    });
});
