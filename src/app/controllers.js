angular.module('SampleApp.controllers', []).
controller('NavBarController', ['$scope', function($scope) {
    $scope.name = "dummy";
}]).
controller('ToDoController', ['$scope', function($scope) {

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
controller('CurrencyConverterController', ['$scope', function($scope) {

}]);
