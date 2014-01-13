angular.module('SampleApp', ['SampleApp.services', 'SampleApp.filters', 'SampleApp.controllers', 'ngRoute']).
config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/index', { templateUrl: 'partials/index.html', controller: 'NavBarController' });
    $routeProvider.when('/dummy-link-1', { templateUrl: 'partials/todo.html', controller: 'ToDoController' });
    $routeProvider.when('/dummy-link-2', { templateUrl: 'partials/currency.html', controller: 'CurrencyConverterController' });
    $routeProvider.otherwise({ redirectTo: '/index' });
}]);