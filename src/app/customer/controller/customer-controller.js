/**
 * [CustomerCtrl The Controller entry point]
 */
(function() {
    'use strict';

    angular
        .module('ng-gulp.customer')
        .controller('CustomerCtrl', CustomerCtrl);

    // CustomerCtrl.$inject = ['$scope', '$location', 'CustomerService'];

    /**
     * [CustomerCtrl The Controller entry point]
     * @ngInject
     */
    function CustomerCtrl($scope, $location, CustomerService) {
        $scope.editRecord = editRecord;

        init();


        /**
         * Initilize customer view
         */
        function init() {
            getCustomers();
            $scope.columns = [{
                field: 'id',
                width: '10%',
                maxWidth: 200
            }, {
                field: 'name'
            }, {
                field: 'age',
                width: '20%',
                maxWidth: 200
            }, {
                name: 'Action',
                cellTemplate: '<button class="btn btn-primary" ng-click="grid.appScope.editRecord(this)"><i class="fa fa-pencil"></i></button>',
                width: '20%',
                maxWidth: 200
            }];
            $scope.gridOpts = {
                enableSorting: true,
                enableColumnResizing: true,
                columnDefs: $scope.columns,
                onRegisterApi: function(gridApi) {
                    $scope.gridApi = gridApi;
                },
                rowIdentity: function(row) {
                    return row.id;
                },
                getRowIdentity: function(row) {
                    return row.id;
                }
            };
        }

        /**
         * Fetch customer data from backend
         */
        function getCustomers() {
            CustomerService.getCustomers()
                .success(function(custs) {
                    $scope.gridOpts.data = custs;
                })
                .error(function(error) {
                    $scope.status = 'Unable to load customer data: ' + error.message;
                });
        }

        /**
         * Edit the selected customer record
         * @param  {[type]} ctx [description]
         */
        function editRecord(ctx) {
            var rowEntity = ctx.$parent.$parent.row.entity;
            $location.path('/customer/' + rowEntity.id);
        }
    }
})();
