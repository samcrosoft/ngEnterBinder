oShout = ()->
	alert "this is another one"
	return

oAngTestApp = angular.module "AppNgenterTest", ["ngEnterBinder"]


###
 create a test controller
###

oAngTestApp.controller("TestCtrl", ["$scope", ($scope) ->

	$scope.shoutOut = () ->
		alert "Enter has been pressed"
		return

	return
])