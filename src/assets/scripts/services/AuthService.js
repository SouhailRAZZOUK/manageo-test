(function () {

  'use strict';

  ManageoTestApp.service('AuthService', AuthService);

  AuthService.$inject = ['$state', 'angularAuth0', '$timeout'];

  function AuthService($state, angularAuth0, $timeout) {

    function login() {
      angularAuth0.authorize();
    }

    return {
      login: login
    }
  }
})();