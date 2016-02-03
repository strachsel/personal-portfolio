(function (module){
  var portfolioController = {};
  portfolioController.index = function () {
    $.smoothScroll({
      scrollTarget: '#content'
    });
  };
  module.portfolioController = portfolioController;
})(window);
