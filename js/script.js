$(document).ready(function(){
  var content = document.getElementById('content');
  var html = '';
  var data = {
    title: 'Portfolio',
    portfolio: [
      { title: 'WedWeek',
        description: 'WedWeek is the website for couples who want to get married',
        publishedOn: 'January 12th 2016',
        category: 'Website',
        img: './img/img1.jpg'
      },
      { title: 'Tokka Guide',
        description: 'Tokka guide is an app to guide you around your city',
        publishedOn: 'January 14th 2016',
        category: 'IOS app',
        img: './img/img2.jpg'
      },
      { title: 'Tokka Guide',
        description: 'Tokka guide is an app to guide you around your city',
        publishedOn: 'January 14th 2016',
        category: 'IOS app',
        img: './img/img3.jpg'
      },
      { title: 'Tokka Guide',
        description: 'Tokka guide is an app to guide you around your city',
        publishedOn: 'January 14th 2016',
        category: 'IOS app',
        img: './img/img4.jpg'
      }]
  };

  var template = Handlebars.compile(document.getElementById('portfolio-template').innerHTML);
  content.innerHTML = template(data);
});

// scroll

// window.smoothScroll('#connect', 2000);



// $(document).ready(function(){
//   $('#content').hide();
//   $(window).scroll(function() {
//     $( '#content' ).css( 'display', 'inline' ).fadeOut( 'slow' );
//   });
// });

// // Function for the arrow to click to different areas
//
// $(document).ready(function(){
//   $('.arrow').on('click', function(e){
//     e.preventDefault();
//     if (window.location.hash === '') {
//       window.location.hash = '#content';
//     }
//     else if (window.location.hash === '#content'){
//       window.location.hash = '#about-me';
//     }
//     else if (window.location.hash === '#about-me'){
//       window.location.hash = '#connect';
//     }
//     else {
//       $(this).hide();
//     }
//   });
// });
