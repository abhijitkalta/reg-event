'use strict';
eventsApp.controller('CacheSampleController', 
    function CacheSampleController($scope,myCache) {
    
    $scope.addToCache = function(key,value){
       return myCache.put(key,value);
    };
    
    $scope.getFromCache = function(key){
        return myCache.get(key);
    };
    
    $scope.cacheInfo = function(){
            $scope.text=myCache.info(); 
        };
    
});


