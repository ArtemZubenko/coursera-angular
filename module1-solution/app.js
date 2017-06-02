(function () {
    'use strict';

    angular.module('myFirstApp', [])
        .controller('myFirstAppController', myFirstAppController);


    myFirstAppController.$inject = ['$scope']
    function myFirstAppController($scope) {
        $scope.message = '';
        $scope.food = '';
        $scope.status = 'none';

        $scope.checkIfTooMuch = function () {

            //Check if no input
            if ($scope.food == '') {
                $scope.message = 'Please enter data first';
                $scope.status = 'error';
                return;
            }

            var foodArray = $scope.food.split(',')
                .filter(function (item) { //Bonus point - check for ,,
                    return item.trim() != '';
                });

            if (foodArray.length < 4) {
                $scope.message = 'Enjoy!';
            } else {
                $scope.message = 'Too much!';
            }

            //success if reached up to here
            $scope.status = 'success';
        }
    }
})();
