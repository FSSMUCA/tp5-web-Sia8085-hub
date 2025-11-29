// 1. Demander un nombre à l'utilisateur avec prompt()
// Le prompt retourne une chaîne (string), il faut la convertir en nombre (Number).
let input = prompt("Veuillez entrer un nombre pour la classification :");
let nombre = Number(input);

// Vérification de la validité de l'entrée (optionnel mais bonne pratique)
if (isNaN(nombre)) {
    console.log("Erreur : Veuillez entrer une valeur numérique valide.");
} else {
    let resultat = "";

    // 2. Utiliser des conditions imbriquées (if / else if / else) pour la classification

    if (nombre < 0) {
        // "Nombre négatif" si < 0
        resultat = "Nombre négatif";
    } else if (nombre >= 0 && nombre <= 10) {
        // "Petit" entre 0 et 10
        resultat = "Petit";
    } else if (nombre >= 11 && nombre <= 50) {
        // "Moyen" entre 11 et 50
        resultat = "Moyen";
    } else {
        // Condition de base si > 50 ("Grand" ou "Très grand")
        
        // C'est ici que l'imbrication est la plus pertinente :
        // On sait déjà que nombre > 50
        if (nombre > 100) {
            // "Très grand" si > 100
            resultat = "Très grand";
        } else {
            // Dans ce bloc, le nombre est > 50 mais <= 100
            // "Grand" si > 50 (et non Très grand)
            resultat = "Grand";
        }
    }

    console.log(`Le nombre entré est : ${nombre}`);
    console.log(`Classification : ${resultat}`);
}