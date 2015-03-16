angular
  .module('ng-gulp.heat').service('HeatService', ['$http',
      function($http) {
          'use strict';

          //RESTful webservice base URL
          var urlBase = '/services';

          /**
           * Convert from fahrenheit to celsius
           * @param  Number celsius
           * @return Heat model
           */
          this.toFahrenheit = function(celsius) {
              return $http.get(urlBase + '/c2f/' + celsius);
          };
          /**
           * Convert from celsius to fahrenheit
           * @param  Number fahrenheit
           * @return Heat model
           */
          this.toCelsius = function(fahrenheit) {
              return $http.get(urlBase + '/f2c/' + fahrenheit);
          };
        }
  ]);
