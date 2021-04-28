let a = 10,
    b = 3;
// a = 3, b =10
let c = a;
a = b;
b = c;
console.log(a, b);