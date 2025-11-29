/**
 * Calcule la factorielle d'un nombre 'n' de manière récursive.
 * @param {number} n - Le nombre dont on veut calculer la factorielle.
 * @returns {number} - La factorielle de n.
 */
function factorielle(n) {
    // 1. CAS DE BASE (Condition d'arrêt)
    // C'est la condition qui empêche la boucle infinie.
    if (n === 0 || n === 1) {
        return 1;
    } 
    
    // 2. ÉTAPE RÉCURSIVE
    // La fonction s'appelle elle-même avec un argument réduit (n - 1).
    return n * factorielle(n - 1);
}

// --- Exemple demandé ---
const n = 5;
const resultat = factorielle(n);

console.log(`La factorielle de ${n} est : ${resultat}`);
// Output: La factorielle de 5 est : 120