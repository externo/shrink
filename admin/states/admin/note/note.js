'use strict';

angular
  .module('app')
  .controller('NoteController', NoteController);

function NoteController(NoteService, NotyService) {

  var Note = this;

  Note.notes = null;

  Note.addNote = function () {
    NoteService.create(Note.note, function(response){
      Note.notes = response;
      NotyService.success('Бележка ' + Note.note.name + ' е добавена');
    });
  };

  Note.removeNote = function (id) {
    NoteService.remove(id, function(response){
      Note.notes = response;
      NotyService.error('Бележка ' + Note.note.name + ' е премахната');
    });
  };

  NoteService.findAll(function (response) {
    var noteLength = response.length;
    if(noteLength){
      noteLength > 1 ?
        NotyService.info('Заредени са ' + response.length + ' бележки') : NotyService.info('Заредена е 1 бележка');
    }else{
      NotyService.info('Няма добавени бележки');
      NotyService.success('Добавете бележка чрез бутона [Добави]');
    }
    Note.notes = response;
  });
}