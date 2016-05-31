app.controller("ContactListCtrl", function($scope, $http, $location, contactStorage){
  $scope.contacts = [];

contactStorage.getContactList().then(function(contactCollection){
  console.log("contactCollection from promise", contactCollection);
  $scope.contacts = contactCollection;
})


  $scope.contactDelete = function(contactId){
    console.log("contactId", contactId);
    contactStorage.deleteContact(contactId).then(function(response){
      contactStorage.getContactList().then(function(contactCollection){
        $scope.contacts = contactCollection;
      })
    })
}

  $scope.inputChange = function(contact){
      contactStorage.updateFavoriteStatus(contact)
      .then(function(response){
        console.log("response", response);
      })
    }
  
});
