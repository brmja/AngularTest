angular.module('myApp').controller('EmpCtrl', ['$scope', '$http', 'growlService', '$timeout', function ($scope, $http, growlService, $timeout) {
    function loadlist() {

        $scope.currentPage = 1;
        $scope.pageSize = 10;
        $scope.TotalSalary = 0;

        $http.get(myApp.routeAPI + 'Employees').then(function (data) {
            $scope.records = data.data;
            $scope.totalData = data.data.length;

            angular.forEach($scope.records, function (row) {
                $scope.TotalSalary += row.Salary;
            });

        });


    }

    loadlist();

    $scope.rec = {};

    $scope.ClickRow = function (data) {
        $scope.rec = data;
        $('#EditModal').modal('toggle');
    }

    $scope.load = false;

    $scope.Save = function (rec) {
        $scope.load = true;

        $http.put(myApp.routeAPI + 'Employees', rec).then(function (data) {
            $scope.TotalSalary = 0;
            angular.forEach($scope.records, function (row) {
                $scope.TotalSalary += row.Salary;
            });
            growlService.notify("success", "success", "zmdi zmdi-badge-check");
            $scope.load = false;
            $('#EditModal').modal('toggle');
        });
    }

    $scope.GetTasks = function (rec) {

        $http.get(myApp.routeAPI + 'Employees/GetTasks?id=' + rec.Id).then(function (data) {
            $scope.tasks = data.data; 
        });

        $('#TasksModal').modal('toggle');
    }
}]);



