function UserDetailCtrl($scope, $location, $routeParams, userService) {
    //$scope.user = userService.getUser($routeParams.userId);
    $scope.user = {};
}
UserDetailCtrl.$inject = ["$scope", "$location", "$routeParams", "userService"];