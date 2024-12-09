// Define the AngularJS module
let app = angular.module("todoApp", []);

// Define the controller
app.controller("myController", function ($scope) {
    // Initialize tasks array
    $scope.tasks = [];

    // Add Task
    $scope.addNewTask = function () {
        if ($scope.taskName) {
            let newTask = { name: $scope.taskName, editing: false }; // Add task name and editing state
            $scope.tasks.push(newTask); // Add to tasks array
            $scope.taskName = ""; // Clear input field
        }
    };

    // Delete Task
    $scope.deleteTask = function (index) {
        $scope.tasks.splice(index, 1);
    };

    // Edit Task
    $scope.editTask = function (task) {
        task.editing = !task.editing; // Toggle editing state
    };
});
