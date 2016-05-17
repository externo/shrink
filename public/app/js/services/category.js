module.exports = function($http, baseUrl) {

  return {
    findAll: findAll,
    find: find,
    findArticles: findArticles
  };

  function findAll(callback) {
    $http.get(baseUrl + '/admin/category')
      .success(callback);
  }

  function find(id, callback) {
    $http.get(baseUrl + '/admin/category/' + id)
      .success(callback);
  }

  function findArticles(id, callback) {
    $http.get(baseUrl + '/admin/category/' + id + '/article')
      .success(callback);
  }

};