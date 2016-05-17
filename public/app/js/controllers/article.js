module.exports = function($routeParams, baseUrl, ArticleService) {

  var Article = this;

  Article.baseUrl = baseUrl;
  
  ArticleService.find($routeParams.articleId, function (res) {
    Article.currentArticle = res;
  });

};
