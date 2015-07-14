'use strict'

myApp.controller('globalCtrl', function ($scope, $rootScope, $location, $http) {
  
  $rootScope.$on('$routeChangeSuccess', function (event, current) {
    $scope.location = $location.path();
    $scope.pageTitle = current.$$route.title;
  });

  $rootScope.$on('$stateChangeSuccess', function (event, current) {
    $scope.location = $location.path();
    $scope.pageTitle = current.title;
  });

  $scope.stylesheets2 = $rootScope.stylesheets;

  $http.get('modules/app.routes.js').success(function (source) {
    // Add source to scope and remove irrelevant dependency
    $scope.routeAppSource = source.replace(",'hljs'", '');
  });

  $http.get('modules/app.states.js').success(function (source) {
    // Add source to scope and remove irrelevant dependency
    $scope.stateAppSource = source.replace(",'hljs'", '');
  });

  $scope.goTo = function (url) {
    console.log(url);
    $location.path(url);
  };

});