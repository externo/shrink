'use strict';

angular
  .module('app')
  .controller('ArticleController', ArticleController);

function ArticleController($routeParams, ArticleService) {

  var Article = this;
  
  ArticleService.find($routeParams.articleId, function (res) {
    Article.currentArticle = res;
  });

}
