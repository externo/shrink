'use strict';

angular
  .module('app')
  .controller('PublicController', PublicController);

function PublicController(baseUrl, ProfileService, CategoryService, ArticleService, NoteService) {

  var Public = this;
  var publicNotesLength;

  Public.baseUrl = baseUrl;

  ArticleService.findAll(function (response) {
    Public.articles = response;
  });

  CategoryService.findAll(function (response) {
    Public.categories = response;
  });

  NoteService.findAll(function (response) {
    Public.notes = response;
    publicNotesLength = Public.notes.length;
    Public.generateNote();
  });

  Public.generateNote = function () {
    var randomIndex = Math.floor((Math.random() * publicNotesLength));
    Public.randomNote = Public.notes[randomIndex].name;
  }

}