function HomeCtrl ($scope) {
	// body...
	$scope.message = "Hi scope";
	$scope.tax = 7;
	$scope.salary = 15000;
	$scope.car = {color:"red", brand:"toyota"};
}

function ProfileCtrl ($scope) {
	// body...

	$scope.salary = 15000;
        $scope.user = {name:"Praibool",age:21,food:"burger"};

}