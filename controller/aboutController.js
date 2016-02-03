(function (module){
  var aboutController = {};
  aboutController.index = function () {
    $.smoothScroll({
      scrollTarget: '#about-me'
    });
  };
  module.aboutController = aboutController;
})(window);
