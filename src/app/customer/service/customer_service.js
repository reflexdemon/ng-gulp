(function() {
    'use strict';
    angular
        .module('ng-gulp.customer').service('CustomerService', CustomerService);

    /* @ngInject */
    function CustomerService($http) {

        //REST service abstraction

        //RESTful webservice base URL
        var urlBase = '/services/customer';

        var service = {
            getCustomers: getCustomers,
            getCustomer: getCustomer,
            insertCustomer: insertCustomer,
            updateCustomer: updateCustomer,
            save: save,
            deleteCustomer: deleteCustomer
        };
        return service;

        ///////////////////

        //Fetch all customers
        function getCustomers() {
            return $http.get(urlBase);
        }

        //Fetch customer by ID
        function getCustomer(id) {
            return $http.get(urlBase + '/' + id);
        }

        //Insert new customer
        function insertCustomer(cust) {
            return $http.post(urlBase, cust);
        }

        //Update Customer
        function updateCustomer(cust) {
            return $http.put(urlBase + '/' + cust.id, cust);
        }

        //Abstracts save for insert vs update
        function save(cust) {
            var operation = cust.id ? updateCustomer : insertCustomer;
            return operation(cust);
        }

        //Delete customer record
        function deleteCustomer(id) {
            return $http.delete(urlBase + '/' + id);
        }
    }
})();
