var myApp = angular.module('myApp', [
    'ui.router',
    'oc.lazyLoad',
]);


myApp.ServerUrl = 'http://localhost:4661/';
myApp.routeAPI = myApp.ServerUrl + 'api/';
