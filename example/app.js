var oAngTestApp, oShout;

oShout = function() {
  alert("this is another one");
};

oAngTestApp = angular.module("AppNgenterTest", ["ngEnterBinder"]);

/*
 create a test controller
*/


oAngTestApp.controller("TestCtrl", [
  "$scope", function($scope) {
    $scope.shoutOut = function() {
      alert("Enter has been pressed");
    };
  }
]);
