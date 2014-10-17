var praronApp = angular.module('praronApp', ['PraronModel', 'ngTouch']);


// Index: http://localhost/views/praron/index.html

praronApp.controller('IndexCtrl', function ($scope, PraronRestangular) {

  // Helper function for opening new webviews
  $scope.open = function(id) {
    webView = new steroids.views.WebView("/views/praron/show.html?id="+id);
    steroids.layers.push(webView);
  };

  // Fetch all objects from the local JSON (see app/models/praron.js)
  PraronRestangular.all('praron').getList().then( function(prarons) {
    $scope.prarons = prarons;
  });

  // Native navigation
  steroids.view.navigationBar.show("Praron index");
  steroids.view.setBackgroundColor("#FFFFFF");

});


// Show: http://localhost/views/praron/show.html?id=<id>

praronApp.controller('ShowCtrl', function ($scope, $filter, PraronRestangular) {

  // Fetch all objects from the local JSON (see app/models/praron.js)
  PraronRestangular.all('praron').getList().then( function(prarons) {
    // Then select the one based on the view's id query parameter
    $scope.praron = $filter('filter')(prarons, {id: steroids.view.params['id']})[0];
  });

  // Native navigation
  steroids.view.navigationBar.show("Praron: " + steroids.view.params.id );
  steroids.view.setBackgroundColor("#FFFFFF");

});
