$(function(){

  var portfolioData = [];
  // Extract the text from the template
  var raw_template = $('#portfolio-template').html();
  // Complile that into an handlebars template
  var template = Handlebars.compile(raw_template);
  // Retrieve the placeHolder where the posts will be displayed
  // Fetch all portfolio items data from the server in JSON
  $.get('data/portfolioItems.json', function(data){
      // Generate the HTML for each post+
    window.portfolioData = data;

    var portfolioItems = data.map(template);
      // Render the posts into the page
    $('#portfolio').append(portfolioItems);
  }); // end get

}); // end ready



// //
// $.get('data/portfolioItems.json', function(data){
//   $('ul#filter a').click(function(){
// //     if
// //   });
//
// // });
