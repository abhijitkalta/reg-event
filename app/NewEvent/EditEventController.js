'use strict';
eventsApp.controller('EditEventController', ['$scope', function($scope) {
    
    $scope.saveEvent = function(event){
    
        alert(event.name + "saved successfully");
        
    };
    
    $scope.cancelEvent = function(event) {
    
        window.location.assign('/app/EventDetails/EventDetails.html');
    };
    
}]);