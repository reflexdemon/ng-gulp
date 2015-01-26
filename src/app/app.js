angular.module('ngGulp', [
    'ngRoute', 'ngResource',
    'ngGulp.todo',
    'ngGulp.customer'
])
    .config(function($routeProvider) {
        'use strict';
        $routeProvider
            .when('/todo', {
                controller: 'TodoCtrl',
                templateUrl: 'todo/view/todo.html'
            }).when('/customer', {
                controller: 'CustomerCtrl',
                templateUrl: 'customer/view/customer.html'
            })
            .otherwise({
                redirectTo: '/todo'
            });
    });
