window.onload = function () {
    document.querySelector("form").addEventListener("submit", function (event) {
      event.preventDefault(); // Empêche la soumission automatique du formulaire
      let isValid = true;
  
      // Champs texte (minimum 5 caractères)
      const fields = ["#lastname", "#firstname", "#address"];
      fields.forEach(function (selector) {
        const input = document.querySelector(selector).value.trim();
        if (input.length < 5) {
          isValid = false;
        }
      });
  
      // Validation de l'email
      const email = document.querySelector("#email").value.trim();
      if (!validateEmail(email)) {
        isValid = false;
      }
  
      // Validation de la date de naissance (ne doit pas être dans le futur)
      const birthday = document.querySelector("#dob").value;
      const birthdayDate = new Date(birthday);
      const birthdayTimestamp = birthdayDate.getTime();
      const nowTimestamp = Date.now();
  
      if (birthdayTimestamp > nowTimestamp) {
        isValid = false;
      }
  
      // Si une erreur est présente, on affiche la modal d'erreur
      if (!isValid) {
        var errorModal = new bootstrap.Modal(document.getElementById("myModal"));
        errorModal.show();
      }
  
      // Si toutes les validations sont réussies, afficher la modal de validation
      else {
        var successModal = new bootstrap.Modal(document.getElementById("resultModal"));
        successModal.show();
      }
    });
  };
  
  // Fonction de validation d'email
  function validateEmail(email) {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  
