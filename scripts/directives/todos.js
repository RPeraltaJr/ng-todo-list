angular.module('todoListApp')
.directive('todos', function(){
    return {
        templateUrl: 'templates/todos.html',
        controller: 'mainCtrl',
        replace: true // todo tags will be gone and will work like php, include the template>todos.html in the body
    }
});