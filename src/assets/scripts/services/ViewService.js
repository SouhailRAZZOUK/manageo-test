(function() {
  
    "use strict";
  
    uiServices.factory("View", [function() {
      var title = "Home";
      return {
        title: function() { return title; },
        setTitle: function(newTitle) { title = newTitle }
      };
    }]);
  
  }).call(this);