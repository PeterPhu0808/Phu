var x = 10;
if (x < 0) {
    document.write("x là số âm");    
}
else if (x == 0) {
    document.write("x = 0");    
}
else {
    if (Number.isInteger(x) == true) {
        document.write("x là số nguyên dương");
    }
    else {
        document.write("x là số thập phân dương");
    }
}