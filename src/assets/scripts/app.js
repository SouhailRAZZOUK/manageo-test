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
      controllerAs: "vm"
    })
    .state("callback", {
      url: "/callback",
      template: "<h1> Waiting ... </h1>",
    });

  angularAuth0Provider.init({
    clientID: "HEVBri7tR54UEV32biom_nZAmXlYeUK8",
    domain: "souhail.auth0.com",
    responseType: "token id_token",
    audience: "https://souhail.auth0.com/userinfo",
    redirectUri: "http://localhost:3000/callback",
    scope: "openid"
  });

  $urlRouterProvider.otherwise("/");

  $locationProvider.hashPrefix("");

  $locationProvider.html5Mode(true);

})