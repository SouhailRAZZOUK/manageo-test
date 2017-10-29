(function () {
  ManageoTestApp.service('Users', ['$resource', function ($resource) {

    var model = this;

    this.details = {};

    this.instance = function (id) {
      if (id) {
        return $resource('http://localhost:3001/users/:id', { id: id }, {});
      }
      return $resource('http://localhost:3001/users', {}, {});
    }

    this.get = function (id) {
      model.instance(id).get().$promise.then(function (data) {
        model.details = data;
      });
      return model;
    }

    this.getAll = function () {
      return model.instance().query().$promise;
    }

    this.add = function (listId, taskData) {
      var instance = model.instance();
      var task = angular.merge({}, taskData, { taskslistId: listId })
      return model.instance().save(task)
    }

    this.update = function (taskId, taskData) {

    }

    this.remove = function (taskId) {

    }

  }]);

})();