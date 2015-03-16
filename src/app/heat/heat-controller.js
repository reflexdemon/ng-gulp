angular
  .module('ng-gulp.heat').controller('HeatCtrl', ['$scope', 'HeatService',
      function($scope, heatService) {
          'use strict';
          init();
          /**
           * Inits the ctrl.
           */
          function init() {
            $scope.defaultValue = {
              celsius : 0.0,
              fahrenheit : 0.0
            };
            $scope.testOptions = {
              min : -273,
              step : 1,
              max : 273,
              value : 0,
              tooltip : 'show'
            };
            $scope.heat = $scope.defaultValue;
          }
          $scope.f2c = function() {
                heatService.toCelsius($scope.heat.fahrenheit).success(function (heat) {
                  $scope.heat = heat;
                }).error(function (error) {
                  $scope.messsage = error;
                  $scope.heat = $scope.defaultValue;
                });
            };
          $scope.c2f = function() {
                heatService.toFahrenheit($scope.heat.celsius).success(function (heat) {
                  $scope.heat = heat;
                }).error(function (error) {
                  $scope.messsage = error;
                  $scope.heat = $scope.defaultValue;
                });
            };
      }
  ]);
