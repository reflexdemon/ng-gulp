(function() {
    'use strict';
    angular.module('ng-gulp.home').directive('navHeader', navHeader);

    /* @ngInject */
    function navHeader() {
        return {
            restrict: 'E',
            replace: true,
            transclude: true,
            scope: true,
            templateUrl: 'home/nav-header.html',
            controller: NavCtrl
        };
    }
    /* @ngInject */
    function NavCtrl($scope, $element, $location) {
        $scope.isActive = function(viewLocation) {
            var active = false;
            if (viewLocation.length) {
                if (viewLocation === $location.path()) {
                    active = true;
                }
            } else {
                for (var i = 0; i < viewLocation.length; i++) {
                    var l = viewLocation[i];
                    if (l === $location.path()) {
                        active = true;
                        break;
                    }
                }
            }
            return active;

        };
    }

})();
