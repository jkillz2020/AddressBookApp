app.controller("ContactEditCtrl", function($scope, $http, $location, $routeParams, contactStorage){
  $scope.title = "Edit Contact";
  $scope.submitButtonText="Update";
  $scope.newContact = {};

  contactStorage.getSingleContact($routeParams.contactId)
    .then(function successCallback(response){
      $scope.newContact=response;
    })

  $scope.addNewContact = function(){
    contactStorage.updateContact($routeParams.contactId, $scope.newContact)
      .then(function successCallback(response){
        $location.url("contacts/list");
      });
  };
});