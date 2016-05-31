app.controller("ContactDetailViewCtrl", function($scope, $http, $routeParams, contactStorage){
  $scope.contacts = [];
  $scope.selectedContact = {};
  console.log($routeParams.contactId);
  
    contactStorage.getContactList().then(function(contactCollection){
      $scope.contacts = contactCollection;

      $scope.selectedcontact = $scope.contacts.filter(function(contact){
    return contact.id === $routeParams.contactId;
  })[0];
    })
});

