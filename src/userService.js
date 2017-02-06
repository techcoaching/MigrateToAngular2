// angular.module("angular1").factory("userService", [function () {
//     var user = [
//         { id: 1, firstName: "Tu", lastName: "Tran" },
//         { id: 2, firstName: "Tu 1", lastName: "Tran" }
//     ];

//     var service = {
//         getUser: getUser
//     };

//     return service;
//     function getUser(userId) {
//         return user.firstOrDefault(function (user) { return user.id.toString() == userId; });
//     }
// }]);