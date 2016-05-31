app.controller("NewContactCtrl", function($scope, $http, $location, contactStorage, AuthFactory){
  $scope.contact = "";
  $scope.title = "New Contact";
  $scope.submitButtonText = "Add New Contact"
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
  
    $scope.addNewItem = function(){
     itemStorage.postNewItem($scope.newContact)
       .then(function successCallback(response){
         console.log("response",response );
         $location.url("contacts/list");
       });        

    };
});