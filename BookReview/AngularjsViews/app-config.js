(function ()
{
    'use strict';
    angular
      .module('BookReview')
      .config(['$stateProvider', '$locationProvider', '$urlRouterProvider', '$provide', registerRoutes])
      .run(function ($rootScope)
      {
          $rootScope.displayLoader = false;
          $rootScope.loadingMsg = "Loading...";
      });

    function registerRoutes($stateProvider, $locationProvider, $urlRouterProvider, $provide)
    {
        $stateProvider.state('search', {
            url: "/search",
            controller: 'BookSearchController',
            controllerAs: 'booksearch',
            templateUrl: "AngularjsViews/partials/partials.booksearch.html"
        })
        .state('bookinfo', {
            url: "/bookinfo",
            controller: 'BookDisplayController',
            controllerAs: 'bookdisplay',
            templateUrl: "AngularjsViews/partials/partials.bookinfo.html"
        });

        $urlRouterProvider.otherwise("/search");
        $locationProvider.html5Mode(true);
    }
})();

