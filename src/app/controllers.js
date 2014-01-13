angular.module('SampleApp.controllers', []).
controller('NavBarController', ['$scope', function($scope) {
    $scope.name = "dummy";
}]).
controller('ToDoController', ['$scope', '$http', function($scope, $http) {

    $http.get('app/tasks.json').success(function(data) {
        $scope.tasks = data;
    });;

    $scope.addNewTask = function() {
        $scope.tasks.push({name: " ", done: false});
    }

    $scope.deleteTask = function(taskIndex) {
        $scope.tasks.splice(taskIndex, 1);
    }

    $scope.filteredTasks = function () {
        return $scope.tasks.map(function (task) {
            if (!task.done)
                return task;
        });
    }
}]).
controller('CurrencyConverterController', ['$scope', '$http', function($scope, $http) {

    var that = this;

    var exchangeData = {};

    $http.get("http://rate-exchange.appspot.com/currency?from=USD&to=EUR").
        success(function(data) {
            that.exchangeData = JSON.parse("'" + data + "'");
        }
    );

    $scope.getExchangeRate = function() {
        var exchangeRate = that.exchangeData.rate;

        // round to the 4th decimal
        return Math.round(
            exchangeRate*Math.pow(10,4)
        )/Math.pow(10,4);
    }
}]);
