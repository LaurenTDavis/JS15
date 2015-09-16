angular.module("app", []); 

var mainControllerFunc = function($scope) {
	var today = Date();
	$scope.appts = []; 
	$scope.days = [today];
	$scope.userInput = false; 
	$scope.selectDay = today; 


	$scope.theDays = function(num) {
		var numOfDays = num; 
		for (var i = 0; i < num; i++) {


		}
	}



	$scope.addAppt= function(index) {
		console.log(index);
		$scope.userInput = true; 
		$scope.selectDay = $scope.days[index];
		console.log($scope.selectDay.appts)
		console.log($scope.days[index].appts)
	}

	$scope.submitAppt = function() { 
	}
	$scope.edit = function() {

	}
}















angular.module("app").controller('mainController', ['$scope', mainControllerFunc]);