'use strict';

angular
  .module('app', ['ngRoute', 'textAngular', 'ngSanitize'])
  .constant('baseUrl', 'http://didka-kataraga.rhcloud.com')
  //.constant('baseUrl', '')
  .config(function ($routeProvider) {
    $routeProvider.when('/', {
      templateUrl: 'states/public/profile/profile.html',
      controller: 'ProfileController as Profile'
    });
    $routeProvider.when('/article', {
      templateUrl: 'states/public/article/article.html',
      controller: 'ArticleController as Article'
    });
    $routeProvider.otherwise(
      {redirectTo: '/'}
    );
  });