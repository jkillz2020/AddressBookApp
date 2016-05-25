app.controller("ContactListCtrl", function($scope, $http, $location, contactStorage){
  $scope.contacts = [];
  $scope.newContact = {};

contactStorage.getContactList().then(function(contactCollection){
  console.log("contactCollection from promise", contactCollection);
  $scope.contacts = contactCollection;
})


  $scope.contactDelete = function(contactId){
    console.log("contactId", contactId);
    contactStorage.deletecontact(contactId).then(function(response){
      contactStorage.getContactList().then(function(contactCollection){
        $scope.contacts = contactCollection;
      })
    })

  }
});
