/**
 * Fonction qui vérifie la validité d'un mot de passe (mdp).
 * @param {string} mdp - Le mot de passe à tester.
 * @returns {boolean} - true si valide (>= 8 chars ET contient '@'), sinon false.
 */
function verifierMotDePasse(mdp) {
    // Condition 1: Le mot de passe fait au moins 8 caractères.
    const estAssezLong = mdp.length >= 8;

    // Condition 2: Le mot de passe contient le symbole '@'.
    // La méthode includes() retourne true si la chaîne contient la sous-chaîne spécifiée.
    const contientArobase = mdp.includes('@');

    // Le mot de passe est valide UNIQUEMENT si les deux conditions sont vraies (opérateur &&).
    return estAssezLong && contientArobase;
}

// --- Test de la fonction avec une saisie utilisateur ---

// Demander un mot de passe à l'utilisateur
const motDePasseUtilisateur = prompt("Veuillez entrer un mot de passe (doit contenir '@' et faire au moins 8 caractères) :");

// Appeler la fonction de validation
const estValide = verifierMotDePasse(motDePasseUtilisateur);

// Afficher le résultat
if (estValide) {
    console.log("Mot de passe valide");
} else {
    console.log("Mot de passe non valide");
}

/* Exemples de tests en console (si vous ne voulez pas utiliser prompt) :
console.log(verifierMotDePasse("1234567@")); // true (8 chars et @)
console.log(verifierMotDePasse("123456@")); // false (seulement 7 chars)
console.log(verifierMotDePasse("12345678")); // false (pas de @)
*/