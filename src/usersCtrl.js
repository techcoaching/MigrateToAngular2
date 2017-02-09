function UsersCtrl($scope, $location) {
    $scope.users = [
        { id: 1, firstName: "Tu", lastName: "Tran" },
        { id: 2, firstName: "Tu 1", lastName: "Tran" }
    ];
    $scope.onEditUserClicked = onEditUserClicked;

    function onEditUserClicked(user) {
        $location.path("/users/" + user.id);
    }
}
UsersCtrl.$inject = ["$scope", "$location"];