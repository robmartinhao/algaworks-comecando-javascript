var obj = {
	nome: "John",
	sobrenome: "Snow",
	idade: 16,
	apresentar: apresentacao
};

function apresentacao() {
	console.log("Olá, eu sou " + this.nome + ' ' + this.sobrenome + '.');
}

console.log(obj.nome);

obj.apresentar();