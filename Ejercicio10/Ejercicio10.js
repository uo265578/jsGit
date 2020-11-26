"use strict";
class CambioMoneda {
    constructor(moneda){
        this.apikey = "c7b7ee5dc0e0b0eaf20d59f00664d444";
        this.moneda = moneda;
        this.url = "http://data.fixer.io/api/latest?access_key=" + this.apikey + "&symbols=" + this.moneda + "&format=1";
        this.mensaje = "¡Todo correcto!"
		this.cambio = new Cambio(this.moneda,this.url);
    }
    crearElemento(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
    verDatos(){
        this.crearElemento("h2","Datos en JSON desde <a href='https://fixer.io'>Fixer.io</a>","footer"); 
        this.crearElemento("h3",this.mensaje,"footer");
        this.crearElemento("h4","JSON","footer");     
        this.crearElemento("pre","","footer");
        this.crearElemento("h4","Datos","footer");
        this.crearElemento("p","","footer");
        this.cambio.cargarDatos();
        $("button").attr("disabled","disabled");
    }
}

class Cambio {
	constructor(moneda,url) {
		this.url = url;
		this.moneda = moneda;
	}
    cargarDatos(){
		var cambioMoneda = this.moneda;
		$.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(data){
                    $("pre").text(JSON.stringify(data, null, 2));
                    
                    var cadena = "<ul><li>Moneda origen: " 	+ data.base + "</li>";
                        cadena += "<li>Moneda destino: " + cambioMoneda + "</li>";
                        cadena += 	"<li>Fecha actualización: " + data.date + "</li>";
                        cadena += 	"<li>Cambio de moneda = " + data.rates[cambioMoneda] + "</li></ul>";
                    
                    $("p").html(cadena);
                },
            error:function(){
                $("h3").html("Ha habido un problema, disculpe las molestias"); 
                $("h4").remove();
                $("pre").remove();
                $("p").remove();
                }
        });
    }
}

var cambioMetical = new CambioMoneda("MZN");
var cambioRublos = new CambioMoneda("RUB");
var cambioLibras = new CambioMoneda("GBP");
var cambioDollar = new CambioMoneda("USD");
var cambioDirham = new CambioMoneda("AED");