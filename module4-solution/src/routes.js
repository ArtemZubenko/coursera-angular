(function () {
    'use strict';

    angular.module('MenuApp').config(RoutesConfig);

    RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
    function RoutesConfig($stateProvider, $urlRouterProvider) {
        // Redirect to home page if no other URL matches
        $urlRouterProvider.otherwise('/');

        // *** Set up UI states ***
        $stateProvider.state('home', {url: '/', templateUrl: 'src/templates/home.template.html'})
            .state('categories', {
                url: '/categories',
                controller: 'CategoriesController as list',
                templateUrl: 'src/templates/categories.template.html',
                resolve: {
                    items: ['MenuDataService', function (MenuDataService) {
                        return MenuDataService.getAllCategories();
                    }]
                }
            })
            .state('items', {
                url: '/items/{category}',
                controller: 'ItemsController as list',
                templateUrl: 'src/templates/items.template.html'
            });


    }
})();