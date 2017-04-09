(function () {
    'use strict';

    angular
         .module("BookReview.Controllers")
          .controller('BookSearchController', ['$q', '$http','BookService', BookSearchController]);


    function BookSearchController($q, $http, BookService) {

        var self = this;
        self.$q = $q;
        self.BookService = BookService;

        self.alertSearch = function () {
            alert(self.bookName);
        };

        self.getBookdata = function() {
            self.BookService.getBookdata(self.bookName).then(function succes(response) {
                self.bookList = response.data.items;
            }, function myError(response) {
                self.bookData = "no such book";
            });
        };

        self.setBookSelected = function (x) {
            self.BookService.setBookSelected(x);
        };

     
    }

})();