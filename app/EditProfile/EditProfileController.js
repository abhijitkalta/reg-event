'use strict';
eventsApp.controller('EditProfileController', 
    function EditProfileController($scope, gravatarUrlBuilder) {
    $scope.user = {};
    $scope.getGravatar = function(email) {
    return gravatarUrlBuilder.getGravatar(email);
    };
  });




    
