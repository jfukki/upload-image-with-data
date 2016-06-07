// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers','ionic-letter-avatar','ngCordova'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/detail.html'
        }
      }
    })
  
  
  .state('app.category', {
      url: '/category',
      views: {
        'menuContent': {
          templateUrl: 'templates/category.html'
        }
      }
    })
  
  
  
  .state('app.home', {
      url: '/home',
      views: {
        'menuContent': {
          templateUrl: 'templates/home.html'
           
        }
      }
    })
  
  
  
  
  
  .state('app.detail', {
      url: '/detail/:id',
      views: {
        'menuContent': {
          templateUrl: 'templates/detail.html'
        }
      }
    })
  
  
  
  .state('app.submit', {
      url: '/submit',
      views: {
        'menuContent': {
          templateUrl: 'templates/submit.html',
            controller: 'submit'
        }
      }
    })
  
  
  
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })
  
  
  //detail view
  .state('tab.detail', {
url: '/detail/:id',
views: {
'tab-listview': {
templateUrl: 'templates/detail.html',
controller: 'DetailCtrl'
}
}
})
  
  //category list view
  
  .state('tab.list', {
url: '/list/:id',
views: {
'tab-listview': {
templateUrl: 'templates/category.html',
controller: 'list'    

}
}
})
  
  
  
  
  
//  

//
//  
//  .state('app.detail', {
//    url: '/detail/:detailid',
//    views: {
//      'menuContent': {
//        templateUrl: 'templates/detail.html',
//        controller: 'DetailCtrl'
//      }
//    }
//  });
  
  
  
  
//  .state('app.detail', {
//    url: '/detail/:dataId',
//    views: {
//      'menuContent': {
//        templateUrl: 'templates/detail.html'
//        
//      }
//    }
//  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/home');
});
