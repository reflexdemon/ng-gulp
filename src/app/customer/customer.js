angular.module('ngGulp.customer', ['ui.grid', 'ngDialog', 'ui.grid.resizeColumns']).config(['ngDialogProvider', '$routeProvider', function (ngDialogProvider, $routeProvider) {
    'use strict';
    ngDialogProvider.setDefaults({
        className: 'panel panel-info',
        plain: true,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true
    });
    //Customer
    $routeProvider.when('/customer', {
        controller: 'CustomerCtrl',
        templateUrl: 'customer/view/customer.html'
    });

    //Customer Edit
    $routeProvider.when('/customer/:customerId', {
        controller: 'CustomerEditCtrl',
        templateUrl: 'customer/view/customer-edit.html'
    });

}]);
