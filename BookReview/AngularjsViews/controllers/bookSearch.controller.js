(function () {
    'use strict';

    angular
         .module("BookReview.Controllers")
          .controller('BookSearchController', ['$q', 'BookService', BookSearchController]);


    function BookSearchController($q, BookService) {

        var self = this;
        self.$q = $q;
        self.greetingMessage = "Hello World";
        self.BookService = BookService;

        self.changeCase = function () {
            self.greetingMessage = self.BookService.changeToLowerCase(self.greetingMessage);
        };
    }

})();