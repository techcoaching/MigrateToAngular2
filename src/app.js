angular.module('angular1', []).config(
    ['$routeProvider', function (routeProvider) {
        routeProvider.when('/users', {
            templateUrl: 'src/users.html',
            controller: UsersCtrl
        });
        routeProvider.when('/addNewUser', {
             templateUrl: 'src/userDetail.html',
             controller: UserDetailCtrl
         });
         routeProvider.when('/users/:userId', {
             templateUrl: 'src/userDetail.html',
             controller: UserDetailCtrl
         });
    }]
);