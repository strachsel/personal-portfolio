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
      }]
  };

var template = Handlebars.compile(document.getElementById('portfolio-template').innerHTML);
content.innerHTML = template(data);

});
