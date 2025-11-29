
function sommeRecursive(n) {
    if (n === 0) {
        return 0;
    } 
    return n + sommeRecursive(n - 1);
}