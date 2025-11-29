// 1. Demander un nombre 'n' à l'utilisateur
let input = prompt("Veuillez entrer le nombre dont vous souhaitez afficher la table de multiplication :");
let n = Number(input);

// Vérification de la validité de l'entrée (bonne pratique)
if (isNaN(n)) {
    console.log("Erreur : Veuillez entrer une valeur numérique valide.");
} else {
    console.log(`--- Table de multiplication de ${n} ---`);
    
    // 2. Utiliser une boucle 'for' pour itérer de 1 à 10
    // La variable 'i' représente le multiplicateur (1, 2, 3, ... 10)
    for (let i = 1; i <= 10; i++) {
        
        // Calcul du résultat
        let resultat = n * i;
        
        // Affichage du résultat au format demandé : "n x i = resultat"
        // On utilise les littéraux de gabarit (backticks) pour une meilleure lisibilité.
        console.log(`${n} x ${i} = ${resultat}`);
    }
}