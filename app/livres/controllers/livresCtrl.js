'use strict';

 angular.module('bookPortailApp')
   .controller('livresCtrl', function ($scope,livresService) {

    livresService.livresServiceMethode().success(function (data) {
          $scope.dataLivresService=data;

    });
   });
