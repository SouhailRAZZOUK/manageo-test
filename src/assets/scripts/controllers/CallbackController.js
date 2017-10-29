(function () {
  ManageoTestApp.controller("CallbackController",  ["$state", function ($state) {
    $state.go('users')
  }])
})();