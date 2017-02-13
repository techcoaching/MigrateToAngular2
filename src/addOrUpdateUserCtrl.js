function AddOrUpdateUserCtrl($scope, $location, $routeParams, userService) {
    $scope.user = userService.getUser($routeParams.userId);
}
AddOrUpdateUserCtrl.$inject = ["$scope", "$location", "$routeParams", "userService"];