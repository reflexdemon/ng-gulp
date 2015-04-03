angular.module('ng-gulp.cart', []).config(['$routeProvider',
        function($routeProvider) {
            'use strict';
            $routeProvider
            .when('/cart', { //Default
                controller: 'CartCtrl',
                templateUrl: 'cart/cart.html'
            });
        }
    ]);

