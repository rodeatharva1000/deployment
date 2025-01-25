console.log("hello world !")

var a = 10;
var b = 10;
var c = a + b;

console.log("add", c);

c = a - b;
console.log("sub", c);

c = a * b;
console.log("mul", c);

c = a / b;
console.log("div", c);

console.log("kms to miless : ");
let km = 10;
let miles = km * 0.621371
console.log(km, " ", miles);

console.log("degrees to farenheit : ");
let deg = 10;
let far = ((deg) * 9/5) + 32
console.log(deg, " ", far);

console.log("kg to pound : ");
let kg = 10;
let pound = kg * 2.2
console.log(kg, " ", pound);


let weight_kg = 70;
let height_m = 1.84;

let val = weight_kg/(height_m**2);
console.log("val ", val);

if(val < 18.5){
    console.log("underweight");
}
else if(val < 24.9){
    console.log("normal weighht");
}
else if(val < 29.9){
    console.log("overweight");
}
else{
    console.log("obese");
}


console.log("");
let bill = 100;
amount = 0

bill = bill-100;
if(bill > 0 && bill <= 100){
    amount = amount+bill*5;
}
else if(bill > 100){
    amount = amount+ 5*100;
    bill = bill-100;
    amount += bill*10;
}

console.log("bill amount ",amount);


