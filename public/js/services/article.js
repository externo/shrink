'use strict';

angular
  .module('app')
  .factory('ArticleService', ArticleService);

function ArticleService($http, baseUrl) {

  return {
    findAll: findAll,
    find: find
  };

  function findAll(callback) {
    $http.get(baseUrl + '/admin/article')
      .success(callback);
  }

  function find(id, callback) {
    $http.get(baseUrl + '/admin/article/' + id)
      .success(callback);
  }

}