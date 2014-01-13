angular.module('SampleApp.controllers', []).
controller('NavBarController', ['$scope', function($scope) {
    $scope.name = "dummy";
}]).
controller('ToDoController', ['$scope', 'ToDoItems', function($scope, ToDoItems) {

    var ToDoItemsPromise = ToDoItems.getAll();
    ToDoItemsPromise.then(function(tasks) {
        $scope.tasks = tasks;
    })

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
controller('CurrencyConverterController', ['$scope', 'CurrencyExchangeData', function($scope, CurrencyExchangeData) {

    var ratePromise = CurrencyExchangeData.getData();
    ratePromise.then(function(data) {
        $scope.exchangeData = data;
    })

    $scope.getExchangeRate = function() {
        var exchangeRate = $scope.exchangeData.rate;

        // round to the 4th decimal
        return Math.round(
            exchangeRate*Math.pow(10,4)
        )/Math.pow(10,4);
    }
}]);
