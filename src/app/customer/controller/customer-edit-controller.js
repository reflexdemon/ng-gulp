angular
    .module('ngGulp.customer')
    .controller('CustomerEditCtrl', ['$scope', '$location', '$routeParams', 'CustomerService', 'ngDialog',
        function($scope, $location, $routeParams, CustomerService, ngDialog) {

            'use strict';
            init();

            //Initilize Edit view
            function init() {
                getCustomer($routeParams.customerId);
            }

            //Fetch customer by ID
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
            //Navigate back to customer view
            $scope.back = function() {
                $location.path('/customer');
            };

            //Save changes to backend
            $scope.updateCustomer = function() {
                var cust = $scope.customer;

                CustomerService.save(cust)
                    .success(function() {
                        $location.path('/customer');
                        $scope.status = 'Updated Customer! Refreshing customer list.';
                    })
                    .error(function(error) {
                        $scope.status = 'Unable to update customer: ' + error.message;
                    });
            };

            //Delete selected record
            $scope.delete = function() {
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
                        $scope.deleteCustomer(rowEntity.id);
                    }
                });
            };

            //Delete confirmed record
            $scope.deleteCustomer = function(id) {
                CustomerService.deleteCustomer(id)
                    .success(function() {
                        $scope.status = 'Deleted Customer! Refreshing customer list.';
                        $location.path('/customer');
                    })
                    .error(function(error) {
                        $scope.status = 'Unable to delete customer: ' + error.message;
                    });
            };
        }
    ]);
