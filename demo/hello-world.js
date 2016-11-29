// Look for the already existing module (that's why we don't use [])
angular.module('todoListApp')
    .directive('helloWorld', function() {
    return {
        template: "This is the hello world directive!",
        restrict: "E" // To be used as an element only (Options 'A' or 'E')
    };
});