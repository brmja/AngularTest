myApp
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/home");


        $stateProvider
        .state('index', {
                url: '/index',
                templateUrl: 'index.html',
            })

            .state('home', {
                url: '/home',
                templateUrl: 'home.html',
                resolve: {
                    loadPlugin: function ($ocLazyLoad) {
                        return $ocLazyLoad.load([
                            {
                                name: 'vendors',
                                insertBefore: '#app-level-js',
                                files: [
                                   'app/js/EmpCtrl.js'
                                ]
                            }
                        ])
                    }
                }
            })

    });



myApp
.config(['$httpProvider', function ($httpProvider) {
    //enable cors from front angular.js
    $httpProvider.defaults.useXDomain = true;

    $httpProvider.interceptors.push(['$location', '$injector', '$q', function ($location, $injector, $q) {
        return {
            'request': function (config) {
                
                //add headers
                return config;
            },
            'responseError': function (rejection) {
                if (rejection.status === 401) {

                    $location.path('/index');
                    return $q.reject(rejection);
                }
            }
        };
    }]);
}]);