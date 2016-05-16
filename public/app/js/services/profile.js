'use strict';

angular
  .module('app')
  .factory('ProfileService', ProfileService);

function ProfileService($http, baseUrl) {

  return {
    find: find
  };

  function find(id, callback) {
    $http.get(baseUrl + '/admin/user/' + id)
      .success(callback);
  }

}