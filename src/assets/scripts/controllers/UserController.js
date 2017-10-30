(function () {
  ManageoTestApp.controller("UserController", ["$scope", "Users", function ($scope, Users) {

    $scope.update = function (username) {
      var userData = {};
      /*
      * TODO:
      * Create a binding between an HTML input controle and a property in the controller (newUserData) 
      * where you should gather the user new properties values
      */
      Users.update(username, userData)
    }

    $scope.delete = function (username) {
      Users.delete({ username: username });
    }

  }])
})();