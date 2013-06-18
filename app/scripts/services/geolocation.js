// jshint unused: false
'use strict';

angular.module('RedditClientApp')
  .factory('geolocation', function ($rootScope, cordovaReady) {
    // Public API here
    return {
      getCurrentPosition: cordovaReady(function(onSuccess, onError, options) {
        console.log('actual geoloc being called');
        navigator.geolocation.getCurrentPosition(function() {
          console.log('geoloc onSuccess');
          var that = this,
            args = arguments;
          if (onSuccess) {
            $rootScope.$apply(function() {
              onSuccess.apply(that, args);
            });
          }
        }, function() {
          console.log('geoloc onError');
          var that = this,
            args = arguments;
          if (onError) {
            $rootScope.$apply(function() {
              onError.apply(that, args);
            });
          }
        }, options);
      })
    };
  });
