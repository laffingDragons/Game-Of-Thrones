myApp.service("api", function($http){
    
    // intializing api url
    var bookUrl = "https://www.anapioficeandfire.com/api/books/";
    var characUrl = "https://www.anapioficeandfire.com/api/characters/";
    var houseUrl = "https://www.anapioficeandfire.com/api/houses/";
    
    this.getBook = function(totalBook){
        return $http.get(bookUrl+totalBook);
    }//end of get function
    
    this.getCharac = function(totalCharac){
        return $http.get(characUrl+totalCharac);
    }//end of get function
    
    this.getHouse = function(totalHouse){
        return $http.get(houseUrl+totalHouse);
    }//end of get function
})