

function pow(x, n) {
    if (x==0) {
        return 1;
    }
    let result = x;
    for(let i=1; i<n; i++) {
        result *=x;
    }
    return result;
}