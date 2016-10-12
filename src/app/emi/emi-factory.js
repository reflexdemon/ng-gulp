(function() {
    'use strict';

    angular
        .module('ng-gulp.emi')
        .factory('emiFactory',  emiFactory);


    /* @ngInject */
    function emiFactory() {
        var factory = {
            calculateMonthlyPayment: calculateMonthlyPayment,
            round: round,
            prepareScheduledPayments: prepareScheduledPayments
        };
        return factory;

        ////////////

        function round(number, precision) {
            precision = precision || 2;
            var factor = Math.pow(10, precision);
            var tempNumber = number * factor;
            var roundedTempNumber = Math.round(tempNumber);
            return roundedTempNumber / factor;
        }


        function calculateMonthlyPayment(p, r, n) {
            var rate = (r / 12) / 100;
            var e = (p * rate * (Math.pow((1 + rate), n)) / ((Math.pow((1 + rate), n)) - 1));
            return e;
        }

        function prepareScheduledPayments(p, r, n) {
            var rate = (r / 12) / 100;
            var principal = p;
            var e = calculateMonthlyPayment(principal, r, n);
            var totalInt = ((e * n) - p);
            var totalAmt = ((e * n));

            var paymentSchedule = [];

            var intPerMonth = (totalInt / n);
            var month = 0;
            do {
                paymentSchedule.push({
                  month: ++month,
                  intPerMonth: round(principal * rate),
                  currentOutstanding: round(principal),
                  principal: round((e) - intPerMonth)
                });
                principal = ((principal) - ((e) - (intPerMonth)));
                if (intPerMonth > principal) {
                  intPerMonth = principal;
                }
            } while (principal > 0);


            return {
                loanAmount: round(p),
                rateOfInterest: (round(r) + '%'),
                numberOfMonths: n,
                monthlyPayments: round(e),
                totalInterest: totalInt,
                totalAmount: totalAmt,
                paymentSchedule: paymentSchedule
            };
        }
    }

})();
