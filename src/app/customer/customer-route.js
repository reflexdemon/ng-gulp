(function() {
    'use strict';

    angular
        .module('ng-gulp.customer')
        .config(configure);


    /* @ngInject */
    function configure($routeProvider) {
        //Customer
        $routeProvider.when('/customer', {
            controller: 'CustomerCtrl',
            templateUrl: 'customer/view/customer.html',
            controllerAs: 'vm'
        });

        //Customer Edit
        $routeProvider.when('/customer/:customerId', {
            controller: 'CustomerEditCtrl',
            templateUrl: 'customer/view/customer-edit.html',
            controllerAs: 'vm'
        });
    }

})();
