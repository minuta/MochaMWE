/**
 * Returns x raised to the n-th power.
 *
 * @param {number} x The number to raise.
 * @param {number} n The power, must be a natural number.
 * @return {number} x raised to the n-th power.
 */ 
function pow(x, n) {

    if (n < 0) return NaN;
    if (Math.round(n) != n) return NaN;

    if (x==0) {
        return 1;
    }
    let result = x;
    for(let i=1; i<n; i++) {
        result *=x;
    }
    return result;
}