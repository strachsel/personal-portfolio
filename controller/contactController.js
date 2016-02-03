(function (module){
  var contactController = {};
  contactController.index = function () {
    $.smoothScroll({
      scrollTarget: '#connect'
    });
  };
  module.contactController = contactController;
})(window);
