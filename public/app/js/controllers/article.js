'use strict';

angular
  .module('app')
  .controller('ArticleController', ArticleController);

function ArticleController($routeParams, baseUrl, ArticleService) {

  var Article = this;

  Article.baseUrl = baseUrl;
  
  ArticleService.find($routeParams.articleId, function (res) {
    Article.currentArticle = res;
  });

}
