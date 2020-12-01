"use strict";
class Procesador {
	constructor() {}
	
	procesarArchivos(files) {
		this.soporteApiFile();
		var nBytes = 0;

		for(var i = 0; i < files.length; i++) {
			var file = files[i];

			this.nuevoElemento("p","--> Archivo cargado: " + "footer"); 
			this.propiedadesArchivo(file);
			nBytes += file.size;
			
			var tipoTexto = /text.*/;
			var tipoJson = /application.json/;
			if (file.type.match(tipoTexto) || file.type.match(tipoJson))
				this.contenidoArchivo(file);
		}
		document.getElementById("numero").innerHTML = files.length;
		document.getElementById("tamaño").innerHTML = nBytes + " bytes";
	}


	propiedadesArchivo(file) {
		this.nuevoElemento("p","Nombre del archivo: " + file.name,"footer"); 
		this.nuevoElemento("p","Tipo del archivo: " + file.type,"footer"); 
        this.nuevoElemento("p","Tamaño del archivo: " + file.size + " bytes","footer"); 
		this.nuevoElemento("p","Fecha última modificación: " + file.lastModifiedDate,"footer"); 		
	}

    
	contenidoArchivo(file) {
		this.nuevoElemento("p","Contenido del archivo:","footer");
		var lector = new FileReader();
		lector.onload = function (evento) {
			var elemento = document.createElement("pre"); 
			elemento.innerHTML = lector.result;
			$("footer").before(elemento);
		}
		lector.readAsText(file);
	}


	soporteApiFile() {
		if (window.File && window.FileReader && window.FileList && window.Blob)
			 document.getElementById("soporte").innerHTML = "<p>Este navegador soporta el API File </p>";
		else document.getElementById("soporte").innerHTML = "<p>Este navegador no soporta el API File</p>";
	}


	nuevoElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
}

var procesador = new Procesador();
