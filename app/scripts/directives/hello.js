'use strict';

angular.module('angularDirectiveTranscludeApp')
  .directive('hello', function () {
    return {
      template: '<div>Hello, <span ng-transclude></span></div>',
      transclude: true
    };
  });
