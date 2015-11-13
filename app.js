var app = angular.module('todoApp', []); // What's missing? Hint, it's more than one thing.

app.controller("TodosController", function($scope) { // What's missing?
	$scope.todos = {}; // Store todo items here. What is the data type?
  $scope.todos.data = [];
  $scope.todos.newTodo = {};
	
  $scope.addTodo = function(newTodo) { // Rewrite to make this function abailable in your view
		// Add code here
    $scope.todos.data.push(newTodo);
		$scope.todos.newTodo = {};
  };
  
  $scope.deleteAll = function(newTodo) { // Rewrite to make this function abailable in your view
	  $scope.todos.data = [];
  };
});