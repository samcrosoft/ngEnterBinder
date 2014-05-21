###
 This directive will make it possible to bind the enter key to an element
 @author Adebola Olowofela
 @url   http://blog.samcrosoft.com
 @email samcrosoft@gmail.com - 
###
((ng) ->
    # the event to be mapped to
    _ELEMENT_EVENT = "keyup"

    # create the module declaration
    oNgEnterBinder = angular.module('ngEnterBinder', ["ng"])

    # create the on -enter directive
    oNgEnterBinder.directive "onEnter", ['$parse', ($parse) ->
        oDirective = 
            restrict: "A"
            link: ($scope, element, attrs, oController) ->
                # parse the supplied function into a callback
                onEnterCallback = $parse(attrs.onEnter)

                element.bind "#{_ELEMENT_EVENT}", (event) ->
                    if event.which is 13
                        $scope.$apply ()->
                            # $scope.$eval onEnterCallback
                            onEnterCallback $scope, {$event: event}
                            return

                        event.preventDefault()
                    return
                return

        return oDirective

        return ]

    return
)(angular)