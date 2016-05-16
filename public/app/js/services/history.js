'use strict';

angular
  .module('app')
  .factory('HistoryService', HistoryService);

function HistoryService($http, baseUrl) {

  return {
    create: create,
    findAll: findAll
  };

  function create(msg, type) {
    var action = {
      name: msg,
      type: type,
      datetime: new Date()
    };
    $http.post(baseUrl + '/admin/history', action);
  }

  function findAll(callback) {
    $http.get(baseUrl + '/admin/history')
      .success(callback);
  }
}