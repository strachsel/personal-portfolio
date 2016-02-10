(function (module){
  var homeController = {};
  homeController.index = function () {
    $.smoothScroll({
      scrollTarget: '#top'
    });
    repos.requestRepos(repoView.index);
  };
  module.homeController = homeController;
})(window);
