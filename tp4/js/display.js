function displayContactList() {
    const contactListString = localStorage.getItem("contactList");
    const contactList = contactListString ? JSON.parse(contactListString) : [];
    const tbody = document.querySelector("table tbody");
    tbody.innerHTML = ""; // Vider le tableau avant de le remplir
  
    contactList.forEach((contact, index) => {
      tbody.innerHTML += `
        <tr>
          <td>${contact.name}</td>
          <td>${contact.firstname}</td>
          <td>${contact.date}</td>
          <td>${contact.address}</td>
          <td>${contact.mail}</td>
          <td>
            <button class="btn btn-danger btn-sm" onclick="deleteContact(${index})">Supprimer</button>
          </td>
        </tr>
      `;
    });
  }
  
  function deleteContact(index) {
    contactStore.remove(index);
    displayContactList();
  }
  
  window.onload = function () {
    displayContactList();
  };
  
