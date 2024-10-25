// Fonction pour valider le format de l'email
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

// Fonction pour valider les champs du formulaire
function validateForm() {
  const lastname = document.getElementById("lastname").value;
  const firstname = document.getElementById("firstname").value;
  const dob = document.getElementById("dob").value;
  const address = document.getElementById("address").value;
  const email = document.getElementById("email").value;

  if (lastname.length < 5) {
    showValidationModal("Le nom doit comporter au moins 5 caractères.");
    return false;
  }
  if (firstname.length < 5) {
    showValidationModal("Le prénom doit comporter au moins 5 caractères.");
    return false;
  }
  if (new Date(dob) > new Date()) {
    showValidationModal("La date de naissance ne peut pas être dans le futur.");
    return false;
  }
  if (address.length < 5) {
    showValidationModal("L'adresse doit comporter au moins 5 caractères.");
    return false;
  }
  if (!validateEmail(email)) {
    showValidationModal("Format d'email invalide.");
    return false;
  }

  contactStore.add(lastname, firstname, dob, address, email);
  displayContactList();
  return true;
}

// Fonction pour afficher la fenêtre modale d'erreur de validation
function showValidationModal(message) {
  document.querySelector(".modal-body").textContent = message;
  var myModal = new bootstrap.Modal(document.getElementById("validationModal"));
  myModal.show();
}

// Intercepter la soumission du formulaire et valider les entrées
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();
    validateForm();
  });

  document.getElementById("getLocationBtn").addEventListener("click", () => {
    getLocation();
  });
});
