// gps.js

// Fonction pour demander la géolocalisation de l'utilisateur
function getLocation() {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
      document.querySelector("#map").innerHTML = "La géolocalisation n'est pas supportée par ce navigateur.";
    }
  }
  
  // Fonction pour afficher la position et afficher la carte
  function showPosition(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;
  
    // Afficher les coordonnées dans la console
    console.log("Latitude et Longitude : ", latitude, longitude); // Afficher les coordonnées dans la console
  
    // Définir les coordonnées dans le champ d'adresse
    var latlon = `${latitude}, ${longitude}`;
    document.getElementById("address").value = latlon; // Mettre à jour le champ d'adresse avec les coordonnées
  
    // URL avec un marqueur rouge à l'emplacement de l'utilisateur
    var img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=400x300&markers=color:red%7C${latlon}&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
  
    document.querySelector("#map").innerHTML = `<img src="${img_url}" alt="Carte montrant l'emplacement de l'utilisateur">`;
  }
  
  // Gérer les erreurs liées à la géolocalisation
  function showError(error) {
    switch (error.code) {
      case error.PERMISSION_DENIED:
        document.querySelector("#map").innerHTML = "L'utilisateur a refusé la demande de géolocalisation.";
        break;
      case error.POSITION_UNAVAILABLE:
        document.querySelector("#map").innerHTML = "Les informations de localisation ne sont pas disponibles.";
        break;
      case error.TIMEOUT:
        document.querySelector("#map").innerHTML = "La demande pour obtenir la localisation de l'utilisateur a expiré.";
        break;
      case error.UNKNOWN_ERROR:
        document.querySelector("#map").innerHTML = "Une erreur inconnue s'est produite.";
        break;
    }
  }
  
