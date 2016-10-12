(function() {
    'use strict';

    angular.module('ng-gulp', [
        'ngRoute', 'ngResource',
        'ng-gulp.home',
        'ng-gulp.todo',
        'ng-gulp.customer',
        'ng-gulp.heat',
        'ng-gulp.emi',
        'angulartics',
        'angulartics.google.analytics'
    ]);
})();
