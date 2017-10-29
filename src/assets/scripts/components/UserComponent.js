(function () {
  ManageoTestApp.component("users", {
    bindings: { user: "<" },
    template: "<p> {{$ctrl.user.name}} </p>"
  })
})();