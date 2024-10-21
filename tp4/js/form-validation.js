// form-validation.js

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

  // Vérifications de validation
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

  // Si toutes les validations passent
  alert("Formulaire soumis avec succès !");
  return true; // Retourner true pour indiquer une soumission valide du formulaire
}

// Fonction pour afficher la fenêtre modale d'erreur de validation
function showValidationModal(message) {
  document.querySelector(".modal-body").textContent = message; // Mettre à jour le message de la modale
  var myModal = new bootstrap.Modal(document.getElementById("validationModal"));
  myModal.show();
}

// Intercepter la soumission du formulaire et valider les entrées
document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault(); // Empêcher la soumission par défaut du formulaire
    if (validateForm()) {
      // Si valide, procéder à la soumission du formulaire ou d'autres actions
      // Exemple : Vous voudrez peut-être envoyer les données via AJAX ou similaire
    }
  });

  // Intercepter l'événement de clic sur le bouton Obtenir ma Position
  document.getElementById("getLocationBtn").addEventListener("click", function () {
    getLocation(); // Appeler la fonction pour obtenir la géolocalisation
  });
});

