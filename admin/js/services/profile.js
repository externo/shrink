'use strict';

angular
  .module('app')
  .factory('ProfileService', ProfileService);

function ProfileService($http, baseUrl) {

  return {
    find: find,
    update: update
  };

  function find(id, callback) {
    $http.get(baseUrl + '/admin/user/' + id)
      .success(callback);
  }

  function update(currentUser, callback) {
    $http.put(baseUrl + '/admin/user/' + currentUser._id, currentUser)
      .success(callback);
  }

}