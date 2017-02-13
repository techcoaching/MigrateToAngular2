angular.module('angular1', []).config(
    ['$routeProvider', '$locationProvider', function (routeProvider, $locationProvider) {
        $locationProvider.html5Mode(true);
        routeProvider.when('/users', {
            templateUrl: 'src/users.html',
            controller: UsersCtrl
        });
        routeProvider.when('/users/:userId', {
            templateUrl: 'src/addOrUpdateUser.html',
            controller: AddOrUpdateUserCtrl
        });
        routeProvider.otherwise({ redirectTo: "/users" })
    }]
);