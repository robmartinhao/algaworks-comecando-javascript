var array = "Ned Jon Robb Bran Rickson".split(' ');
console.log(array);

console.log(array.toString());
console.log(array.join(' | '));

array.push("Sansa");
console.log(array);

array.unshift("1_Sansa");
console.log(array);

var elemento = array.pop();
console.log(array);
console.log(elemento);

elemento = array.shift();
console.log(array);
console.log(elemento);


array[1] = "Jon Snow";
console.log(array);

var slice = array.slice(3);
console.log(slice);

var slice = array.slice(3, 4);
console.log(slice);

var splice = array.splice(1, 2, "Arya", "Sansa");
console.log(splice);
console.log(array);

array.splice(3,1);
console.log(array);

array = array.concat(splice);
console.log(array);

array = array.concat(splice, slice);
console.log(array);
