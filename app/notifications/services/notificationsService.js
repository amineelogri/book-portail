'use strict';


angular.module('bookPortailApp')
  .factory('notificationsService', function ($http) {
    return{
        notificationsServiceMethode: function(){
            return $http.get("http://localhost:9092/notifications/nomMethode");
        }
    }
  });
