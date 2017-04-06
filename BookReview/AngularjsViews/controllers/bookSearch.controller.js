(function () {
    'use strict';

    angular
         .module("BookReview.Controllers")
          .controller('BookSearchController', ['$q', '$http','BookService', BookSearchController]);


    function BookSearchController($q, $http, BookService) {

        var self = this;
        self.$q = $q;
        self.greetingMessage = "Hello World";
        self.BookService = BookService;
        self.bookList = new Array();

        self.changeCase = function () {
            self.greetingMessage = self.BookService.changeToLowerCase(self.greetingMessage);
        };

        self.alertSearch = function () {
            alert(self.bookName);
        };

        self.getBookdata = function() {
            var output = self.BookService.getBookdata(self.bookName);
            output.then(function succes(response) {
                for (var i in response.data.items)
                {
                    var book = {
                        name: response.data.items[i].volumeInfo.title,
                        authors: response.data.items[i].volumeInfo.authors
                    };
                    self.bookList.push(book);
                }

            }, function myError(response) {
                self.bookData = "no such book";
            });
        };

     
    }

})();