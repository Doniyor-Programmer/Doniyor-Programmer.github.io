let a = +prompt("Birinchi natural sonni kiriting:", ""),
    b = +prompt("Ikkinchi natural sonni kiriting:", "");

function ekub(a, b) {
    while (a !== 0 && b !== 0) {
        if (a > b) {
            a %= b;
        } else {
            b %= a;
        }
    }
    let ekubQ = a + b;
    return ekubQ;
}

let res = ekub(a, b);
alert(`Bu sonlar EKUBi ${res} ga teng.`);