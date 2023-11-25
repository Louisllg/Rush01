// Fonction pour masquer la page de chargement et afficher le contenu principal
function hideLoader() {
    document.getElementById("loading-page").style.display = "none";
    document.getElementById("content").classList.remove("hidden");
}

// Attache l'événement onload à la fonction hideLoader avec un délai de 5000 ms (5 secondes)
setTimeout(hideLoader, 5000);
