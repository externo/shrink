'use strict';

angular
  .module('app')
  .controller('PublicController', PublicController);

function PublicController(CategoryService) {

  var Public = this;

  CategoryService.findAll(function (response) {
    Public.categories = response;
  });

}