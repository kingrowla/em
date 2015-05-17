'use strict';

/**
 * @ngdoc function
 * @name emurgeApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the emurgeApp
 */
angular.module('emurgeApp')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
