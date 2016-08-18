'use strict';


angular.module('bookPortailApp')
  .factory('chatService', function ($http) {
    return{
        chatServiceMethode: function(){
            return $http.get("http://localhost:9090/chat/nomMethode");
        }
    }
  });
