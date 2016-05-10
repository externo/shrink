'use strict';

angular
  .module('app')
  .factory('NoteService', NoteService);

function NoteService($http, baseUrl) {

  return {
    create: create,
    remove: remove,
    findAll: findAll
  };

  function create(note, callback) {
    $http.post(baseUrl + '/admin/note', note)
      .success(callback);
  }

  function remove(id, callback) {
    $http.delete(baseUrl + '/admin/note/' + id)
      .success(callback);
  }

  function findAll(callback) {
    $http.get(baseUrl + '/admin/note')
      .success(callback);
  }
}