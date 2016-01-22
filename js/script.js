$(document).ready(function(){
  // Extract the text from the template
  var raw_template = $('#portfolio-template').html();
  // Complile that into an handlebars template
  var template = Handlebars.compile(raw_template);
  // Retrieve the placeHolder where the posts will be displayed
  var placeHolder = $('#content');
  // Fetch all portfolio items data from the server in JSON
  $.get('js/portfolioItems.json', function(data){
    console.log ('get status???');
    $(this).each(data, function(index, element){
      // Generate the HTML for each post
      var html = template(element);
      // Render the posts into the page
      placeHolder.append(html);
    }); // end each
  }); // end get
}); // end ready


//
//
// $(document).ready(function(){
//   var content = document.getElementById('content');
//   var html = '';
//   var data = [];
//   var template = Handlebars.compile(document.getElementById('portfolio-template').innerHTML);
//   content.innerHTML = template(data);
  //
  // $.ajax({
  //   type: 'GET',
  //   url: 'js/portfolioItems.json',
  //   data: { get_param: 'value'},
  //   dataType: 'json',
  //   success: function (data) {
  //     $('#portfolio-template').html('data');
  //   }
  // });
 //end ready



  // var data = {
  //   title: 'Portfolio',
  //   portfolio: [
  //     { title: 'WedWeek',
  //       description: 'WedWeek is the website for couples who want to get married',
  //       publishedOn: 'January 12th 2016',
  //       category: 'Website',
  //       img: './img/img1.jpg'
  //     },
  //     { title: 'Tokka Guide',
  //       description: 'Tokka guide is an app to guide you around your city',
  //       publishedOn: 'January 14th 2016',
  //       category: 'IOS app',
  //       img: './img/img2.jpg'
  //     },
  //     { title: 'Tokka Guide',
  //       description: 'Tokka guide is an app to guide you around your city',
  //       publishedOn: 'January 14th 2016',
  //       category: 'IOS app',
  //       img: './img/img3.jpg'
  //     },
  //     { title: 'Tokka Guide',
  //       description: 'Tokka guide is an app to guide you around your city',
  //       publishedOn: 'January 14th 2016',
  //       category: 'IOS app',
  //       img: './img/img4.jpg'
  //     }]
  // };


  //
