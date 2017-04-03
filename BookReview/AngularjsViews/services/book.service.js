(function () {
    'use strict';

    angular
        .module('BookReview.Services')
        .service("BookService", ['$q', '$http', BookService]);

    function BookService($q, $http)
    {
        this.changeToLowerCase = function (value) {
            return value.toLowerCase();
        };
    }
})();
