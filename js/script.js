/* Lê o XML */
xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "xml/db_conteudos.xml", false);
xmlhttp.send();
xmlDoc = xmlhttp.responseXML;

let x = xmlDoc.getElementsByTagName("conteudos");
y =xmlDoc.getElementsByTagName("blog");
/* Exibe o conteúdo */

// INICIO PROBLEMATIZAÇÃO
function funcaoSubTitulo1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 class='titless' style='text-align: center; padding: 10%;'>" + x[i].getElementsByTagName("titulo1")[0].childNodes[0].nodeValue + "</h2>");}
	}

function funcaodesc1() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textgerals'>" + x[i].getElementsByTagName("desc1")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaodesc11() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textgerals'>" + x[i].getElementsByTagName("desc1.1")[0].childNodes[0].nodeValue + "</p>");
	}
} 

function funcaodesc12() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textgerals'>" + x[i].getElementsByTagName("desc1.2")[0].childNodes[0].nodeValue + "</p>");
	}
}

function funcaodesc13() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textgerals'>" + x[i].getElementsByTagName("desc1.3")[0].childNodes[0].nodeValue + "</p>");
	}
}
// FIM PROBLEMATIZAÇÃO 

// INICIO PROPOSTA DE PREVENÇÃO
function funcaoSubTitulo2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 class='titless' style='text-align: center; padding: 10%;'>" + x[i].getElementsByTagName("titulo2")[0].childNodes[0].nodeValue + "</h2>");
	}
}

function funcaodesc2() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textgerals' style='text-align: center; margin-top: 10%;'>" + x[i].getElementsByTagName("desc2")[0].childNodes[0].nodeValue + "</p>");
	}
}

// INICIO DO FUNCIONAMENTO
function funcaoSubTitulo3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 class='titless' style='text-align: center; padding: 10%;'>" + x[i].getElementsByTagName("titulo3")[0].childNodes[0].nodeValue + "</h2>");
	}
}

function funcaodesc3() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<p class='textgerals' style='text-align: center; margin-top: 10%;'>" + x[i].getElementsByTagName("desc3")[0].childNodes[0].nodeValue + "</p>");
	}
}

// INTEGRANTES

function funcaointegrantes() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 class='titless' style='text-align: center; padding: 10%;'>" + x[i].getElementsByTagName("titulo4")[0].childNodes[0].nodeValue + "</h2>");
	}
}

function funcname01() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4 class='card-title' class='textgerals'>" + x[i].getElementsByTagName("participante01")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcname02() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4 class='card-title' class='textgerals'>" + x[i].getElementsByTagName("participante02")[0].childNodes[0].nodeValue + "</h4>");
	}
}

function funcname03() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h4 class='card-title' class='textgerals'>" + x[i].getElementsByTagName("participante03")[0].childNodes[0].nodeValue + "</h4>");
	}
}
	


// BLOG

function funcaoSubTitulo5() {
	n = x.length - 1;
	for (var i = n; i >= 0; i--) {
		document.write("<h2 class='titless' style='text-align: center; padding: 10%;'>" + x[i].getElementsByTagName("titulo5")[0].childNodes[0].nodeValue + "</h2>");
	}
}

function infopequena() {
	for(i= y.length-1;i>=0;i--){
		resto = i % 2;
		if(resto == 1){
		document.write("<div class='row'><div class=class='col-md-6'><div class='col p-7 position-relative'  style='text-align:center; display: block; box-shadow: 2px 2px 10px rgb(2, 24, 27); border-radius: 1%;'> <div class='col p-4 d-flex flex-column position-static'><h5 class='titless' style='text-align: center; padding: 1%;'>Y TECS</h5><h4 class='mb-0'>" + y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h4> <div class='mb-1 text-muted'></div><p class='card-text mb-auto'>"+  y[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,100) + "...</p><a href='blog.html?codigo_blog=" + i + "' class='stretched-link'>Continuar...</a></div></div></div></div></br></br>");
		}
		else{
			document.write("<div class=class='col-md-6'><div class='col p-7 position-relative' style='text-align:center; display: block; box-shadow: 2px 2px 10px rgb(2, 24, 27); border-radius: 1%;'>  <div class='col p-4 d-flex flex-column position-static'><h5 class='titless' style='text-align: center; padding: 1%;'>Y TECS</h5><h4 class='mb-0'>" + y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h4> <div class='mb-1 text-muted'> </div><p class='card-text mb-auto'>"+  y[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue.substr(0,100) + "...</p><a href='blog.html?codigo_blog=" + i + "' class='stretched-link'>Continuar...</a></div></div></div></div></div>");
		}
	}
	}
	
	function infocompleta(){
		url = new URL(window.location.href)
		parametro = url.searchParams;
		i = parametro.get("codigo_blog"); 
	   var corpo = y[i].getElementsByTagName("corpo")[0].childNodes[0].nodeValue;
	   var corpopronto = corpo.replace("<br>")
		document.write("<h5 class='textgerals'>" + corpopronto + "</h5>")
	}
	
	
	function tituloinfo(){
		url = new URL(window.location.href)
		parametro = url.searchParams;
		i = parametro.get("codigo_blog"); 
		document.write("<h2 class='titless'>"+ y[i].getElementsByTagName("titulo")[0].childNodes[0].nodeValue + "</h2>")
	}
	
	
	function imginfo(){
		url = new URL(window.location.href)
		parametro = url.searchParams;
		i = parametro.get("codigo_blog"); 
		document.write("<center><img src='imgs/"+ y[i].getElementsByTagName("imgpostagem")[0].childNodes[0].nodeValue +"' width='50%'></center>")
	}
	
	