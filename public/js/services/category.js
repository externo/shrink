'use strict';

angular
  .module('app')
  .factory('CategoryService', CategoryService);

function CategoryService($http, baseUrl) {

  return {
    findAll: findAll,
    find: find
  };

  function findAll(callback) {
    $http.get(baseUrl + '/admin/category')
      .success(callback);
  }

  function find(id, callback) {
    $http.get(baseUrl + '/admin/category/' + id)
      .success(callback);
  }
}