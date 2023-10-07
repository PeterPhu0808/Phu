let a = 1;
let b = 4;
let c = 2;
var x1;
var x2;

if (a == 0) {
    if (b == 0) {
        if (c == 0){
            document.write("PT vô số nghiệm");
        }
        else {
            document.write("PT vô nghiệm");
        }
    }
    else {
        x1 = -c/b;
        document.write("PT có nghiệm: x = ", x1);
    }
}
else {
    var delta = b**2 - 4*a*c;

    if (delta < 0) {
        document.write("PT vô nghiệm");
    }
    else if (delta == 0) {
        x1 = -b/(2*a);
        document.write("PT có nghiệm kép: x = ", x1);
    }
    else {
        x1 = (-b + Math.sqrt(delta)) / 2*a;
        x2 = (-b - Math.sqrt(delta)) / 2*a;
        document.write("Phương trình có 2 nghiệm: ")
        document.write("x1 = ", x1);
        document.write("; ");
        document.write("x2 = ", x2);
    }
}