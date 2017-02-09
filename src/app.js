angular.module('angular1', ["ngRoute"]).config(
    ['$routeProvider', '$locationProvider', function (routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true)
        routeProvider.when('/', {
            templateUrl: 'src/users.html',
            controller: UsersCtrl
        });
        routeProvider.when('/users/:userId', {
            templateUrl: 'src/userDetail.html',
            controller: UserDetailCtrl
        });
    }]
);