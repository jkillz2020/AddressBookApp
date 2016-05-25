app.controller("NavCtrl", function($scope){
  $scope.navItems = [
  {
    name: "Contact Details",
    url: "#/contacts/contacts-details"}, 
  {
    name: "All Contacts",
    url: "#/contacts/contacts-list"},
  {
    name: "Add New Contact",
    url: "#/contacts/new-contacts"
  }
  ];
});