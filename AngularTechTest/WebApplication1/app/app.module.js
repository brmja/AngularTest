var myApp = angular.module('myApp', [
    'ui.router',
    'oc.lazyLoad',
    'ui.bootstrap',
    'angularUtils.directives.dirPagination'
]);


myApp.ServerUrl = 'http://localhost:4661/';
myApp.routeAPI = myApp.ServerUrl + 'api/';


myApp.service('growlService', function ($rootScope) {
    var gs = {};
    gs.growl = function (message, type) {
        $.growl({
            message: message
        }, {
            type: type,
            allow_dismiss: false,
            label: 'Cancel',
            className: 'btn-xs btn-inverse',
            placement: {
                from: 'top',
                align: 'center'
            },
            delay: 2500,
            animate: {
                enter: 'animated bounceIn',
                exit: 'animated bounceOut'
            },
            offset: {
                x: 20,
                y: 85
            }
        });
    }

    gs.notify = function notify(msg, type, icon) {
            
        $.growl({
            //title: ' Bootstrap Growl ',
            icon: icon,
            message: msg,
            url: ''
        }, {
            element: 'body',
            type: type,
            allow_dismiss: true,
            placement: {
                from: "top",
                align: "center"
            },
            offset: {
                x: 0,
                y: 85
            },
            spacing: 10,
            z_index: 1031,
            delay: 2500,
            timer: 2000,
            url_target: '_blank',
            mouse_over: false,

            icon_type: 'class',
            template: '<div data-growl="container" class="alert" role="alert" style="width:35%; padding-bottom: 30px">' +
                            '<button type="button" class="close" data-growl="dismiss">' +
                                '<span aria-hidden="true">&times;</span>' +
                                '<span class="sr-only">Close</span>' +
                            '</button>' +
                            '<span data-growl="icon" style="font-size:36px;margin-top: 0px"></span>&nbsp;&nbsp;' +
                            '<span data-growl="title"></span>' +
                            '<p data-growl="message" style="text-align: center; margin-top:-26px"></p>' +
                            '<a href="#" data-growl="url"></a>' +
                        '</div>'
        });
    }

    return gs;
})
