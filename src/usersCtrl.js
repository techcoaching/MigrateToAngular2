function UsersCtrl($scope, $location, groupService) {
    console.log(groupService.getAllGroups());
    $scope.group = groupService.getAllGroups()[0];
    $scope.users = [
        { id: 1, firstName: "Tu", lastName: "Tran" },
        { id: 2, firstName: "Tu 1", lastName: "Tran" }
    ];
    $scope.selectedUser = {};
    

    $scope.onEditUserClicked = onEditUserClicked;
    $scope.onPreviewUserClicked = onPreviewUserClicked;

    function onPreviewUserClicked(user) {
        $scope.selectedUser = user;
    }
    function onEditUserClicked(user) {
        $location.path("/users/" + user.id);
    }
}
UsersCtrl.$inject = ["$scope", "$location", 'groupService'];