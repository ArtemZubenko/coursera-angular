(function () {

    "use strict";
    angular.module('public')
        .controller('SignInController', SignInController);

    SignInController.$inject = ['MenuService', 'MyInfoService']

    function SignInController(MenuService, MyInfoService) {
        var $ctrl = this;
        $ctrl.info = {};

        $ctrl.saveUser = function () {
            //Validate shorname
            $ctrl.isValid = true;
            $ctrl.isSaved = false;

            MenuService.getMenuItemByShorName($ctrl.info.favoriteDish).then(function () {
                $ctrl.isValid = true;

                // Save details
                MyInfoService.save($ctrl.info);
                $ctrl.isSaved = true;

            }).catch(function () {
                $ctrl.isValid = false;
                $ctrl.isSaved = false;
            });
        }
    }
})();