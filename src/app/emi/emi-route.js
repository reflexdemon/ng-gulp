(function() {
    'use strict';

    angular
        .module('ng-gulp.emi')
        .config( emiRoute);


    /* @ngInject */
    function emiRoute($routeProvider) {
        $routeProvider
            .when('/emi', { //Default
                controller: 'EmiCtrl',
                templateUrl: 'emi/emi-view.html'
            });

    }

})();
