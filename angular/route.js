myApp.config(["$routeProvider", function ($routeProvider) {
    $routeProvider
        .when("/books/:a", {
            templateUrl: "views/book-view.html",
            controller: "bookCon",
            controllerAs: "bCon"
        })
        .when("/characters/:b", {
            templateUrl: "views/charac-view.html",
            controller: "characCon",
            controllerAs: "cCon"
        })
        .when("/houses/:c", {
            templateUrl: "views/house-view.html",
            controller: "houseCon",
            controllerAs: "hCon"
        })
        .otherwise({
            redirectTo: '/'
        });
          }]);

myApp.config(['$locationProvider', function($locationProvider) {
  $locationProvider.hashPrefix('');
}]);