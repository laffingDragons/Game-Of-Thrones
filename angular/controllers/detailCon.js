myApp.controller("detailCon", ["$routeParams", "api", function ($routeParams, api) {

    //creating Context
    var main = this;
    this.bookId = $routeParams.a;
    this.characId = $routeParams.b;
    this.houseId = $routeParams.c;

    this.bookDetails1;
    this.characDetails1;
    this.houseDetails1;
    
    this.authors;
    this.bookDetails = [];
    this.characDetails = [];
    this.houseDetails = [];
    //this.seasons;
    //console.log(this.bookId);

    this.bookDetail = function () {

        api.getBook(main.bookId)
            .then(function successCallback(response) {
                main.bookDetails.push (response.data);
                console.log(main.bookDetails);
            
            }, function errorCallback(reason) {
                alert("Error in GET");
            })
    }; //function ends

    this.bookDetail();

    /*this.characDetails = function () {

        api.getCharac(main.characId)
            .then(function successCallback(response) {

                main.characDetails.push(response.data);

            }, function errorCallback(reason) {
                alert("Error in GET");
            })
    }; //function ends

    this.characDetails();

    this.houseDetails = function () {

        api.getHouse(main.characId)
            .then(function successCallback(response) {

                main.houseDetails.push(response.data);
            }, function errorCallback(reason) {
                alert("Error in GET");
            })
    }; //function ends

    this.houseDetails();*/
}]);
