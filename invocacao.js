function dizerOi(nome){
	console.log("Oi, " + nome);
}
dizerOi("Arya");

dizerOi.call({}, "Arya");

dizerOi.apply({}, ["Arya"]);



