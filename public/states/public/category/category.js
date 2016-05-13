'use strict';

angular
  .module('app')
  .controller('CategoryController', CategoryController);

function CategoryController($routeParams, baseUrl, CategoryService) {

  var Category = this;

  Category.baseUrl = baseUrl;

  Category.categoryId = $routeParams.categoryId;

  CategoryService.findAll(function (res) {
    Category.categories = res;
  });

  CategoryService.findArticles($routeParams.categoryId, function (res) {
    Category.articles = res;
  });

}
