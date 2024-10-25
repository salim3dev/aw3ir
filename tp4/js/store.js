// store.js
// Script pour gérer la liste de contact en JSON

// Pour ajouter un contact : contactStore.add(_name, _firsname, _date, _adress, _mail);
// Pour récupérer la liste : contactStore.getList();

var contactStore = (function () {
    // Charger la liste des contacts depuis localStorage ou initialiser une liste vide
    let contactListString = localStorage.getItem("contactList");
    var contactList = contactListString ? JSON.parse(contactListString) : [];
  
    return {
      add: function (_name, _firsname, _date, _adress, _mail) {
        var contact = {
          name: _name,
          firstname: _firsname,
          date: _date,
          adress: _adress,
          mail: _mail,
        };
        // Ajouter le contact à la liste
        contactList.push(contact);
  
        // Enregistrer la liste mise à jour dans localStorage
        localStorage.setItem("contactList", JSON.stringify(contactList));
  
        return contactList;
      },
  
      reset: function () {
        // Vider la liste des contacts et localStorage
        contactList = [];
        localStorage.removeItem("contactList");
        return contactList;
      },
  
      getList: function () {
        // Renvoyer la liste des contacts
        return contactList;
      },
    };
  })();
  
