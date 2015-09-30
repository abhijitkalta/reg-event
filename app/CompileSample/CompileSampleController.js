'use strict';
eventsApp.controller('CompileSampleController', 
    function CompileSampleController($scope, $compile, $parse) {
    
    //use of parse
    var getter = $parse('user.name');
    var setter = getter.assign;
    var context = {user:{name:'angular'}};
    console.log(getter(context));
    setter(context,'Hello world');
    console.log(getter(context));
    
    
    $scope.appendDiv = function(markup){
    //angular.element - Jquery tag
    $compile(markup)($scope).appendTo(angular.element('#appendHere'));
    return 0;
    
    }
});