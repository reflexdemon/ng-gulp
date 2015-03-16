angular.module('ng-gulp.heat', ['ui.bootstrap-slider']).config(['$routeProvider',
    function($routeProvider) {
        'use strict';
        $routeProvider
            .when('/heat', {
                controller: 'HeatCtrl',
                templateUrl: 'heat/view/heat.html'
            });
    }
]);
