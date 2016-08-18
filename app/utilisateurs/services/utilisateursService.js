'use strict';


angular.module('bookPortailApp')
  .factory('utilisateursService', function ($http) {
    return{
        utilisateursServiceMethode: function(){
            return $http.get("http://localhost:9093/utilisateurs/nomMethode");
        }
    }
  });
