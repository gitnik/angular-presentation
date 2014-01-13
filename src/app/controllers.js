angular.module('SampleApp.controllers', []).
controller('NavBarController', ['$scope', function($scope) {
    $scope.name = "dummy";
}]).
controller('ToDoController', ['$scope', function($scope) {
    $scope.tasks = [
        { name: "Task1", done: false },
        { name: "Task2", done: false },
        { name: "Task3", done: false }
    ];

    $scope.addNewTask = function() {
        $scope.tasks.push({name: " ", done: false});
    }

    $scope.deleteTask = function(task) {
        task.done = true;
        console.log($scope.tasks);
    }

    $scope.filteredTasks = function () {
        return $scope.tasks.map(function (task) {
            console.log(task);
            if (!task.done)
                return task;
        });
    }
}]).
controller('CurrencyConverterController', ['$scope', function($scope) {

}]);
