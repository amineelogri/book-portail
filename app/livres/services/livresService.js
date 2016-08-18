'use strict';


angular.module('bookPortailApp')
  .factory('livresService', function ($http) {
    return{
        livresServiceMethode: function(){
            return $http.get("http://localhost:9091/livres/nomMethode");
        }
    }
  });
