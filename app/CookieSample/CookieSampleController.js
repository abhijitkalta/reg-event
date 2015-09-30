'use strict';
eventsApp.controller('CookieSampleController', 
    function CookieSampleController($scope, $cookieStore) {
    
    $scope.element = { id : 1 , name : "event" };
    
    $scope.setCookie = function(element){
       $cookieStore.put('element',element);
    };
    
    $scope.getCookie = function(){
        console.log($cookieStore.get('element'));
    };
    
    $scope.removeCookie = function(){
            $cookieStore.remove('element'); 
        };
    
});


