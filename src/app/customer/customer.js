(function() {
    'use strict';

    angular.module('ng-gulp.customer', ['ui.grid', 'ngDialog', 'ui.grid.resizeColumns'], moduleConfiguration);

    /* @ngInject */
    function moduleConfiguration(ngDialogProvider) {
      ngDialogProvider.setDefaults({
        className: 'panel panel-info',
        plain: true,
        showClose: true,
        closeByDocument: true,
        closeByEscape: true
    });
    }
})();
