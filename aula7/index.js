let var1 = "A";
let var2 = "B";
let var3 = "C";

const varFixa = var1;

var1 = var2; //B
var2 = var3; //C
var3 = varFixa; //A

console.log(var1, var2, var3);
