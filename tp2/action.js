window.onload = () => {
    const paramsString = document.location.search; // Récupérer l'URL
    const searchParams = new URLSearchParams(paramsString); // Extraire les paramètres
  
    // Parcourir les paramètres
    for (const param of searchParams) {
      const elementId = param[0]; // Nom du champ
      const elementValue = decodeURIComponent(param[1]); // Valeur du champ
      const element = document.getElementById(elementId); // Élément HTML cible
  
      if (element !== null) {
        element.textContent = elementValue;
      }
  
      // Gérer les liens pour l'adresse et l'email
      if (param[0] === "address") {
        element.href = `https://www.google.com/maps/search/?api=1&query=${elementValue}`;
      } else if (param[0] === "email") {
        element.href = `mailto:${elementValue}?subject=Hello!&body=What's up?`;
      }
    }
  };
  