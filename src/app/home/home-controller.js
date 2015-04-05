(function() {
    'use strict';
    angular
        .module('ng-gulp.home').controller('HomeCtrl', HomeCtrl);

    /* @ngInject */
    function HomeCtrl($scope) {
        $scope.greeting = 'Welcome!';
    }
})();
