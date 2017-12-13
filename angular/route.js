myApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/books/:a", {
            templateUrl: "views/book-view.html",
            controller: "detailCon",
            controllerAs: "dc"
        })
        .when("/characters/:b", {
            templateUrl: "views/charac-view.html",
            controller: "detailCon",
            controllerAs: "dc"
        })
        .when("/houses/:c", {
            templateUrl: "views/house-view.html",
            controller: "detailCon",
            controllerAs: "dc"
        })
        .otherwise({
            redirectTo: '/'
        });
          }]);

myApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);