(function () {

  'use strict';

  require('angular');
  require('angular-route');
  require('angular-sanitize');
  require('textAngular');

  // Load services
  var profileSrvc = require('./services/profile');
  var articleSrvc = require('./services/article');
  var categorySrvc = require('./services/category');
  var noteSrvc = require('./services/note');
  var historySrvc = require('./services/history');

  // Load controllers
  var publicCtrl = require('./controllers/public');
  var profileCtrl = require('./controllers/profile');
  var articleCtrl = require('./controllers/article');
  var categoryCtrl = require('./controllers/category');

  angular.module('app', [
    'ngRoute',
    'ngSanitize',
    'textAngular'
  ])
    .constant('baseUrl', 'http://didka-kataraga.rhcloud.com')
    //.constant('baseUrl', '')
    .config([
      '$locationProvider',
      '$routeProvider',
      '$provide',
      function ($locationProvider, $routeProvider, $provide) {
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
        $routeProvider.otherwise({redirectTo: '/profile'});

        // Help function for including ngSanitize
        $provide.decorator('taOptions', ['taRegisterTool', '$delegate', function (taRegisterTool, taOptions) {
          taOptions.forceTextAngularSanitize = false;
          return taOptions;
        }]);
      }
    ])
    .factory('ProfileService', ['$http', 'baseUrl', profileSrvc])
    .factory('ArticleService', ['$http', 'baseUrl', articleSrvc])
    .factory('CategoryService', ['$http', 'baseUrl', categorySrvc])
    .factory('NoteService', ['$http', 'baseUrl', noteSrvc])
    .factory('HistoryService', ['$http', 'baseUrl', historySrvc])
    .controller('PublicController', ['baseUrl', 'CategoryService', 'ArticleService', 'NoteService', publicCtrl])
    .controller('ProfileController', ['baseUrl', 'ProfileService', profileCtrl])
    .controller('ArticleController', ['$routeParams', 'baseUrl', 'ArticleService', articleCtrl])
    .controller('CategoryController', ['$routeParams', 'baseUrl', 'CategoryService', categoryCtrl]);

}());
