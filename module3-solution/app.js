(function () {
    'use strict';

    angular.module('NarrowItDownApp', [])
        .controller('NarrowItDownController', NarrowItDownController)
        .service('MenuSearchService', MenuSearchService)
        .directive('foundItems', FoundItems)
        .constant('ApiBasePath', "https://davids-restaurant.herokuapp.com/menu_items.json");

    function FoundItems() {
        var ddo = {
            restrict: "E",
            templateUrl: 'foundItems.html',
            scope: {
                items: '<foundItems',
                onRemove: '&',
                emptyMessage: '@emptyMessage'
            }
        }
        return ddo;
    }

    function FoundItemsController() {
        var list = this;
    }

    NarrowItDownController.$inject = ['MenuSearchService'];
    function NarrowItDownController(MenuSearchService) {
        var controller = this;
        controller.searchTerm = '';

        controller.search = function () {
            // Check if searchTerm is empty
            if (controller.searchTerm.trim() == '') {
                controller.found = []; // Return empty array. No need to call service
            } else {
                MenuSearchService.getMatchedMenuItems(controller.searchTerm.trim()).then(function (foundItems) {
                    controller.found = foundItems;
                });
            }
        }

        controller.removeItem = function (index) {
            controller.found.splice(index, 1);
        }
    }

    MenuSearchService.$inject = ['$http', 'ApiBasePath'];
    function MenuSearchService($http, ApiBasePath) {
        var service = this;

        service.getMatchedMenuItems = function (searchTerm) {
            return $http({
                method: "GET",
                url: (ApiBasePath)
            }).then(function (response) {
                var foundItems = [];

                response.data.menu_items.forEach(function (item) { // pick only items with description containing searchTerm
                    if (item.description.includes(searchTerm)) {
                        foundItems.push(item);
                    }
                });
                return foundItems;
            });
        };
    }
})();