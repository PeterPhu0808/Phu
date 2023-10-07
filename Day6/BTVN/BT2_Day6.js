let x = 1;
let y = 3;
let z = 4;
var max;

if (x >= y) {
    max = x;
    if (z >= max) {
        max = z;
    }
}
else{
    max = y
    if (z >= max) {
        max = z;
    }
}

console.log(max);