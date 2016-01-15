
function PortfolioItem(opts) {
  this.title = opts.title;
  this.description = opts.description;
  this.publishedOn = opts.publishedOn;
  this.category = opts.category;
  this.img = opts.img;
}

PortfolioItem.prototype.toHTML = function() {
  var $temp = $('#template #portfolioItems').clone();
  $temp.find('#title').html(this.title);
  $temp.find('img').attr('src', this.img);

  $('#portfolioItemsContainer').append($temp);
};

obj.forEach(function(item) {
  var n = new PortfolioItem(item);
  n.toHTML();
});
