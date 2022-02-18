myApp.directive('saveDirective', function () {
    return {
        template: '<button type="button" ng-disabled="disabled" class="btn btn-primary"><span ng-show="load == true"><i class="glyphicon glyphicon-refresh spinning"></i></span>Save</button>',
        restrict: 'EA',
        scope: {
            disabled: '=',
            load: '='  // bound to controller scope
        },

    };
});