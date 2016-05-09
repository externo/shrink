'use strict';

angular
  .module('app')
  .factory('CategoryService', CategoryService);

function CategoryService($http, baseUrl) {

  return {
    create: create,
    remove: remove,
    findAll: findAll
  };

  function create(category, callback) {
    $http.post(baseUrl + '/admin/category', category)
      .success(callback);
  }

  function remove(id, callback) {
    $http.delete(baseUrl + '/admin/category/' + id)
      .success(callback);
  }

  function findAll(callback) {
    $http.get(baseUrl + '/admin/category')
      .success(callback);
  }
}