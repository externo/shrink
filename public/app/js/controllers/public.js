'use strict';

angular
  .module('app')
  .controller('PublicController', PublicController);

function PublicController(baseUrl, ProfileService, CategoryService, ArticleService, NoteService) {

  var Public = this;
  var publicNotesLength;

  Public.baseUrl = baseUrl;

  ArticleService.findAll(function (res) {
    Public.articles = res;
  });

  CategoryService.findAll(function (res) {
    Public.categories = res;
  });

  NoteService.findAll(function (res) {
    Public.notes = res;
    publicNotesLength = Public.notes.length;
    Public.generateNote();
  });

  Public.generateNote = function () {
    var randomIndex = Math.floor((Math.random() * publicNotesLength));
    Public.randomNote = Public.notes[randomIndex].name;
  }

}