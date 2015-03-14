angular
  .module('ng-gulp.home').controller('HomeCtrl', ['$scope',
      function($scope) {
          'use strict';
          $scope.greeting = 'Welcome!';
      }
  ]);
