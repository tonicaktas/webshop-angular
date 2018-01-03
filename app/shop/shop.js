angular.module('shop.shop',['ngRoute'])

.config(['$routeProvider',function($routeProvider){
  $routeProvider.
  when('/shop',{
    templateUrl:'shop/shop.html',
    controller:'ShopCtrl'
  }).
  when('/shop/:shopId',{
    templateUrl:'shop/shop-details.html',
    controller:'ShopDetailsCtrl'
  })

}])


.controller('ShopCtrl',['$scope','$http',function($scope, $http){
  $http.get('json/shop.json').success(function(data){
    console.log(data);
    $scope.shop = data;
  });

}])

.controller('ShopDetailsCtrl',['$scope','$http','$routeParams','$filter',function($scope, $http, $routeParams, $filter){
  var shopId = $routeParams.shopId;
  $http.get('json/shop.json').success(function(data){
    $scope.sho = $filter('filter')(data, function(d){ // filterar ut id från data
      return d.id == shopId;
    })[0];
    $scope.MainImage = $scope.sho.images[0].name;
  });
  $scope.setImage = function(image){ // gör så att bilder ändras till stora
    $scope.MainImage = image.name;
  }
}]);
