'use strict';

angular
  .module('app')
  .controller('PublicController', PublicController);

function PublicController(CategoryService, ArticleService) {

  var Public = this;

  ArticleService.findAll(function (response) {
    //var articlesLength = response.length;
    //if (articlesLength) {
    //  articlesLength > 1 ? NotyService.info('Заредени са ' + response.length + ' статии') : NotyService.info('Заредена е 1 статия');
    //} else {
    //  NotyService.info('Няма добавени статии');
    //  NotyService.success('Добавете статия чрез бутона [Добави]');
    //}
    Public.articles = response;
  });

  CategoryService.findAll(function (response) {
    Public.categories = response;
  });

}