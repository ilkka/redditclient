'use strict';

angular.module('RedditClientApp')
  .controller('MainCtrl', function ($scope, geolocation) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    geolocation.getCurrentPosition(function(position) {
      $scope.position = position;
    });
  });
