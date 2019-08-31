// var app = angular.module("myApp", []);
// app.directive("elementDirec", function () {
//     return {
//         template: "<h1> Hai this is element directive</h1>"
//         // restrict:"E" -defult element
//     }
// });
// app.directive("attributeDirec", function () {
//     return {
//         template: "<h1> Hai this is attribute directive</h1>"
//         // restrict:"A" - default attribute
//     }
// });
// app.directive("classDirec", function () {
//     return {
//         template: "<h1> Hai this is class directive</h1>",
//         restrict: "C"
//     }
// });



var app = angular.module("myApp", []);
app.controller("homeCtrl", function ($scope) {
    $scope.name="home Control";

});