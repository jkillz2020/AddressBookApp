"use strict";
app.factory("contactStorage", function($q, $http){

    var getContactList = function(){
      let contacts = [];
      return $q(function(resolve, reject){
        $http.get("https://https://jk-addressapp.firebaseio.com/contacts.json")
          .success(function(contactObject){
            var contactCollection = contactObject;
            Object.keys(contactCollection).forEach(function(key){
              contactCollection[key].id=key;
              contacts.push(contactCollection[key]);
              })
              resolve(contacts);
          }) 
          .error(function(error){
              reject(error);
          });
        })
    }

  });