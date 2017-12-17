myApp.controller('mainCon', ["api", "$routeParams",function (api, $routeParams) {

    //creating context
    var main = this;
    //var for getting data
    this.info = [];
    this.bookArray;
    this.characArray;
    this.houseArray;
    
    //this.bookId = $routeParams.a;
    //console.log(this.bookId);

    //calling
    this.url1 = function () {

        for (var x = 1; x <= 12; x++) {
            api.getBook(x)
                .then(function successCallback(response) {
                        main.bookArray = response.data;
                        main.info.push(main.bookArray);
                        //this.bookId= x;
                
                    },
                    function errorCallback(reason) {
                        alert("Some error occurred. Check the console.");
                    })
        }

    }
    this.url1(); //call for first url

    //call for character
    this.url2 = function () {

        for (var y = 1; y <= 100; y++) {
            api.getCharac(y)
                .then(function successCallback(response) {
                        main.characArray = response.data;
                        //console.log(main.characArray);
                        main.info.push(main.characArray);

                    },
                    function errorCallback(reason) {
                        alert("Some error occurred. Check the console.");
                    })
        }

    }
    this.url2();
    // call for character
    this.url3 = function () {

        for (var z = 1; z <= 50; z++) {
            api.getHouse(z)
                .then(function successCallback(response) {

                        main.houseArray = response.data;
                        //console.log(main.houseArray);
                        main.info.push(main.houseArray);

                    },
                    function errorCallback(reason) {
                        alert("Some error occurred. Check the console.");
                    })
        }

    }
    this.url3() // end of house

    // function for nav button
    this.homeButton = true;
    this.bookButton = true;
    this.characButton = true;
    this.houseButton = true;
    this.view = false;

    this.hide = function () {
        this.view = true;
        this.homeButton = false;
        this.bookButton = false;
        this.characButton = false;
        this.houseButton = false;
       
    }
    this.home = function () {
        this.homeButton = true;
        this.bookButton = true;
        this.characButton = true;
        this.houseButton = true;
        this.view = false;
    }
    this.book = function () {
        this.homeButton = false;
        this.bookButton = true;
        this.characButton = false;
        this.houseButton = false;
        this.view = false;

    }
    this.charac = function () {
        this.homeButton = false;
        this.bookButton = false;
        this.characButton = true;
        this.houseButton = false;
        this.view = false;

    }
    this.house = function () {
        this.homeButton = false;
        this.bookButton = false;
        this.characButton = false;
        this.houseButton = true;
        this.view = false;

    } //end of nav buttons

    //Fucntion for sorting

    this.sortColumn = "name";
    this.reverseSort = false;

    this.sortData = function (column) {
        main.reverseSort = (main.sortColumn == column) ? !main.reverseSort : false;
        main.sortColumn = column;
    }

    this.getSortClass = function (column) {

        if (main.sortColumn == column) {
            return main.reverseSort ?
                'arrow-down' :
                'arrow-up';
        }

        return '';
    } //end of sorting

    //Function for multi-filters
    this.search = function (item) {
        if (this.searchText == undefined) {
            return true;
        } else {
            if (item.authors.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
                item.aliases.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
                item.region.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1 ||
                item.name.toLowerCase().indexOf(this.searchText.toLowerCase()) != -1) {
                return true;
            }
        }

        return false;
    }; // end of filter
}])
