'use strict';

 angular.module('bookPortailApp')
   .controller('utilisateursCtrl', function ($scope,utilisateursService) {

    utilisateursService.utilisateursServiceMethode().success(function (data) {
          $scope.dataUtilisateursService=data;

    });
   });
