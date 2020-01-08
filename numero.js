var x = 456e5; //45600000
var y = 123e-6;
console.log(x);
console.log(y);

var z1 = 999999999999999;
console.log(z1);
var z2 = 9999999999999999;
console.log(z2);

var w1 = 0.9999999999999999;
console.log(w1);
var w2 = 0.99999999999999999;
console.log(w2);

var a = 0xFFF;
console.log(a);

var b = 07777;
console.log(b);
console.log(b.toString(16));
console.log(b.toString(8));
console.log(b.toString(2));

console.log(x.toExponential());
console.log(x.toExponential(4));

console.log((3.357).toFixed(2));
console.log((3.357).toPrecision(2));