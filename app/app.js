var app = angular.module("AddressBookApp", ["ngRoute"]);

app.config(function($routeProvider){
  $routeProvider.
    when("/contacts/list",{
      templateUrl: "partials/contacts-list.html",
      controller: "ContactListCtrl"
    }).
    when("/contacts/addnew",{
      templateUrl: "partials/new-contacts.html",
      controller: "NewContactCtrl"
    }).
    when("/contacts/details",{
      templateUrl: "partials/contacts-details.html",
      controller: "ContactsViewCtrl"
    }).
    otherwise("contacts/list");
}

);