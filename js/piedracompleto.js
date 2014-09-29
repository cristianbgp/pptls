function aleatorio(minimo, maximo)
{
	var numero = Math.floor( Math.random() * (maximo - minimo + 1) + minimo );
	return numero;
}

var piedra = 0;
var papel = 1;
var tijera = 2;
var lagarto = 3;
var spock = 4;

var opciones = ["Piedra", "Papel", "Tijera","Lagarto","Spock"];

var opcionUsuario;
//var opcionMaquina = aleatorio(0,4);

//opcionUsuario = prompt("¿Qué eliges?\nPiedra: 0\nPapel: 1\nTijera: 2\nLagarto: 3\nSpock: 4", 0)

//alert("Elegiste " + opciones[opcionUsuario]);
//alert("Javascript eligió " + opciones[opcionMaquina]);

$("#piedra").on("click", elegistePiedra);

function elegistePiedra(){
	var opcionMaquina = aleatorio(0,4);

	$(".opcion_elegida").empty();
	$(".opcion_sheldon").empty();
	$(".mensaje").empty();

	$(".opcion_elegida").append("<p>Elegiste piedra</p><img src='img/piedra.png'alt='Piedra'>");

	if(opcionMaquina == 0)
	{
		$(".opcion_sheldon").append("<p>Elegió piedra</p><img src='img/piedra.png'alt='Piedra'>");
		$(".mensaje").append("<p>Empate</p>");
	}
	else if(opcionMaquina == 1)
	{
		$(".opcion_sheldon").append("<p>Elegiste papel</p><br><img src='img/papel.png'alt='Papel'>");
		$(".mensaje").append("<p>Perdiste :(</p>");
	}
	else if(opcionMaquina == 2)
	{
		$(".opcion_sheldon").append("<p>Elegiste tijera</p><br><img src='img/tijera.png'alt='Tijera'>");
		$(".mensaje").append("<p>Ganaste</p>");
	}
	else if(opcionMaquina == 3)
	{
		$(".opcion_sheldon").append("<p>Elegiste lagarto</p><br><img src='img/lagarto.png'alt='Lagarto'>");
		$(".mensaje").append("<p>Ganaste</p>");
	}
	else if(opcionMaquina == 4)
	{
		$(".opcion_sheldon").append("<p>Elegiste spock</p><br><img src='img/spock.png'alt='Spock'>");
		$(".mensaje").append("<p>Perdiste :(</p>");
	}
}

$("#papel").on("click", elegistePapel);

function elegistePapel(){
	var opcionMaquina = aleatorio(0,4);

	$(".opcion_elegida").empty();
	$(".opcion_sheldon").empty();
	$(".mensaje").empty();

	$(".opcion_elegida").append("<p>Elegiste papel</p><br><img src='img/papel.png'alt='Papel'>");

	if(opcionMaquina == 0)
	{
		$(".opcion_sheldon").append("<p>Elegió piedra</p><img src='img/piedra.png'alt='Piedra'>");
		$(".mensaje").append("<p>Ganaste</p>");
	}
	else if(opcionMaquina == 1)
	{
		$(".opcion_sheldon").append("<p>Elegiste papel</p><br><img src='img/papel.png'alt='Papel'>");
		$(".mensaje").append("<p>Empate</p>");
	}
	else if(opcionMaquina == 2)
	{
		$(".opcion_sheldon").append("<p>Elegiste tijera</p><br><img src='img/tijera.png'alt='Tijera'>");
		$(".mensaje").append("<p>Perdiste :(</p>");
	}
	else if(opcionMaquina == 3)
	{
		$(".opcion_sheldon").append("<p>Elegiste lagarto</p><br><img src='img/lagarto.png'alt='Lagarto'>");
		$(".mensaje").append("<p>Perdiste :(</p>");
	}
	else if(opcionMaquina == 4)
	{
		$(".opcion_sheldon").append("<p>Elegiste spock</p><br><img src='img/spock.png'alt='Spock'>");
		$(".mensaje").append("<p>Ganaste</p>");
	}
}

$("#tijera").on("click", elegisteTijera);

function elegisteTijera(){
	var opcionMaquina = aleatorio(0,4);

	$(".opcion_elegida").empty();
	$(".opcion_sheldon").empty();
	$(".mensaje").empty();

	$(".opcion_elegida").append("<p>Elegiste tijera</p><br><img src='img/tijera.png'alt='Tijera'>");

	if(opcionMaquina == 0)
	{
		$(".opcion_sheldon").append("<p>Elegió piedra</p><img src='img/piedra.png'alt='Piedra'>");
		$(".mensaje").append("<p>Perdiste :(</p>");
	}
	else if(opcionMaquina == 1)
	{
		$(".opcion_sheldon").append("<p>Elegiste papel</p><br><img src='img/papel.png'alt='Papel'>");
		$(".mensaje").append("<p>Ganaste</p>");
	}
	else if(opcionMaquina == 2)
	{
		$(".opcion_sheldon").append("<p>Elegiste tijera</p><br><img src='img/tijera.png'alt='Tijera'>");
		$(".mensaje").append("<p>Empate</p>");
	}
	else if(opcionMaquina == 3)
	{
		$(".opcion_sheldon").append("<p>Elegiste lagarto</p><br><img src='img/lagarto.png'alt='Lagarto'>");
		$(".mensaje").append("<p>Ganaste</p>");
	}
	else if(opcionMaquina == 4)
	{
		$(".opcion_sheldon").append("<p>Elegiste spock</p><br><img src='img/spock.png'alt='Spock'>");
		$(".mensaje").append("<p>Perdiste :(</p>");
	}
}

$("#lagarto").on("click", elegisteLagarto);

function elegisteLagarto(){
	var opcionMaquina = aleatorio(0,4);

	$(".opcion_elegida").empty();
	$(".opcion_sheldon").empty();
	$(".mensaje").empty();

	$(".opcion_elegida").append("<p>Elegiste lagarto</p><br><img src='img/lagarto.png'alt='Lagarto'>");

	if(opcionMaquina == 0)
	{
		$(".opcion_sheldon").append("<p>Elegió piedra</p><img src='img/piedra.png'alt='Piedra'>");
		$(".mensaje").append("<p>Perdiste :(</p>");
	}
	else if(opcionMaquina == 1)
	{
		$(".opcion_sheldon").append("<p>Elegiste papel</p><br><img src='img/papel.png'alt='Papel'>");
		$(".mensaje").append("<p>Ganaste</p>");
	}
	else if(opcionMaquina == 2)
	{
		$(".opcion_sheldon").append("<p>Elegiste tijera</p><br><img src='img/tijera.png'alt='Tijera'>");
		$(".mensaje").append("<p>Perdiste</p>");
	}
	else if(opcionMaquina == 3)
	{
		$(".opcion_sheldon").append("<p>Elegiste lagarto</p><br><img src='img/lagarto.png'alt='Lagarto'>");
		$(".mensaje").append("<p>Empate</p>");
	}
	else if(opcionMaquina == 4)
	{
		$(".opcion_sheldon").append("<p>Elegiste spock</p><br><img src='img/spock.png'alt='Spock'>");
		$(".mensaje").append("<p>Ganaste</p>");
	}
}

$("#spock").on("click", elegisteSpock);

function elegisteSpock(){
	var opcionMaquina = aleatorio(0,4);

	$(".opcion_elegida").empty();
	$(".opcion_sheldon").empty();
	$(".mensaje").empty();

	$(".opcion_elegida").append("<p>Elegiste spock</p><br><img src='img/spock.png'alt='Spock'>");

	if(opcionMaquina == 0)
	{
		$(".opcion_sheldon").append("<p>Elegió piedra</p><img src='img/piedra.png'alt='Piedra'>");
		$(".mensaje").append("<p>Ganaste</p>");
	}
	else if(opcionMaquina == 1)
	{
		$(".opcion_sheldon").append("<p>Elegiste papel</p><br><img src='img/papel.png'alt='Papel'>");
		$(".mensaje").append("<p>Perdiste :(</p>");
	}
	else if(opcionMaquina == 2)
	{
		$(".opcion_sheldon").append("<p>Elegiste tijera</p><br><img src='img/tijera.png'alt='Tijera'>");
		$(".mensaje").append("<p>Ganaste</p>");
	}
	else if(opcionMaquina == 3)
	{
		$(".opcion_sheldon").append("<p>Elegiste lagarto</p><br><img src='img/lagarto.png'alt='Lagarto'>");
		$(".mensaje").append("<p>Perdiste :(</p>");
	}
	else if(opcionMaquina == 4)
	{
		$(".opcion_sheldon").append("<p>Elegiste spock</p><br><img src='img/spock.png'alt='Spock'>");
		$(".mensaje").append("<p>Empate</p>");
	}
}