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
                self.bookList = response.data.items;
            }, function myError(response) {
                self.bookData = "no such book";
            });
        };

     
    }

})();