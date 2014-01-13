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

        $scope.usd = 1;
        $scope.eur = this.round($scope.usd * $scope.getExchangeRate(), 4);
    })

    $scope.getExchangeRate = function() {
        var exchangeRate = $scope.exchangeData.rate;

        // round to the 4th decimal
        return this.round(exchangeRate, 4);
    }

    $scope.calculate = function(currency) {
        if(currency == 'usd') {
            $scope.usd = this.round($scope.eur * parseFloat((1/$scope.getExchangeRate())), 4);
        } else if (currency == 'eur') {
            $scope.eur = this.round($scope.usd * $scope.getExchangeRate(), 4);
        }
    }

    this.round = function(number, point){
       return Math.round(
        number*Math.pow(10, point)
       )/Math.pow(10, point);
    }
}]);
