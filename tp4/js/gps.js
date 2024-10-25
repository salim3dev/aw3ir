// gps.js

// Fonction pour obtenir la géolocalisation de l'utilisateur
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition, showError);
  } else {
    document.querySelector("#map").innerHTML = "La géolocalisation n'est pas supportée par ce navigateur.";
  }
}

// Fonction pour afficher la position
function showPosition(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const latlon = `${latitude}, ${longitude}`;

  document.getElementById("address").value = latlon;

  const img_url = `https://maps.googleapis.com/maps/api/staticmap?center=${latlon}&zoom=14&size=400x300&markers=color:red%7C${latlon}&key=AIzaSyAkmvI9DazzG9p77IShsz_Di7-5Qn7zkcg`;
  document.querySelector("#map").innerHTML = `<img src="${img_url}" alt="Carte montrant l'emplacement de l'utilisateur">`;
}

// Fonction pour gérer les erreurs de géolocalisation
function showError(error) {
  let message = "Une erreur inconnue s'est produite.";
  switch (error.code) {
    case error.PERMISSION_DENIED:
      message = "L'utilisateur a refusé la demande de géolocalisation.";
      break;
    case error.POSITION_UNAVAILABLE:
      message = "Les informations de localisation ne sont pas disponibles.";
      break;
    case error.TIMEOUT:
      message = "La demande pour obtenir la localisation a expiré.";
      break;
  }
  document.querySelector("#map").innerHTML = message;
}
