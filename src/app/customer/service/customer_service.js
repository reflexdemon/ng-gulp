angular
    .module('ngGulp.customer').service('CustomerService', function($resource) {
      'use strict';
      var console = console || {};
      // Default methods vs HTTP methods
      //     'get' --> 'GET'
      //     'save' --> 'POST'
      //     'query' --> 'GET' and returns an array
      //     'remove' --> 'DELETE'
      //     'delete' --> 'DELETE'

      //Initialize resource
      var Customer = $resource('/services/customer/:customerId', {
          customerId: '@id'
      }, {
          'update': {
              method: 'PUT'
          }
      });

      //simply returns the customers list
      this.list = function() {
          return Customer.query();
      };

      //Fetch one customer
      this.get = function(id) {
          return Customer.get({
              customerId: id
          });
      };

      //Update data
      this.edit = function(customer) {
          Customer.update(customer);
      };

      //Add data
      this.add = function(customer) {
          Customer.save(customer);
      };

      //Delete data
      this.delete = function(id) {
          Customer.delete({customerId : id});
      };

  });
