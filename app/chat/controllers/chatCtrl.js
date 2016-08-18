'use strict';

 angular.module('bookPortailApp')
   .controller('chatCtrl', function ($scope,chatService) {

    chatService.chatServiceMethode().success(function (data) {
          $scope.dataChatService=data;

    }).error(function (data) {
      console.log("error");
    });
   });
