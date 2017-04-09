(function () {
    'use strict';

    angular
         .module("BookReview.Controllers")
          .controller('BookDisplayController', ['$q', '$http','BookService', BookDisplayController]);


    function BookDisplayController($q, $http, BookService) {
        var self = this;
        self.$q = $q;
        self.BookService = BookService;
        self.bookSelected = self.BookService.bookSelected;
    }
})();