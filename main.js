angular.module("app", []); 

var mainControllerFunc = function($scope) {
	var today = new Date();
	today.appts = []; 
	$scope.days = [today];
	$scope.userInput = false; 
	$scope.selectDay = today; 


	$scope.theDays = function(num) {
		var numOfDays = num; 
		for (var i = 0; i < num; i++) {
			var last = $scope.days[$scope.days.length - 1];
			var next = new Date(last);
			next.appts = [];
			next.setDate(next.getDate() + 1);
			$scope.days.push(next);
		}
	}
	$scope.theDays(6);


	$scope.addAppt= function(index) {
		console.log(index);
		$scope.userInput = true; 
		$scope.selectDay = $scope.days[index];
		console.log($scope.selectDay.appts)
		console.log($scope.days[index].appts)
	}

	$scope.submitAppt = function() { 
		$scope.selectDay.appts.push({
			name        : $scope.newName,
			description : $scope.newDescription,
			editing     : false
		});
		
		$scope.userInput = false;
        $scope.newName = '';
        $scope.newDescription = '';

	}

	$scope.edit = function(task) {
		task.editing = !task.editing
	}

	$scope.change = function(event) {
		event.preventDefault();
	}
}






angular.module("app").controller('mainController', ['$scope', mainControllerFunc]);