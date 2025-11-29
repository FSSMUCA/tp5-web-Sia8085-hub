/**
 * Calcule la somme des entiers de 1 à n en utilisant la récursion.
 * @param {number} n - L'entier maximum de la série.
 * @returns {number} - La somme (1 + 2 + ... + n).
 */
function sommeRecursive(n) {
    // CAS DE BASE (Condition d'arrêt)
    if (n === 0) {
        return 0;
    } 
    
    // ÉTAPE RÉCURSIVE
    // Retourne n + le résultat de la fonction pour l'entier précédent (n-1)
    return n + sommeRecursive(n - 1);
}