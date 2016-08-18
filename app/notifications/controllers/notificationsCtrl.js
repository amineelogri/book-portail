'use strict';

 angular.module('bookPortailApp')
   .controller('notificationsCtrl', function ($scope,notificationsService) {

    notificationsService.notificationsServiceMethode().success(function (data) {
          $scope.dataNotificationsService=data;

    });
   });
