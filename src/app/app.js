angular.module('ngGulp', [
    'ngRoute', 'ngResource',
    'ngGulp.todo',
    'ngGulp.customer'
])
    .config(['$routeProvider',
        function($routeProvider) {
            'use strict';
            $routeProvider
                .when('/todo', {
                    controller: 'TodoCtrl',
                    templateUrl: 'todo/view/todo.html'
                });

                //Customer
                $routeProvider.when('/customer', {
                    controller: 'CustomerCtrl',
                    templateUrl: 'customer/view/customer.html'
                });

                //Customer Edit
                $routeProvider.when('/customer/:customerId', {
                    controller: 'CustomerEditCtrl',
                    templateUrl: 'customer/view/customer-edit.html'
                });

                //Default route
                $routeProvider.otherwise({
                    redirectTo: '/customer'
                });
        }
    ]);
