angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

  .controller('desktopCtrl', function($scope, Chats) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.chats = Chats.all();
    $scope.remove = function(chat) {
      Chats.remove(chat);
    };
  })

  .controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
    toastr.options.closeButton = true;
    toastr.options.closeDuration = 3000000;

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "http://207.138.132.95:24352/haackattack/escort?pnr=AAABBB",
      "method": "GET",
      "headers": {
        'Access-Control-Allow-Origin': '*'
      }
    }

    $.ajax(settings).success(function (response) {
      $scope.child = response;
      $scope.$apply($scope.child);
      console.log(response);

    });

    window.setInterval(function(){
      var settings1 = {
        "async": true,
        "crossDomain": true,
        "url": "https://aa-accompanied-minor.herokuapp.com/api/v1/minortracking/checkMoneyTransfer/2",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache",
          "postman-token": "d32fc507-de54-bf73-128c-81441a282dcc"
        }
      }

      $.ajax(settings1).done(function (response1) {

        if(response1.data !== null){
          var transfer = response1.data.transfer;
          toastr.info(transfer.sender.first_name+' '+transfer.sender.last_name+ ' sent '+transfer.transfer_amount.value+' '+transfer.transfer_amount.currency+' show me the money')
        }
        console.log(response1);
      });


      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://aa-accompanied-minor.herokuapp.com/api/v1/minortracking/",
        "method": "GET",
        "headers": {
          "content-type": "application/json",
          "cache-control": "no-cache",
          "postman-token": "56427292-9825-e940-ea6a-833ac148622b"
        }
      }

      $.ajax(settings).done(function (response) {
        $scope.location = response.data[0].minorLocationCustom;
        $scope.$apply($scope.location);

      });



    }, 3000);
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
