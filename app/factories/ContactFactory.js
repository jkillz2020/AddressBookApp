"use strict";
app.factory("contactStorage", function($q, $http){

    var getContactList = function(){
      let contacts = [];
      return $q(function(resolve, reject){
        $http.get("https://jk-addressapp.firebaseio.com/contacts.json")
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
                  .delete(`https://todo-angular-js.firebaseio.com/contacts/${contactId}.json`)
                  .success(function(objectFromFirebase){
                    resolve(objectFromFirebase)
                  })
        })
      }

        var postNewContact = function(newContact){
            return $q(function(resolve, reject) {
                $http.post("https://todo-angular-js.firebaseio.com/contacts.json",
                    JSON.stringify({
                        assignedTo: newContact.assignedTo,
                        dependencies: newContact.dependencies,
                        dueDate: newContact.dueDate,
                        isCompleted: newContact.isCompleted,
                        location: newContact.location,
                        task: newContact.task,
                        urgency: newContact.urgency
                    }))
                
                .success(
                    function(objectFromFirebase) {
                        resolve(objectFromFirebase);
                    }
                );
            });
      }

  return {getContactList:getContactList, deleteContact:deleteContact, postNewContact:postNewContact}

});
