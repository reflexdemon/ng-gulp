(function() {
    'use strict';

    angular
        .module('ng-gulp.home')
        .config(configure);


    /* @ngInject */
    function configure($routeProvider) {
        $routeProvider
            .when('/todo', {
                controller: 'TodoCtrl',
                templateUrl: 'todo/view/todo.html'
            });
    }

})();
