'use strict';

angular
  .module('app')
  .controller('ProfileController', ProfileController);

function ProfileController( ProfileService) {

  var Profile = this;
  Profile.currentProfile = null;

  ProfileService.find('572cdf4596cd65c2e7dcf311', function (res) {
    Profile.currentProfile = res;
  });

}
