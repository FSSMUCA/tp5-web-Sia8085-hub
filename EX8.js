/**
 * Fonction qui calcule le total final après application d'une remise en pourcentage.
 * @param {number} total - Le montant initial (HT).
 * @param {number} remise - Le pourcentage de remise (ex: 10 pour 10%).
 * @returns {number} - Le total final après remise.
 */
function totalAvecRemise(total, remise) {
    // Calcul du montant de la remise : total * (remise / 100)
    const montantRemise = total * (remise / 100);
    
    // Calcul du total final
    const totalFinal = total - montantRemise;
    
    // Retourner le résultat
    return totalFinal;
    
    /* On peut aussi le faire en une seule ligne :
    return total - (total * remise / 100);
    */
}

// --- Interaction Utilisateur ---

// 1. Demander le total HT
let totalHTInput = prompt("Veuillez entrer le total HT de la commande :");
const total = Number(totalHTInput);

// 2. Demander la remise en pourcentage
let remiseInput = prompt("Veuillez entrer le pourcentage de remise à appliquer (ex: 15) :");
const remise = Number(remiseInput);

// Vérification de la validité des entrées (bonne pratique)
if (isNaN(total) || isNaN(remise)) {
    console.log("Erreur : Veuillez entrer des valeurs numériques valides pour le total et la remise.");
} else {
    // 3. Appeler la fonction et stocker le résultat
    const resultatFinal = totalAvecRemise(total, remise);

    // 4. Afficher le total final
    console.log(`--- Détails de la transaction ---`);
    console.log(`Total initial (HT) : ${total.toFixed(2)} €`);
    console.log(`Remise appliquée : ${remise}%`);
    console.log(`Montant de la réduction : ${(total * remise / 100).toFixed(2)} €`);
    console.log(`Total final à payer : ${resultatFinal.toFixed(2)} €`); 
    // Utilisation de .toFixed(2) pour afficher deux décimales (format monétaire)
}