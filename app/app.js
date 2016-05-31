"use strict";
var app = angular.module("AddressBookApp", ["ngRoute"])
.constant("firebaseURL", "https://jk-addressapp.firebaseio.com/");

let isAuth = (AuthFactory) => new Promise ((resolve, reject) => {
  if(AuthFactory.isAuthenticated()){
    console.log("User is authenticated, resolve route promise");
    resolve();
  } else {
    console.log("User is not authenticated, reject route promise");
    reject();
  }
});

app.config(function($routeProvider){
  $routeProvider.
    when("/",{
      templateUrl: "partials/contacts-list.html",
      controller: "ContactListCtrl",
      resolve: {isAuth}
    }).
    when("/contacts/addnew",{
      templateUrl: "partials/new-contacts.html",
      controller: "NewContactCtrl",
      resolve: {isAuth}
    }).
    when("/contacts/:contactId",{
      templateUrl: "partials/contacts-details.html",
      controller: "ContactDetailViewCtrl",
      resolve: {isAuth}
      }).
    when("/contacts/:contactId/edit",{
      templateUrl: "partials/new-contacts.html",
      controller: "ContactEditCtrl",
      resolve: {isAuth}
    }).
    when("/login",{
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    when("/logout",{
      templateUrl: "partials/login.html",
      controller: "LoginCtrl"
    }).
    otherwise("/");
});

app.run(($location) =>{
  let todoRef = new Firebase("https://jk-addressapp.firebaseio.com/");
  todoRef.onAuth(authData => {
    if(!authData){
      $location.path("/login");
    }
  });
});