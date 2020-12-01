"use strict";
class Ejericio14 {
	constructor() {}
	
	cargarCanvas() {

            var canvas = document.getElementById('canvas');
            var canvas2 = canvas.getContext('2d');
           
            
            canvas2.fillStyle = "rgba(0, 230, 130, 1)";
            canvas2.fillRect(30, 30, 75, 70);
            canvas2.fillStyle = "rgba(255, 0, 0, 1)";
            canvas2.fillRect(70, 50, 55, 70);
            canvas2.fillStyle = "rgba(220, 0, 255, 1)";
            canvas2.fillRect(90, 40, 75, 50);
	}
	
	cargarSvg(files) {
		var archivo = files[0];
		if (archivo.name.endsWith(".svg")) {
            var lector = new FileReader();
            lector.readAsText(archivo);
            lector.onload = function (evento) {
				document.getElementById("svgFile").innerHTML = lector.result;
            }
        }
		else {
			document.getElementById("svgFile").innerHTML = "<p>El fichero no es de tipo .svg</p>";
		}
	}
}

var ejercicio = new Ejericio14();