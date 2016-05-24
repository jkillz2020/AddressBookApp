app.controller("NewContactCtrl", function($scope){
  $scope.contact = "";
  $scope.newContact = {};

  $scope.contacts = [
  {
    id: 0,
    firstName: 'Josh',
    lastName: 'Kilgore',
    streetAddress: '506 Bluehole Place',
    cityState: 'Nashville, TN',
    zipcode: '37027',
    phone: '615-473-0000',
    email: "kilgore.josh@gmail.com",
    favorite: true,
    notes: ["call for dev job"]
  },
  {
    id: 1,
    firstName: 'Terra',
    lastName: 'Tatum',
    streetAddress: '123 Wayward Landing',
    cityState: 'Brentwood, TN',
    zipcode: '37028',
    phone: '615-555-5231',
    email: "kilgore.josh@gmail.com",
    favorite: true,
    notes: ["professional organizer"]
  },
  {
    id: 2,
    firstName: 'Jon',
    lastName: 'Snow',
    streetAddress: '1 Big Ass Castle Road',
    cityState: 'Winterfell, North',
    zipcode: '66666',
    phone: '666-555-4444',
    email: "whitewalkerkiller@gmail.com",
    favorite: true,
    notes: ["Winter's coming"]
  }
];

    $scope.addNewContact = function(){
      $scope.newContact.favorite = false;
      $scope.newContact.id = $scope.contacts.length;
      console.log("you added new item", $scope.newContact);
      $scope.contacts.push($scope.newContact);
      $scope.newContact="";
    };
});