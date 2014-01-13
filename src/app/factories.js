angular.module('SampleApp.factories', []).
factory('ToDoItems',['$http', '$q', function($http, $q) {

    var factory = {};

    factory.getAll = function() {

        var deffered = $q.defer();

        $http.get('app/tasks.json').success(function(data) {
            deffered.resolve(data);
        });

        return deffered.promise;
    }

    return factory;
}]).
factory('CurrencyExchangeData', ['$http', '$q', function($http, $q) {

    var factory = {};

    factory.getData = function() {

        var deffered = $q.defer();

        $http.get('app/exchangeData.json').success(function(data) {
            deffered.resolve(JSON.parse(data));
        });

        return deffered.promise;
    }

    return factory;
}]);