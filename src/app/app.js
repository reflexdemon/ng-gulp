angular.module('ng-gulp', [
    'ngRoute', 'ngResource',
    'ng-gulp.home',
    'ng-gulp.todo',
    'ng-gulp.customer',
    'ng-gulp.heat',
    'angulartics',
    'angulartics.google.analytics'
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
