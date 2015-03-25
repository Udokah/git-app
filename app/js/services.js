
app.factory('gitService', ['$http','settings', function($http,settings){
    var factory = {};
    var promise ;

    var parseUrl = function(url){
        var sides = url.split('/');
        return{
            owner: sides[3],
            repo: sides[4]
        }
    };

    factory.getIssues = function(url){
        var bits = parseUrl(url);
        promise = $http({
            method: 'GET',
            url: settings.baseUrl + '/repos/' + bits.owner + '/' + bits.repo + '/issues',
            cache: false
        });
        return promise;
    };

    return factory;
}]);