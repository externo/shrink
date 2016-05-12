'use strict';

angular
  .module('app')
  .controller('CategoryController', CategoryController);

function CategoryController($routeParams, ArticleService, CategoryService) {

  var Category = this;

  Category.categoryId = $routeParams.categoryId;

  CategoryService.findAll(function (response) {
    Category.categories = response;
  });

  ArticleService.findAll(function (response) {
    Category.articles = response;
  });

}
