(function ()
{
    'use strict';

    angular.module("BookReview.Controllers", []);
    angular.module("BookReview.Services", []);
    angular.module("BookReview.Factories", []);

    var app = angular.module('BookReview', ['ui.router', 'BookReview.Controllers', 'BookReview.Services', 'BookReview.Factories']);
   
})();

