
$(function(){

  $('#comboLink').on('click', function(e){
    e.preventDefault();
    $('.item').map(function(){
      $(this).css('display','inline-block');
    });
  }); // end combo

  $('#webLink').on('click', function(e){
    e.preventDefault();
    $('.item').map(function(){
      if ($(this).data('category') === 'web'){
        $(this).css('display','inline-block');
      }
      else {
        $(this).css('display','none');
      }
    });
  });

  $('#iosLink').on('click', function(e){
    e.preventDefault();
    $('.item').map(function(){
      if ($(this).data('category') === 'ios'){
        $(this).css('display','inline-block');
      }
        else {
        $(this).css('display','none');
      }
    });
  });
});
