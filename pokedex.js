var Pokemon = function (opciones) {
	if(this.init){
		this.init(opciones);
	}
}

Pokemon.prototype = {

	init : function(opciones){
		this.nombre = opciones.nombre;
		this.vida = opciones.vida;
		this.ataque = opciones.ataque;
		this. imagen = opciones.imagen;
	},

	mostrar : function () {
		nPoke.textContent = this.nombre;
		vPoke.textContent = "Vida: "+this.vida;
		aPoke.textContent = "AT: "+this.ataque;
		pokemon.src = this.imagen;
	}

}

var pikachu = new Pokemon({
	nombre : "Pikachu",
	vida : 100,
	ataque : 55,
	imagen : "./img/pikachu.jpg"
});

var mewtwo = new Pokemon({
	nombre : "Mewtwo",
	vida : 100,
	ataque : 60,
	imagen : "./img/mewtwo.jpg"
});

var bulbasaur = new Pokemon({
	nombre : "Bulbasaur",
	vida : 90,
	ataque : 45,
	imagen : "./img/bulbasaur.jpg"
});

var feraligatr  = new Pokemon({
	nombre : "Feraligatr",
	vida : 95,
	ataque : 50,
	imagen : "./img/feraligatr.jpg"
});

var meganium = new Pokemon({
	nombre : "Meganium",
	vida : 80,
	ataque : 40,
	imagen : "./img/meganium.jpg"
});

var typhlosion = new Pokemon({
	nombre : "Typhlosion",
	vida : 50,
	ataque : 30,
	imagen : "./img/typhlosion.jpg"
});

var pokemones = [pikachu, mewtwo, bulbasaur, feraligatr, meganium, typhlosion];

function inicializar(poke) {
	for (var i = 0; i < pokemones.length; i++) {
		if(poke == pokemones[i].nombre){
			pokemones[i].mostrar();
			break;
		}
	};
}