'use strict';

angular
  .module('app', ['ngRoute', 'textAngular', 'auth0', 'angular-storage', 'angular-jwt'])
  //.constant('baseUrl', 'http://didka-kataraga.rhcloud.com')
  .constant('baseUrl', '')
  .config(function ($httpProvider, $routeProvider, $provide, authProvider, jwtInterceptorProvider) {

    //authProvider.init({
    //  domain: 'iliata.eu.auth0.com',
    //  clientID: 'wwcIqotTbjHGVVJ0Me1ZtrmB3NCRzII5'
    //});
    //jwtInterceptorProvider.tokenGetter = function (store) {
    //  return store.get('id_token');
    //};

    $routeProvider.when('/admin/profile', {
      templateUrl: '/states/admin/profile/profile.html',
      controller: 'ProfileController as Profile'
    });
    $routeProvider.when('/admin/article', {
      templateUrl: '/states/admin/article/article.html',
      controller: 'ArticleController as Article'
    });
    $routeProvider.when('/admin/category', {
      templateUrl: '/states/admin/category/category.html',
      controller: 'CategoryController as Category'
    });
    $routeProvider.when('/admin/note', {
      templateUrl: '/states/admin/note/note.html',
      controller: 'NoteController as Note'
    });
    $routeProvider.when('/admin/file', {
      templateUrl: '/states/admin/file/file.html',
      controller: 'FileController as File'
    });
    $routeProvider.when('/admin/calendar', {
      templateUrl: '/states/admin/calendar/calendar.html',
      controller: 'CalendarController as Calendar'
    });
    $routeProvider.when('/admin/history', {
      templateUrl: '/states/admin/history/history.html',
      controller: 'HistoryController as History'
    });
    $routeProvider.otherwise(
      {redirectTo: '/admin/article'}
    );

    //function redirect($q, $injector, auth, store, $location){
    //
    //  return {
    //
    //    responseError: function(rejection){
    //      if (rejection.status === 401){
    //        auth.signout();
    //        store.remove('profile');
    //        store.remove('id_token');
    //        //Admin.profile = undefined;
    //        $location.path('/admin/profile');
    //      }
    //
    //      return $q.reject(rejection);
    //    }
    //  }
    //}
    //$provide.factory('RedirectService', redirect);
    //$httpProvider.interceptors.push('RedirectService');
    //$httpProvider.interceptors.push('jwtInterceptor');
  });
  //.run(function($rootScope, auth, store, jwtHelper, $location){
  //  $rootScope.$on('$locationChangeStart', function(){
  //    var token = store.get('id_token');
  //    if (token){
  //      if(!jwtHelper.isTokenExpired(token)){
  //        if(!auth.isAuthenticated){
  //          auth.authenticate(store.get('profile'), token);
  //        }
  //      }
  //    }else{
  //      $location.path('/admin/profile');
  //    }
  //  })
  //});

function formatDate(date) {

  var reggie = /(\d{2}).(\d{2}).(\d{4}) \/ (\d{1,2}):(\d{2})/;
  var dateArray = reggie.exec(date);

  var dateObject = new Date(
    (dateArray[3]),
    (dateArray[2]) - 1, // Careful, month starts at 0!
    (dateArray[1]),
    (dateArray[4]),
    (dateArray[5])
  );

  return dateObject;
}

function inRange(datetime, dateRange) {

  var dateObj = formatDate(moment(datetime).format('DD.MM.YYYY / HH:mm'));

  var reggie = /(\d{2}).(\d{2}).(\d{4}) \/ (\d{1,2}):(\d{2}) - (\d{2}).(\d{2}).(\d{4}) \/ (\d{1,2}):(\d{2})/;
  var dateArray = reggie.exec(dateRange);

  var startDate = new Date(
    (dateArray[3]),
    (dateArray[2]) - 1, // Careful, month starts at 0!
    (dateArray[1]),
    (dateArray[4]),
    (dateArray[5])
  );
  var endDate = new Date(
    (dateArray[8]),
    (dateArray[7]) - 1, // Careful, month starts at 0!
    (dateArray[6]),
    (dateArray[9]),
    (dateArray[10])
  );

  return startDate < dateObj && dateObj < endDate;
}
