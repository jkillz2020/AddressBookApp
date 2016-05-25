app.controller("ContactDetailViewCtrl", function($q, $scope, $http, $routeParams, contactStorage){
  $scope.contacts = [];
  $scope.selectedContact = {};
  
    $http.get("https://jk-addressapp.firebaseio.com/contacts.json")
      .success(function(contactObject){
        var contactCollection = contactObject;
        Object.keys(contactCollection).forEach(function(key){
          contactCollection[key].id=key;
          $scope.contacts.push(contactCollection[key]);

          $scope.selectedcontact = $scope.contacts.filter(function(contact){
            return contact.id === $routeParams.contactId;
          })[0];
      })
  });

});