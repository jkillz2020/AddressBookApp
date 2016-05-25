app.controller("NewContactCtrl", function($scope, $http, $location, ContactStorage){
  $scope.contact = "";
  $scope.newContact = {
    firstName: "",
    lastName: "",
    streetAddress: "",
    cityState: "",
    zipcode: "",
    phone: "",
    email: "",
    favorite: false,
    notes: "",
  };

  $scope.contacts = [];
  
    $scope.addNewContact = function(){
      $http.post(
        "https://jk-addressapp.firebaseio.com/contacts.json",
        JSON.stringify({
          firstName: $scope.newContact.firstName,
          lastName: $scope.newContact.lastName,
          streetAddress: $scope.newContact.streetAddress,
          cityState: $scope.newContact.cityState,
          zipcode: $scope.newContact.zipcode,
          phone: $scope.newContact.phone,
          email: $scope.newContact.email,
          notes: $scope.newContact.notes
        })
      )
      .success(function(response){
        console.log(response);
        $location.url("contact/list")
      })

    };
});