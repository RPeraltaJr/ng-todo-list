'use strict';
angular.module("todoListApp")
    .controller('mainCtrl', function($scope, dataService) {
    
    // Add Todo
    $scope.addTodo = function(){
        var todo = {name: "This is a new todo."};
        // Push the todo into the todos array. Instead of using push() we use unshift() to append the todo to top of the list
        $scope.todos.unshift(todo);
    };
    
    // Delete Todo
    $scope.deleteTodo = function(todo, $index){
        $scope.todos.splice($index, 1);
    };
    
    // Service to access JSON file data
    dataService.getTodos(function(response){
        console.log(response.data);
        $scope.todos = response.data;
    });
    
    $scope.saveTodos = function() {
        var filteredTodos = $scope.todos.filter(function(todo) {
            if(todo.edited) {
                return todo;
            };
        })
        dataService.saveTodos(filteredTodos);
    }
    
})