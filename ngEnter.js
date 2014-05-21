/*
 This directive will make it possible to bind the enter key to an element
 @author Adebola Olowofela
 @url   http://blog.samcrosoft.com
 @email samcrosoft@gmail.com -
*/

(function(ng) {
  var oNgEnterBinder, _ELEMENT_EVENT;
  _ELEMENT_EVENT = "keyup";
  oNgEnterBinder = angular.module('ngEnterBinder', ["ng"]);
  oNgEnterBinder.directive("onEnter", [
    '$parse', function($parse) {
      var oDirective;
      oDirective = {
        restrict: "A",
        link: function($scope, element, attrs, oController) {
          var onEnterCallback;
          onEnterCallback = $parse(attrs.onEnter);
          element.bind("" + _ELEMENT_EVENT, function(event) {
            if (event.which === 13) {
              $scope.$apply(function() {
                onEnterCallback($scope, {
                  $event: event
                });
              });
              event.preventDefault();
            }
          });
        }
      };
      return oDirective;
    }
  ]);
})(angular);
