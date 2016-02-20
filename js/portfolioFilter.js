
$(function(){

  $('#comboLink').on('click', function(e){
    e.preventDefault();
    $('.project-item').map(function(){
      $(this).css('display','inline-block');
    });
  }); // end combo

  $('#webLink').on('click', function(e){
    e.preventDefault();
    $('.project-item').map(function(){
      if ($(this).data('type') === 'web'){
        $(this).css('display','inline-block');
      }
      else {
        $(this).css('display','none');
      }
    });
  });

  $('#iosLink').on('click', function(e){
    e.preventDefault();
    $('.project-item').map(function(){
      if ($(this).data('type') === 'ios'){
        $(this).css('display','inline-block');
      } else {
        $(this).css('display','none');
      }
    });
  });
});
