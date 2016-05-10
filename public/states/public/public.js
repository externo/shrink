'use strict';

angular
  .module('app')
  .controller('PublicController', PublicController);

function PublicController(ProfileService, CategoryService, ArticleService, NoteService) {

  var Public = this;
  var publicNotesLength

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

  ProfileService.find('572cdf4596cd65c2e7dcf311', function (res) {
    Public.currentProfile = res;
  });

  Public.generateNote = function () {
    var randomIndex = Math.floor((Math.random() * publicNotesLength));
    Public.randomNote = Public.notes[randomIndex].name;
  }

}