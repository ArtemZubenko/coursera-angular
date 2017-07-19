(function () {

    "use strict";
    angular.module('public')
        .controller('MyInfoController', MyInfoController);

    MyInfoController.$inject = ['MenuService', 'MyInfoService', 'ApiPath']

    function MyInfoController(MenuService, MyInfoService, ApiPath) {
        var $ctrl = this;
        $ctrl.basePath = ApiPath;

        $ctrl.info = MyInfoService.getInfo();

        console.log($ctrl.info);

        if ($ctrl.info) {
            MenuService.getMenuItemByShorName($ctrl.info.favoriteDish).then(function (data) {
                $ctrl.dish = data;
            });
        }
    }
})();