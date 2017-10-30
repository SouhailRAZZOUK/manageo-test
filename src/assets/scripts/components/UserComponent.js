(function () {
  ManageoTestApp.component("users", {
    bindings: { user: "<" },
    controller: "UserController",
    template: ["<h2>User</h2>",
    
              "<p>Name: {{$ctrl.person.username}}</p>",
              "<p>Email: {{$ctrl.person.email}}</p>",
              
              "<button ui-sref='users'>Close</button>"].join()
  })
})();