eventsApp.controller('EventController', 
    function EventController($scope,eventData, $route) {
    
    //console.log($route.current.params.foo); // to access custom route param
    $scope.sortorder = 'name';
//    var promise = eventData.getEvent();
//   
//    promise.then(function(event) {
//    $scope.event = event;
//    }, function(event) {
//    alert(event );
//    });
    var promise = eventData.getEvent();
    
    promise.then(function(event) {
    $scope.event = event.event;
    }, function(event) {
        console.log(event);
    alert("Failed");
    });
    
    $scope.upVoteSession = function(session){
        session.upVoteCount++;
    };
    
});





