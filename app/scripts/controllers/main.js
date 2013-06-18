'use strict';

angular.module('RedditClientApp')
  .controller('MainCtrl', function ($scope, geolocation) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('Now calling geoloc');
    geolocation.getCurrentPosition(function(position) {
      console.log('Geoloc got back to us');
      $scope.position = position;
    }, function(err) {
      console.log('Geoloc error: '+err.code+' '+err.message);
    });
    console.log('Called geoloc');
  });
