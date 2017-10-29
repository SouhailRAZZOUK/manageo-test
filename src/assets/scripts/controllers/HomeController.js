(function () {
  ManageoTestApp.controller("HomeController", ["View", "AuthService", function (View, AuthService) {
    AuthService.login();    
  }])
})();