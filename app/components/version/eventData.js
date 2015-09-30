'use strict';

eventsApp.factory('eventData', function($resource,$q) {
    var resource = $resource('http://localhost:8000/app/components/data/:id',{id:'@id'});
    return {
      getEvent  : function() { 
//      var deferred = $q.defer();
//        $http.get('http://localhost:8000/app/components/data/eventData.json').
//        then(function(response) {
//            deferred.resolve(response.data.event);
//        }, function(response) {
//            deferred.reject(response.status);
//        });
//      return deferred.promise; 
        var deferred = $q.defer();
        resource.get({id: 'eventData.json'}).
        $promise.then( function(response) {
        deferred.resolve(response);
        }, function(response) {
        deferred.reject(response);
       });
       return deferred.promise;  
    },
        save : function(event){
        var deferred = $q.defer();
        event.id = '999.json';
        resource.save(event,
        function(response) {
        console.log(response);
        deferred.resolve(response);
       }, function(response) {
        deferred.reject(response);
       });
       return deferred.promise;     
   }
}});
                 