angular
    .module('ngGulp.customer')
    .controller('CustomerCtrl', ['$scope', '$location','CustomerService',
        function ($scope, $location, CustomerService) {
    'use strict';
    init();

    //Initilize customer view
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
            cellTemplate: '<button class="btn btn-primary" ng-click="grid.appScope.edit(this)"><i class="fa fa-pencil"></i></button>',
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

    //Edit selected record
    $scope.edit = function (ctx) {
      var rowEntity = ctx.$parent.$parent.row.entity;
      $location.path('/customer/' + rowEntity.id);
    };

    //Fetch customer data from backend
    function getCustomers() {
        CustomerService.getCustomers()
            .success(function (custs) {
                $scope.gridOpts.data = custs;
            })
            .error(function (error) {
                $scope.status = 'Unable to load customer data: ' + error.message;
            });
    }

}]);
