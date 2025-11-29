
let min = Number(prompt("Entrez le nombre minimal :"));
let max = Number(prompt("Entrez le nombre maximal :"));

console.log(`--- Vérification des multiples entre ${min} et ${max} ---`);

for (let i = min; i <= max; i++) {
    
    let output = i; 
    
    if (i % 3 === 0 && i % 5 === 0) {
        output = "Five&Three";
    } 
    else if (i % 3 === 0) {
        output = "Three";
    } 
    else if (i % 5 === 0) {
        output = "Five";
    }
    
    console.log(output);
}