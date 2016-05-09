'use strict';

angular
  .module('app')
  .controller('CategoryController', CategoryController);

function CategoryController(CategoryService, NotyService) {

  var Category = this;

  Category.categories = null;

  Category.addCategory = function () {
    CategoryService.create(Category.category, function(response){
      Category.categories = response;
      NotyService.success('Категория' + Category.category.name + ' е добавена');
    });
  };

  Category.removeCategory = function (id) {
    CategoryService.remove(id, function(response){
      Category.categories = response;
      NotyService.error('Категория' + Category.category.name + ' е премахната');
    });
  };

  CategoryService.findAll(function (response) {
    var categoriesLength = response.length;
    if(categoriesLength){
      categoriesLength > 1 ?
        NotyService.info('Заредени са ' + response.length + ' категории') : NotyService.info('Заредена е 1 категория');
    }else{
      NotyService.info('Няма добавени категории');
      NotyService.success('Добавете категория чрез бутона [Добави]');
    }
    Category.categories = response;
  });
}