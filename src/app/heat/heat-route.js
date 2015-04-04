(function() {
    'use strict';

    angular
        .module('ng-gulp.customer')
        .config(configure);


    /* @ngInject */
    function configure($routeProvider) {
        //Heat module
        $routeProvider
            .when('/heat', {
                controller: 'HeatCtrl',
                templateUrl: 'heat/view/heat.html',
                controllerAs: 'vm'
            });
    }

})();
