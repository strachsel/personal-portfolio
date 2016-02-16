// (function(module){
//   var expandController = {};
//   expandController.index = function (){
//   $('#resume').on('click', function(e){
//     e.preventDefault();
//     $('.isExpanded').show('slow', function(){
//     console.log('woah')
//   });//end show
//   });//end click
// };//end expandController
//     module.expandController = expandController;
//     })(window);

// end combo
//
// $(document).on('click', "#viewProject a", function(e){
//   e.preventDefault();
//     $('#expanded ').show('slow', function(){
//      console.log('woah')
//     });
//   });
//
// $(document).on('click', "#close", function(e){
//     e.preventDefault();
//       $('.isExpanded').hide('slow', function(){
//        console.log('woah')
//       });
//     });

//

(function(module) {

    var addItemViewHandlers = {};

    addItemViewHandlers.init = function(){

      $('#portfolio').on('click', '.viewProject a', function(e){
          e.preventDefault();
          // get specific project .expanded item.
          // change from id of expanded to class.
          var portfolioId = $(this).data('portfolio-id');

          var raw_template = $('#portfolio-item-template').html();
          // Complile that into an handlebars template
          var template = Handlebars.compile(raw_template);

          var item = window.portfolioData.filter(function(portfolioItem) {
            return portfolioItem.id === portfolioId;
          })[0];

          var itemHtml = template(item);
          $('#portfolio-expanded').append(itemHtml);

          //$('.expanded').hide(); //Bryant removed
          $('.expanded').show('slow');
          $('body').addClass('scrollprevent');
        });

    // update to .close class.  target close class
      $('#portfolio').on('click', '.expanded', function(e){
          e.preventDefault();
        // get specific project .expanded item.
          $('.expanded').hide('slow', function() {
            $('#portfolio-expanded').html('');
          });

          $('body').removeClass('scrollprevent');
        });
    }; // end .initNewPortfolioPage

    module.addItemViewHandlers = addItemViewHandlers;
  })(window);
