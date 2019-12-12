function schimbaCuloare() {
	var x = document.getElementById("text");
	var y = document.getElementById("text");
	x.style.color = '#bebece';
	y.style.color = '#2b2b3d';
}

function culoareInitiala() {
	var x = document.getElementById("text");
	var y = document.getElementById("text");
	x.style.color = '#2b2b3d';
	y.style.color = '#bebece';
}

function schimbaNume() {
	var x = document.getElementById("nume");
	var y = document.getElementById("nume");
	x.innerHTML = "Rujoi Răzvan";
	y.innerHTML = "Răzvan Rujoi";
}

function revenireNume() {
	var x = document.getElementById("nume");
	var y = document.getElementById("nume");
	x.innerHTML = "Răzvan Rujoi";
	y.innerHTML = "Rujoi Răzvan";
}

function ModificareCursor() { //text 'despre mine'
  document.getElementById("despre").style.cursor = "none";
}

function modificareCursor() { //poza profil
  document.getElementById("poza").style.cursor = "none";
}