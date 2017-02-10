angular.module("angular1").directive('userPreview', function () {
    return {
        restrict: 'E',
        scope: {
            user: '<'
        },
        templateUrl: 'src/userPreview.html'
    };
});