(function () {
    "use strict";

    angular.module('common')
        .service('MyInfoService', MyInfoService);

    function MyInfoService() {
        var service = this;

        service.save = function (info) {
            service.userInfo = info;
        };

        service.getInfo = function () {
            return service.userInfo;
        };
    }
})();