"use strict"
app.factory("contactStorage", function($q, $http, firebaseURL){

    var getContactList = function(){
      let contacts = [];
      return $q(function(resolve, reject){
        $http.get(firebaseURL + "contacts.json")
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
    var deleteContact = function(contactId){
    return $q(function(resolve, reject){
      $http
              .delete(firebaseURL + "contacts/" + contactId + ".json")
              .success(function(objectFromFirebase){
                resolve(objectFromFirebase)
              })
    })
  }
    
      var postNewContact = function(newContact){
          return $q(function(resolve, reject) {
              $http.post(firebaseURL + "contacts.json",
                JSON.stringify({
                    firstName: newContact.firstName,
                    lastName: newContact.lastName,
                    streetAddress: newContact.streetAddress,
                    cityState: newContact.cityState,
                    zipcode: newContact.zipcode,
                    phone: newContact.phone,
                    email: newContact.email,
                    notes: newContact.notes
                  }))
                
                .success(
                    function(objectFromFirebase) {
                        resolve(objectFromFirebase);
                    }
                );
            });
    };

      var getSingleContact = function(contactId){
        return $q(function(resolve, reject){
            $http.get(firebaseURL + "contacts/" + contactId + ".json")
            .success(function(contactObject){
              resolve(contactObject);
          }) 
          .error(function(error){
              reject(error);
          });
        })
  };

    var updateContact = function(contactId, newContact){
        return $q(function(resolve, reject) {
            $http.put(
                firebaseURL + "contacts/" + contactId + ".json",
                JSON.stringify({
                    firstName: newContact.firstName,
                    lastName: newContact.lastName,
                    streetAddress: newContact.streetAddress,
                    cityState: newContact.cityState,
                    zipcode: newContact.zipcode,
                    phone: newContact.phone,
                    email: newContact.email,
                    notes: newContact.notes
                })
            )
            .success(
                function(objectFromFirebase) {
                    resolve(objectFromFirebase);
                }
            );
        });
    };

  return {updateContact:updateContact, getSingleContact:getSingleContact, getContactList:getContactList, deleteContact:deleteContact, postNewContact:postNewContact}

})
