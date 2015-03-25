
app.controller('AppController', ['$scope','gitService', function($scope,gitService){

    $scope.issues = {} ;
    $scope.showLoading = false ;

    $scope.searchSubmit = function(data){
        $scope.showLoading = true ;

        var promise = gitService.getIssues(data.url);
        promise.success(function(data,status,headers,config){
            $scope.showLoading = false ;
            $scope.issues.data = data ;
            if(data.length == 1){
                $scope.issues.msg = data.length + ' issue found' ;
            }else if(data.length > 1){
                $scope.issues.msg = data.length + ' issues found' ;
            }else{
                $scope.issues.msg = 'no issues found' ;
            }
        });

    };

}]);