(function () {
  ManageoTestApp.service('Users', ['$resource', function ($resource) {

    var model = this;

    this.details = {};

    this.instance = function (username) {
      if (username) {
        return $resource('https://wt-souhail_razzouk-hotmail_com-0.run.webtask.io/ManageoTest_user_management/users/:username', { username: username }, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') } });
      }
      return $resource('https://wt-souhail_razzouk-hotmail_com-0.run.webtask.io/ManageoTest_user_management/users', {}, { headers: { 'Authorization': 'Bearer ' + localStorage.getItem('access_token') } });
    }

    this.get = function (username) {
      model.instance(username).get().$promise.then(function (data) {
        model.details = data;
      });
      return model;
    }

    this.getAll = function () {
      return model.instance().query().$promise;
    }

    this.add = function (username, userData) {
      var instance = model.instance();
      var user = angular.merge({}, userData, { username: username });
      return model.instance().save(user);
    }

    this.update = function (username, userData) {

    }

    this.remove = function (username) {

    }

  }]);

})();