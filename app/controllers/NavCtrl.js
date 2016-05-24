app.controller("NavCtrl", function($scope){
  $scope.navItems = [
  {
    name: "Search",
    url: "#/contacts/search"}, 
  {
    name: "All Items",
    url: "#/contacts/list"},
  {
    name: "Add New Contact",
    url: "#/contacts/addnew"
  }
  ];
});