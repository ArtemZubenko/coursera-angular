(function () {
    'use strict';

    angular.module('Data')
        .controller('ItemsController', ItemsController);

    ItemsController.$inject = ['$stateParams', 'MenuDataService'];
    function ItemsController($stateParams, MenuDataService) {
        var list = this;

        MenuDataService.getItemsForCategory($stateParams.category).then(function (items) {
            list.items = items.menu_items;
        });
    }
})();
