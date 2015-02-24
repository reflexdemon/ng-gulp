angular.module('ngGulp.todo', []).config(['$routeProvider',
    function($routeProvider) {
        'use strict';
        $routeProvider
            .when('/todo', {
                controller: 'TodoCtrl',
                templateUrl: 'todo/view/todo.html'
            });
    }
]);
