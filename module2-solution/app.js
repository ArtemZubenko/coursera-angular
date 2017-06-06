(function () {
    'use strict';

    angular.module('ShoppingApp', [])
        .controller('ToBuyController', toBuyController)
        .controller('AlreadyBoughtController', alreadyBoughtController)
        .service('ShoppingListCheckOffService', shoppingListCheckOffService);


    ToBuyController.$inject = ['ShoppingListCheckOffService']
    function toBuyController(ShoppingListCheckOffService) {
        var controller = this;
        controller.items = ShoppingListCheckOffService.getBuyItems();

        controller.addItem = function (itemIndex) {
            ShoppingListCheckOffService.addItem(itemIndex)
        }
    }

    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService']
    function alreadyBoughtController(ShoppingListCheckOffService) {
        var controller = this;
        controller.items = ShoppingListCheckOffService.getAlreadyBoughtItems();

    }

    function shoppingListCheckOffService() {
        var service = this;

        var buyItems = [];
        var alreadyBoughtItems = [];

        //Populate initial items
        buyItems.push({name: "Cookies", quantity: 10});
        buyItems.push({name: "Milk", quantity: 1});
        buyItems.push({name: "Coffee", quantity: 1});
        buyItems.push({name: "Sugar", quantity: 1});

        service.getBuyItems = function () {
            return buyItems;
        }

        // Remove item from buyItems array and add it to alreadyBoughtItems array
        service.addItem = function (itemIndex) {
            var item = buyItems.pop(itemIndex);
            alreadyBoughtItems.push(item);
        }

        service.getAlreadyBoughtItems = function () {
            return alreadyBoughtItems;
        }
    }
})();
