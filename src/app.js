angular.module('angular1', ["ngRoute"]).config(
    ['$routeProvider', function (routeProvider) {
        routeProvider.when('/', {
            templateUrl: 'src/users.html',
            controller: UsersCtrl
        });
         routeProvider.when('/:userId', {
             templateUrl: 'src/userDetail.html',
             controller: UserDetailCtrl
         });
    }]
);