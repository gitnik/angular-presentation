angular.module('SampleApp.controllers', []).
controller('NavBarController', ['$scope', function($scope) {
    $scope.name = "dummy";
}]).
controller('ToDoController', ['$scope', function($scope) {
    $scope.tasks = ['Task1', "Task2", "Task3"];

    $scope.addNewTask = function() {
        $scope.tasks.push(" ");
        console.log($scope.tasks);
    }
}]).
controller('CurrencyConverterController', ['$scope', function($scope) {

}]);
