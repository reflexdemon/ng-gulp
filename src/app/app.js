angular.module('ngGulp', [
    'ngRoute', 'ngResource',
    'ngGulp.home',
    'ngGulp.todo',
    'ngGulp.customer'
])
    .config(['$routeProvider',
        function($routeProvider) {
            'use strict';
            //Default route
            $routeProvider.otherwise({
                redirectTo: '/home'
            });
        }
    ]);
