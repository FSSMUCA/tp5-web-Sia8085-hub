// Déclaration et initialisation des deux variables de somme à 0
let sommePairs = 0;
let sommeImpairs = 0;

// Utilisation d'une boucle 'for' pour itérer de 1 à 50
for (let i = 1; i <= 50; i++) {
    
    // Test de parité : Si le reste de la division par 2 est 0, le nombre est Pair.
    // L'opérateur modulo (%) est utilisé.
    if (i % 2 === 0) {
        // Le nombre est pair, on l'ajoute à la somme des pairs
        sommePairs = sommePairs + i; // Équivalent à : sommePairs += i;
    } else {
        // Sinon, le nombre est impair (reste de la division par 2 est 1 ou -1)
        sommeImpairs = sommeImpairs + i; // Équivalent à : sommeImpairs += i;
    }
}

// Affichage des deux résultats dans la console
console.log(`--- Sommes entre 1 et 50 ---`);
console.log(`La somme des nombres PAIRS est : ${sommePairs}`);
console.log(`La somme des nombres IMPAIRS est : ${sommeImpairs}`);

// Vérification de la somme totale (bonus : 50 * 51 / 2 = 1275)
console.log(`(Vérification totale : ${sommePairs + sommeImpairs})`);