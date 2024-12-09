// Create the AngularJS module and controller
var app = angular.module('notesApp', []);

app.controller('notesController', function($scope) {
    // Initialize the notes array
    $scope.notes = [];

    // Function to add a new note
    $scope.addNote = function() {
        if ($scope.newNote) {
            // Add the note to the list
            $scope.notes.push($scope.newNote);
            // Clear the input field
            $scope.newNote = '';
        }
    };

    // Function to delete a note
    $scope.deleteNote = function(index) {
        // Remove the note at the given index
        $scope.notes.splice(index, 1);
    };
});
