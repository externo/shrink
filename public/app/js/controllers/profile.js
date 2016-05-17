module.exports = function(baseUrl, ProfileService) {

  var Profile = this;

  Profile.baseUrl = baseUrl;

  ProfileService.find('572cdf4596cd65c2e7dcf311', function (res) {
    Profile.currentProfile = res;
  });

};
