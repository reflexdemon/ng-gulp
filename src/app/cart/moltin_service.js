angular
  .module('ng-gulp.cart').service('CartService', ['$http',
      function($http) {
          'use strict';
          var moltin = new Moltin({publicId: 'OLxDs9cNgzqc6R0sg1n75qqNTbih26K2J9zVjVyy'});
          moltin.Authenticate(function() {



          });


        }
  ]);
