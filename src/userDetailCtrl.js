function UserDetailCtrl($scope, $location, $routeParams, userService) {
    $scope.user = userService.getUser($routeParams.userId);
}
UserDetailCtrl.$inject = ["$scope", "$location", "$routeParams", "userService"];