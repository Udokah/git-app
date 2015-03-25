/**
 * Created by udo on 3/24/15.
 */

var app = angular.module('gitApp', [
    'ngRoute'
]);


app.config(['$routeProvider', function($routeProvider){

    $routeProvider.
        when('/', {
            templateUrl: 'app/views/home.html',
            controller: 'AppController'
        });

}]);

app.constant('settings', {
    baseUrl: 'https://api.github.com'
});
