angular
  .module('ngGulp.customer').service('CustomerService', ['$http',
      function($http) {
          'use strict';

          //REST service abstraction

          //RESTful webservice base URL
          var urlBase = '/services/customer';

          //Fetch all customers
          this.getCustomers = function() {
              return $http.get(urlBase);
          };

          //Fetch customer by ID
          this.getCustomer = function(id) {
              return $http.get(urlBase + '/' + id);
          };

          //Insert new customer
          this.insertCustomer = function(cust) {
              return $http.post(urlBase, cust);
          };

          //Update Customer
          this.updateCustomer = function(cust) {
              return $http.put(urlBase + '/' + cust.id, cust);
          };

          //Abstracts save for insert vs update
          this.save = function(cust) {
            var operation = cust.id ? this.updateCustomer : this.insertCustomer;
            return operation(cust);
          };

          //Delete customer record
          this.deleteCustomer = function(id) {
              return $http.delete(urlBase + '/' + id);
          };
      }
  ]);
