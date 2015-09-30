'use strict';
eventsApp.controller('EditEventController', 
    function EditEventController($scope, eventData, $route) {
    $scope.event = {};
    $scope.saveEvent = function(event){
    
      //  alert(event.name + "saved successfully");
    var promise = eventData.save(event);
    promise.then(function(event) {
    console.log('success',event);
    }, function(event) {
    alert("Failed");
    });
        
    };
    
    $scope.cancelEvent = function(event) {
    
        window.location.assign('/app/EventDetails/EventDetails.html');
    };
    $scope.reloadEvent = function() { // to reload only the route and not the entire app
    
        $route.reload();
    };
    
});