'use strict';

angular.module('RedditClientApp')
  .factory('cordovaReady', function () {
    return function(fn) {
      console.log('using cordovaready');
      var queue = [];
      var impl = function() {
        queue.push(Array.prototype.slice.call(arguments));
      };
      document.addEventListener('deviceReady', function() {
        console.log('deviceReady listener called');
        queue.forEach(function(args) {
          console.log('performing delegated function call with '+args);
          fn.apply(this, args);
        });
        impl = fn;
      }, false);
      return function() {
        return impl.apply(this, arguments);
      };
    };
  });
