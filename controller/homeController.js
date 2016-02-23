(function (module){
  var homeController = {};
  homeController.index = function () {
    $.smoothScroll({
      scrollTarget: '#top'
    });
  };
  module.homeController = homeController;
})(window);
