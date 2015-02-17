angular.module('ngGulp.customer', ['ui.grid', 'ngDialog', 'ui.grid.resizeColumns']).config(['ngDialogProvider', function (ngDialogProvider) {
    'use strict';
    ngDialogProvider.setDefaults({
        className: 'panel panel-info',
        plain: true,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true
    });
}]);
