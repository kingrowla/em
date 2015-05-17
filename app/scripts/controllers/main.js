'use strict';

/**
 * @ngdoc function
 * @name emurgeApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the emurgeApp
 */
angular.module('emurgeApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
