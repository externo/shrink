'use strict';

angular
  .module('app')
  .factory('NotyService', NotyService);

function NotyService() {

  var time = 4000;
  var layout = 'topCenter';
  var theme = 'relax';
  var animation = {
    open: 'animated fadeInDown',
    close: 'animated fadeOutUpBig'
  };

  return {
    info: info,
    success: success,
    warning: warning,
    error: error
  };

  function info(msg) {
    noty({
      text: '<i class="fa fa-exclamation"></i> ' + msg,
      type: 'information',
      layout: layout,
      theme: theme,
      animation: animation
    }).setTimeout(time);
  }

  function success(msg) {
    noty({
      text: '<i class="fa fa-check"></i> ' + msg,
      type: 'success',
      layout: layout,
      theme: theme,
      animation: animation
    }).setTimeout(time);
  }

  function warning(msg) {
    noty({
      text: '<i class="fa fa-pencil"></i> ' + msg,
      type: 'warning',
      layout: layout,
      theme: theme,
      animation: animation
    }).setTimeout(time);
  }

  function error(msg) {
    noty({
      text: '<i class="fa fa-times"></i> ' + msg,
      type: 'error',
      layout: layout,
      theme: theme,
      animation: animation
    }).setTimeout(time);
  }

}