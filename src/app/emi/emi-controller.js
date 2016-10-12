(function () {
  'use strict';

  angular
    .module('ng-gulp.emi')
    .controller('EmiCtrl', EmiCtrl);
  //////////////////////

  /**
   * @ngdoc function
   * @name ngGulp.emi.controller:EmiCtrl
   * @description
   * # EmiCtrl
   * Controller of the ngGulp.emi
   * @ngInject
   */
  function EmiCtrl($scope, emiFactory) {
    $scope.emi = {
      principal: 3300000,
      rate: 11.35,
      months: 360,
      results: null,
      calculate: calculate,
      clear: clear,
      exportToExcel: exportToExcel
    };

    function calculate() {
      $scope.emi.results = emiFactory.prepareScheduledPayments(
        $scope.emi.principal,
        $scope.emi.rate,
        $scope.emi.months);
    }

    function clear() {
      delete $scope.emi.results;
    }

    function exportToExcel() {
      var blob = new Blob([document.getElementById('exportable').innerHTML], {
        type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=utf-8"
      });
      saveAs(blob, "Report.xls");
    };
  }

})();
