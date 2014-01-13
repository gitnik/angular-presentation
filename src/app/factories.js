angular.module('SampleApp.services', []).
service('ToDoItems',['$http', '$q', function($http, $q) {

    var getAll = function() {

        var deffered = $q.defer();

        $http.get('app/tasks.json').success(function(data) {
            deffered.resolve(data);
        });

        return deffered.promise;
    }
}]).
service('CurrencyExchangeData', ['$http', '$q', function($http, $q) {

    var get = function() {

        var deffered = $q.defer();

        $http.get('http://rate-exchange.appspot.com/currency?from=USD&to=EUR').success(function(data) {
            deffered.resolve(JSON.parse("'" + data + "'"));
        });

        return deffered.promise;
    }
}]);