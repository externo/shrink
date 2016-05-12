'use strict';

angular
  .module('app', ['ngRoute', 'textAngular', 'ngSanitize'])
  .constant('baseUrl', 'http://didka-kataraga.rhcloud.com')
  //.constant('baseUrl', '')
  .config(function ($routeProvider) {
    $routeProvider.when('/profile', {
      templateUrl: 'states/public/profile/profile.html',
      controller: 'ProfileController as Profile'
    });
    $routeProvider.when('/category/:categoryId/article', {
      templateUrl: 'states/public/category/category.html',
      controller: 'CategoryController as Category'
    });
    $routeProvider.when('/article/:articleId', {
      templateUrl: 'states/public/article/article.html',
      controller: 'ArticleController as Article'
    });
    //$routeProvider.otherwise(
    //  {redirectTo: '/profile'}
    //);
  });