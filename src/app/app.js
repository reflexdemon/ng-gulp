angular.module('ngGulp', [
    'ngRoute',
    'ngGulp.todo'
])
    .config(function($routeProvider) {
        'use strict';
        $routeProvider
            .when('/todo', {
                controller: 'TodoCtrl',
                templateUrl: 'todo/view/todo.html'
            })
            .otherwise({
                redirectTo: '/todo'
            });
    });
