dizerOi("Ned"); //Hoisting
function dizerOi(nome) {
	console.log("Olá " + nome);
}
dizerOi("John");

var dizerOla = function (nome) {
	console.log("Olá " + nome);
}
dizerOla("Bran");

var dizerTchau = new Function("nome", "console.log('Tchau, ' + nome);");
dizerTchau("Rickon");

