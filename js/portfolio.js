$(function(){
  // Extract the text from the template
  var raw_template = $('#portfolio-template').html();
  // Complile that into an handlebars template
  var template = Handlebars.compile(raw_template);
  // Retrieve the placeHolder where the posts will be displayed
  // Handlebars.registerPartial("project", $("#project-partial").html());
  var placeHolder = $('#content');
  // Fetch all portfolio items data from the server in JSON
  $.get('data/portfolioItems.json', function(data){
      // Generate the HTML for each post+
    var html = template({portfolio:data});
      // Render the posts into the page
    placeHolder.append(html);
  }); // end get

}); // end ready



// //
// $.get('data/portfolioItems.json', function(data){
//   $('ul#filter a').click(function(){
// //     if
// //   });
//
// // });
