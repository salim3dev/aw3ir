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
        // Récupérer l'adresse depuis le formulaire
        const address = document.querySelector("#address").value.trim();
  
        // Construire l'URL de Google Static Maps avec l'adresse saisie
        const mapImageUrl = `https://maps.googleapis.com/maps/api/staticmap?markers=${encodeURIComponent(address)}&zoom=14&size=400x300&scale=2&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
  
        // Vérifier dans la console si l'URL est correcte
        console.log(mapImageUrl);
  
        // Modifier le contenu de la modal pour afficher l'image et le lien vers Google Maps
        document.querySelector("#resultModal .modal-body").innerHTML = `
          <a href="http://maps.google.com/maps?q=${encodeURIComponent(address)}" target="_blank">
            <img src="${mapImageUrl}" alt="Google Maps" style="width: 400; height: 300;">
          </a>
        `;
  

         // Vérification du contenu de la modal
      console.log(document.querySelector("#resultModal .modal-body").innerHTML);



        // Afficher la modal avec la carte
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

  
