myApp.controller("bookCon", ["$routeParams", "api", function ($routeParams, api) {

    //creating Context
    var main = this;
    
    this.bookId = $routeParams.a;
    
    this.writer;

    this.bookDetails = [];

    this.bookDetail = function () {
        api.getBook(main.bookId)
            .then(function successCallback(response) {
                main.bookDetails.push(response.data);
                console.log(main.bookDetails);
                //converting array to string
                this.authorString = [];
                for (var i in response.data.authors) {
                    this.authorString.push(response.data.authors[i]);
                }
                main.writer = this.authorString.toString();

            }, function errorCallback(reason) {
                alert("Error in GET");
            })
    }; //function ends

    this.bookDetail();

}]);

//controller for characters
myApp.controller("characCon", ["$routeParams", "api", function ($routeParams, api) {

    //creating Context
    var main = this;
    this.characId = $routeParams.b;

    this.characDetails = [];

    this.characDetail = function () {

        api.getCharac(main.characId)
            .then(function successCallback(response) {
                main.characDetails.push(response.data);
                console.log(main.characDetails);

            }, function errorCallback(reason) {
                alert("Error in GET");
            })
    }; //function ends

    this.characDetail();

}]);

//controller for houses
myApp.controller("houseCon", ["$routeParams", "api", function ($routeParams, api) {

    //creating Context
    var main = this;
    this.houseId = $routeParams.c;

    this.houseDetails = [];

    this.houseDetail = function () {

        api.getBook(main.houseId)
            .then(function successCallback(response) {
                main.houseDetails.push(response.data);
                console.log(main.houseDetails);

            }, function errorCallback(reason) {
                alert("Error in GET");
            })
    }; //function ends

    this.houseDetail();

}]);
