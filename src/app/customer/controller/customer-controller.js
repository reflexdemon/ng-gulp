angular
    .module('ngGulp.customer')
    .controller('CustomerCtrl', function($scope, CustomerService) {
        'use strict';
        $scope.customers = CustomerService.list();
        //TODO 1: Edit Customer
        //TODO 2: Delete Customer
    });
