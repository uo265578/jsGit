"use strict";
class Tiempo {
    constructor(ciudad){
        this.apikey = "53d3a5119ea5873177cb6c320d05408a";
        this.ciudad = ciudad;
        this.tipo = "&mode=xml";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
        this.correcto =  "¡Todo correcto!"
		this.dTiempo = new TiempoMeteo(this.url);
    }
    verDatos(tipoElemento, texto, insertarAntesDe){
        var elemento = document.createElement(tipoElemento); 
        elemento.innerHTML = texto;
        $(insertarAntesDe).before(elemento);
    }
    verXML(){
        this.verDatos("h2","Datos en XML"); 
        this.verDatos("h3",this.correcto,"footer");
        this.verDatos("h4","XML","footer"); 
        this.verDatos("h5","","footer");
        this.verDatos("h4","Datos","footer");
        this.verDatos("p","","footer");
        this.dTiempo.cargarDatos();
        $("button").attr("disabled","disabled");
    }
}

class TiempoMeteo {
	constructor(url) {
		this.url = url;
	}
cargarDatos(){
        $.ajax({
            dataType: "xml",
            url: this.url,
            method: 'GET',
            success: function(datos){
                    $("h5").text((new XMLSerializer()).serializeToString(datos));
                
                    var nDatos = $('*',datos).length;
					var icono = $('weather',datos).attr("icon");
                    var ciudad = $('city',datos).attr("name");
                    var pais = $('country',datos).text();
                    var longitud = $('coord',datos).attr("lon");
                    var latitud = $('coord',datos).attr("lat");
                    var temperatura = $('temperature',datos).attr("value");
                    var temperaturaMin = $('temperature',datos).attr("min");
                    var temperaturaMax = $('temperature',datos).attr("max");
                    var temperaturaUnidades = $('temperature',datos).attr("unit");
                    var direccionViento = $('direction',datos).attr("value");
                    var amanecer = $('sun',datos).attr("rise");
                    var minutosZonaHoraria = new Date().getTimezoneOffset();
                    var amanecerMiliSeg = Date.parse(amanecer);
                        amanecerMiliSeg -= minutosZonaHoraria * 60 * 1000;
                    var amanecerLocal = (new Date(amanecerMiliSeg)).toLocaleTimeString("es-ES");
                    var oscurecer = $('sun',datos).attr("set");          
                    var oscurecerMiliSeg = Date.parse(oscurecer);
                        oscurecerMiliSeg  -= minutosZonaHoraria * 60 * 1000;
                    var oscurecerLocal = (new Date(oscurecerMiliSeg)).toLocaleTimeString("es-ES");
                    var humedad = $('humidity',datos).attr("value");
                    var humedadUnidades = $('humidity',datos).attr("unit");
                    var presion = $('pressure',datos).attr("value");
                    var presionUnidades = $('pressure',datos).attr("unit");
                    var velocidadViento = $('speed',datos).attr("value");
                    var nombreViento = $('speed',datos).attr("name");
                    var codigoViento = $('direction',datos).attr("code");
                    var nombreDireccionViento = $('direction',datos).attr("name");
                    var nubosidad = $('clouds',datos).attr("value");
                    var nombreNubosidad = $('clouds',datos).attr("name");
                    var visibilidad = $('visibility',datos).attr("value");
                    var precipitacionValue = $('precipitation',datos).attr("value");
                    var precipitacionMode = $('precipitation',datos).attr("mode");
                    var descripcion = $('weather',datos).attr("value");
                    var horaMedida = $('lastupdate',datos).attr("value");
                    var horaMedidaMiliSeg1970 = Date.parse(horaMedida);
                        horaMedidaMiliSeg1970 -= minutosZonaHoraria * 60 * 1000;
                    var horaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleTimeString("es-ES");
                    var fechaMedidaLocal = (new Date(horaMedidaMiliSeg1970)).toLocaleDateString("es-ES");
                    
                    var cadena =  "<ul><li>Número de elementos del XML: " + nDatos + "</li>";
                        cadena += "<ul><li>Ciudad: " + ciudad + 
						"<img src=http://openweathermap.org/img/w/" + icono + ".png></li>";
                        cadena += "<li>Longitud: " + longitud + " grados</li>";
                        cadena += "<li>Latitud: " + latitud + " grados</li>";
                        cadena += "<li>País: " + pais + "</li>";
                        cadena += "<li>Amanece a las: " + amanecerLocal + "</li>";
                        cadena += "<li>Oscurece a las: " + oscurecerLocal + "</li>";
                        cadena += "<li>Temperatura: " + temperatura + " grados Celsius</li>";
                        cadena += "<li>Temperatura mínima: " + temperaturaMin + " grados Celsius</li>";
                        cadena += "<li>Temperatura máxima: " + temperaturaMax + " grados Celsius</li>";
                        cadena += "<li>Temperatura (unidades): " + temperaturaUnidades + "</li>";
                        cadena += "<li>Humedad: " + humedad + " " + humedadUnidades + "</li>";
                        cadena += "<li>Presión: " + presion + " " + presionUnidades + "</li>";
                        cadena += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>";
                        cadena += "<li>Nombre del viento: " + nombreViento + "</li>";
                        cadena += "<li>Dirección del viento: " + direccionViento + " grados</li>";
                        cadena += "<li>Código del viento: " + codigoViento + "</li>";
                        cadena += "<li>Nombre del viento: " + nombreDireccionViento + "</li>";
                        cadena += "<li>Nubosidad: " + nubosidad + "</li>";
                        cadena += "<li>Nombre nubosidad: " + nombreNubosidad + "</li>";
                        cadena += "<li>Visibilidad: " + visibilidad + " metros</li>";
                        cadena += "<li>Precipitación valor: " + precipitacionValue + "</li>";
                        cadena += "<li>Precipitación modo: " + precipitacionMode + "</li>";
                        cadena += "<li>Descripción: " + descripcion + "</li>";
                        cadena += "<li>Hora de la medida: " + horaMedidaLocal + "</li>";
                        cadena += "<li>Fecha de la medida: " + fechaMedidaLocal + "</li>";
                    
                    $("p").html(cadena);                  
                },
            error:function(){
                $("h3").html("¡Tenemos problemas! No puedo obtener XML de <a href='http://openweathermap.org'>OpenWeatherMap</a>"); 
                $("h4").remove();
                $("h5").remove();
                $("p").remove();
                }
        });
    }
}

var tiempoOviedo = new Tiempo("Oviedo");
var tiempoLlanes = new Tiempo("Llanes");
var tiempoCudillero = new Tiempo("Cudillero");
var tiempoGranada = new Tiempo("Granada");
