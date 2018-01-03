'use strict';

// Declare app level module which depends on views, and components
angular.module('shop', [
  'ngRoute',
  'shop.view1',
  'shop.view2',
  'shop.shop'
]).
config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/shop'});
}]);
