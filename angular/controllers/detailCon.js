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
    this.seasons;
    this.alias;

    this.characDetail = function () {

        api.getCharac(main.characId)
            .then(function successCallback(response) {
                main.characDetails.push(response.data);
                console.log(main.characDetails);

                //for getting aliases
                this.aliasesString = [];
                for (var i in response.data.aliases) {
                    this.aliasesString.push(response.data.aliases[i]);
                }
                main.alias = this.aliasesString.toString();

                //for getting appeared in string
                this.seasonString = [];
                for (var j in response.data.tvSeries) {
                    this.seasonString.push(response.data.tvSeries[j]);
                }
                main.seasons = this.seasonString.toString();

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
    this.titles;

    this.houseDetail = function () {

        api.getHouse(main.houseId)
            .then(function successCallback(response) {
                main.houseDetails.push(response.data);
                console.log(main.houseDetails);

                //for getting titles
                this.titleString = [];
                for (var i in response.data.titles) {
                    this.titleString.push(response.data.titles[i]);
                }
                main.titles = this.titleString.toString();

            }, function errorCallback(reason) {
                alert("Error in GET");
            })
    }; //function ends

    this.houseDetail();

}]);
