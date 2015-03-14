angular.module('ng-gulp', [
    'ngRoute', 'ngResource',
    'ng-gulp.home',
    'ng-gulp.todo',
    'ng-gulp.customer'
])
    .config(['$routeProvider',
        function($routeProvider) {
            'use strict';
            $routeProvider
            .when('/home', {
                controller: 'HomeCtrl',
                templateUrl: 'home/home.html'
            });
            //Default route
            $routeProvider.otherwise({
                redirectTo: '/home'
            });
        }
    ]);
