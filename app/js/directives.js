
app.directive('issue', [function(){
    return{
        restrict: 'E',
        replace: true,
        templateUrl: 'app/templates/issues.html'
    }
}]);