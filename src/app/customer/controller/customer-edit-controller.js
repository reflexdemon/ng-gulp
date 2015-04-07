/**
 * Customer Edit Controller
 */
(function() {
    'use strict';
    //Defenition
    angular
        .module('ng-gulp.customer')
        .controller('CustomerEditCtrl', CustomerEditCtrl);

    // CustomerEditCtrl.$inject = ['$scope', '$location', '$routeParams', 'CustomerService', 'ngDialog'];

    /**
     * [CustomerEditCtrl description]
     * @ngInject
     */
    function CustomerEditCtrl($scope, $location, $routeParams, CustomerService, ngDialog) {
        /*jshint validthis: true */
        var vm = this;
        vm.back = back;
        vm.updateCustomer = updateCustomer;
        vm.deleteRecord = deleteRecord;
        vm.deleteCustomer = deleteCustomer;

        init();


        /**
         * Initilize Edit view
         */
        function init() {
            getCustomer($routeParams.customerId);
        }

        /**
         * Fetch customer by ID
         */
        function getCustomer(id) {
            if (id === 'new') {
                $scope.customer = {};
            } else {
                CustomerService.getCustomer(id).success(function(cust) {
                    $scope.customer = cust;
                }).error(function() {
                    $location.path('/customer');
                });
            }

        }

        /**
         * Navigate back to customer view
         */
        function back() {
            $location.path('/customer');
        }

        /**
         * Save changes to backend
         */
        function updateCustomer() {
            var cust = $scope.customer;

            CustomerService.save(cust)
                .success(function() {
                    $location.path('/customer');
                    $scope.status = 'Updated Customer! Refreshing customer list.';
                })
                .error(function(error) {
                    $scope.status = 'Unable to update customer: ' + error.message;
                });
        }

        /**
         * Delete selected record
         */
        function deleteRecord() {
            // var rowEntity = ctx.$parent.$parent.row.entity;
            var rowEntity = $scope.customer;
            var confirm = ngDialog.open({
                template: 'customer/view/confirm.html',
                className: 'ngdialog-theme-default',
                plain: false,
                scope: $scope
            });
            confirm.closePromise.then(function(data) {
                // console.log('data:', data);
                // console.log('rowEntity:', rowEntity);
                if (data.value === 'Yes') {
                    vm.deleteCustomer(rowEntity.id);
                }
            });
        }

        /**
         * Delete confirmed record
         */
        function deleteCustomer(id) {
            CustomerService.deleteCustomer(id)
                .success(function() {
                    $scope.status = 'Deleted Customer! Refreshing customer list.';
                    $location.path('/customer');
                })
                .error(function(error) {
                    $scope.status = 'Unable to delete customer: ' + error.message;
                });
        }
    }

})();
