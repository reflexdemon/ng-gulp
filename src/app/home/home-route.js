(function() {
    'use strict';

    angular
        .module('ng-gulp.home')
        .config(configure);


    /* @ngInject */
    function configure($routeProvider) {
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
        //Default route
        $routeProvider.otherwise({
            redirectTo: '/home'
        });
    }

})();
