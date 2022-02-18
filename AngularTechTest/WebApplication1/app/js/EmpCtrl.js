angular.module('myApp').controller('EmpCtrl', ['$scope', '$http', function ($scope, $http) {
    function loadlist() {

        $scope.food = 'pizza';
        debugger;
        
        $http.get(myApp.routeAPI + 'Employees').then(function (data) {
            debugger;
            $scope.records = data.data;

        });

    }

    loadlist();

}]);
