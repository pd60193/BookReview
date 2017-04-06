(function () {
    'use strict';

    angular
        .module('BookReview.Services')
        .service("BookService", ['$q', '$http', BookService]);

    function BookService($q, $http) {
        this.changeToLowerCase = function (value) {
            return value.toLowerCase();
        };
        this.getBookdata = function (bookName) {
            var obj = {
                method: "GET",
                url: "https://www.googleapis.com/books/v1/volumes?q=" + bookName,
                cache: false
            }
            return $http(obj);
        };

    };
})();
