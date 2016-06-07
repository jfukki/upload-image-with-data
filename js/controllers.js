angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal, $timeout) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  $scope.loginData = {};

  // Create the login modal that we will use later
  $ionicModal.fromTemplateUrl('templates/login.html', {
    scope: $scope
  }).then(function(modal) {
    $scope.modal = modal;
  });

  // Triggered in the login modal to close it
  $scope.closeLogin = function() {
    $scope.modal.hide();
  };

  // Open the login modal
  $scope.login = function() {
    $scope.modal.show();
  };

  // Perform the login action when the user submits the login form
  $scope.doLogin = function() {
    console.log('Doing login', $scope.loginData);

    // Simulate a login delay. Remove this and replace with your login
    // code if using a login system
    $timeout(function() {
      $scope.closeLogin();
    }, 1000);
  };
})


///Fetching categories from database
.controller('category',function($scope,$http,$log){
    
     $http.get("http://askariad.com/mobileapp/cat.php").success(function(data){
                $scope.data=data;
            });
    
    
})
////
///////Fetching location from database
//.controller('location',function($scope,$http,$log){
//    
//     $http.get("http://askariad.com/mobileapp/location.php").success(function(data){
//                $scope.data=data;
//            });
//    
//})






///submit ad to database

//$cordovaCamera
.controller('submit', function($scope, $state, $http,$cordovaCamera){
    
//    
//    //Detail
//    
//    
//    $http.post('http://askariad.com/mobileapp/detail.php ', {id: $stateParams.id},{headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
////$http.post(SERVER.url+'/detail', {id: $stateParams.id})
//.success(function(response){
//$scope.topic = response[0];
//});
    
    //Cities
     $http.get("http://askariad.com/mobileapp/cities.php").success(function(data){
                $scope.data=data;
            });
    
    //location
        $http.get("http://askariad.com/mobileapp/location.php").success(function(data_location){
                $scope.data_location=data_location;
            });
    //categories
     $http.get("http://askariad.com/mobileapp/cat.php").success(function(data_cat){
                $scope.data_cat=data_cat;
            });
    
    
    
    
$scope.post = function(topic)
{
        topic['picture'] = $scope.imgURI;
        $http.post('http://askariad.com/mobileapp/submit.php ', {params: topic},{headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
        .success(function(response){
        if(response ){ //=='success'
        //$state.go('app.home');
        alert('Successfully');
        }else{
        //$state.go('app.home');
        alert('SomeThing Went Wrong');    
        }
        });
        }
        $scope.takePicture = function(source)
        {
        var options = { 
        quality : 85, 
        destinationType : Camera.DestinationType.DATA_URL, 
        sourceType : source,
        allowEdit : true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 180,
        targetHeight: 180,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
        };
        $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.imgURI = "data:image/jpeg;base64," + imageData;
        }, function(err) {
        // An error occured. Show a message to the user
        });
        }
})//end





.controller('show',function($scope, $state, $http,$cordovaCamera,$stateParams){
     $http.get("http://askariad.com/mobileapp/show.php").success(function(data){
                $scope.data=data;
            });
    
    
})

///




.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})


.controller('PlaylistCtrl', function($scope, $stateParams,$state,show) {

    show.find($stateParams.id,function(data){
        $scope.data = data;
    })
    
})




.controller('list', function($scope, $http, $stateParams){
$http.post("http://askariad.com/mobileapp/cat_list.php" , {id: $stateParams.id},{headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
//$http.post(SERVER.url+'/detail', {id: $stateParams.id})
.success(function(response){
$scope.topic = response[0];
});
})


.controller('DetailCtrl', function($scope, $http, $stateParams){
$http.post("http://askariad.com/mobileapp/detail.php" , {id: $stateParams.id},{headers: { 'Content-Type': 'application/x-www-form-urlencoded' }})
//$http.post(SERVER.url+'/detail', {id: $stateParams.id})
.success(function(response){
$scope.topic = response[0];
});
})


//
//
//.controller('detail', function($scope, $stateParams) {
//    
////        $scope.data = data.get($stateParams.dataid);
//    
//});
