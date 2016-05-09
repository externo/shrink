'use strict';

angular
  .module('app')
  .factory('ArticleService', ArticleService);

function ArticleService($http, baseUrl) {

  return {
    findAll: findAll,
    find: find,
    create: create,
    update: update,
    remove: remove
  };

  function findAll(callback) {
    $http.get(baseUrl + '/admin/article')
      .success(callback);
  }

  function find(id, callback) {
    $http.get(baseUrl + '/admin/article/' + id)
      .success(callback);
  }

  function create(newArticle, callback) {
    $http.post(baseUrl + '/admin/article', newArticle)
      .success(callback);
  }

  function update(currentArticle, callback) {
    $http.put(baseUrl + '/admin/article/' + currentArticle._id, currentArticle)
      .success(callback);
  }

  function remove(id, callback) {
    $http.delete(baseUrl + '/admin/article/' + id)
      .success(callback);
  }

}