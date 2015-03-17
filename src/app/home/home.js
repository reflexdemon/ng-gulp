angular.module('ng-gulp.home', []).config(['$routeProvider',
        function($routeProvider) {
            'use strict';
            $routeProvider
            .when('/home', { //Default
                controller: 'HomeCtrl',
                templateUrl: 'home/home.html'
            }).when('/module', {
                controller: 'HomeCtrl',
                templateUrl: 'home/module.html'
            }).when('/stack', {
                controller: 'HomeCtrl',
                templateUrl: 'home/stack.html'
            });
        }
    ]);

