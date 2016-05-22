angapp.controller('mainCtrl', function($scope,$timeout){
	$scope.images = [{
    src: 'lion.jpg',
    title: 'Lion'
  }, {
    
    src: 'elephant.jpg',
    title: 'Elephant'
  }, {
    src: 'rhinoceroses.jpg',
    title: 'Rhinoceroses'
  }, {
    src: 'whales.jpg',
    title: 'Whale'
  }];


 $scope.currentIndex = 0; // Initially the index is at the first image
 $scope.current= function (index) {
            $scope.currentIndex = index;
        };
$scope.isCurrent = function (index) {
            return $scope.currentIndex === index;
        };
$scope.next = function() {
  $scope.currentIndex < $scope.images.length - 1 ? $scope.currentIndex++ : $scope.currentIndex = 0;
};

$scope.prev = function() {
  $scope.currentIndex > 0 ? $scope.currentIndex-- : $scope.currentIndex = $scope.images.length - 1;
};

$scope.$watch('currentIndex', function() {
  $scope.images.forEach(function(image) {
    image.visible = false; // make every image invisible
  });

  $scope.images[$scope.currentIndex].visible = true; // make the current image visible
});


var timer;
var sliderFunc = function() {
  timer = $timeout(function() {
    $scope.next();
    timer = $timeout(sliderFunc, 5000);
  }, 5000);
};

sliderFunc();

$scope.$on('$destroy', function() {
  $timeout.cancel(timer); // when the scope is getting destroyed, cancel the timer
});

});

angapp.controller('photoCtrl', ['$scope', 'photos', '$routeParams', function($scope, photos, $routeParams) {
  photos.success(function(data) {
    $scope.detail = data[$routeParams.id];
  });
}]);
angapp.controller('animCtrl', ['$scope', 'photos', function($scope, photos) {
  photos.success(function(data) {
    $scope.photos = data;
  });
}]);

angapp.controller('aboutCtrl', function($scope){
	$scope.message = 'Look! I am an about page';
	
});
angapp.controller('contactCtrl', function($scope){
	$scope.message = 'Contact us! JK. This is just a demo.!';
	
});

