var ManageoTestApp = angular.module("ManageoTest", [
  "auth0.auth0",
  "ui.router",
  "ngResource",
  "UIServices"
]);

var uiServices = angular.module("UIServices", []);

ManageoTestApp.config(function (angularAuth0Provider, $stateProvider, $locationProvider, $urlRouterProvider) {

  $stateProvider
    .state("home", {
      url: "/",
      controller: "HomeController",
      templateUrl: "/views/home.html",
    })
    .state("callback", {
      url: "/callback",
      controller: "CallbackController",
      template: "<h1> Waiting ... </h1>",
    })
    .state("users", {
      url: "/users",
      component: "users",
      resolve: {
        users: function (Users) {
          return Users.getAll();
        }
      }
    })
    .state("users.user", {
      url: "/{username}",
      component: "user",
      resolve: {
        user: function(users, $stateParams) {
          return users.find(function (user) {
            return user.username === $stateParams.username;
          });
        }
      }
    });

  angularAuth0Provider.init({
    clientID: "orVb4b4Gl7CfD8LYwZuL7fVlAgO5Gd6v",
    domain: "souhail.auth0.com",
    responseType: "token id_token",
    audience: "https://souhail.auth0.com/userinfo",
    redirectUri: "http://localhost:3000/callback",
    scope: "openid"
  });

  $urlRouterProvider.otherwise("/");

  $locationProvider.hashPrefix("");

  $locationProvider.html5Mode(true);

});

ManageoTestApp.run(["AuthService", function (AuthService) {
  AuthService.handleAuthentication();
}]);