class Tiempo{
    constructor(ciudad){
        this.apikey = "916176fffd076aab310ca43cf9f17a55";
        this.ciudad = ciudad;
        this.codigoPais = "ES";
        this.unidades = "&units=metric";
        this.idioma = "&lang=es";
        this.url = "http://api.openweathermap.org/data/2.5/weather?q=" + this.ciudad + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
		this.tiempo = new TiempoMeteo(this.url);
    }

    verDatos(){
        var elemento=document.createElement("h2");
        $("#tiempoEnGranada").after(elemento);
        var elemento2 = document.createElement("h3"); 
        elemento2.innerHTML = "¡Todo correcto!";
        $("h2").after(elemento2);
        var elemento1=document.createElement("ul");
        $("h3").after(elemento1);
        this.tiempo.cargarDatos();
        document.getElementById("tiempoEnOviedo").disabled=true;
        document.getElementById("tiempoEnLlanes").disabled=true;
        document.getElementById("tiempoEnCudillero").disabled=true;
        document.getElementById("tiempoEnGranada").disabled=true;
    }
}

class TiempoMeteo{
    constructor(url){
		this.url = url;
	}
    cargarDatos(){
        $.ajax({
            dataType: "json",
            url: this.url,
            method: 'GET',
            success: function(data){
                    var datos = "<li>Ciudad: "+data.name+"</li>";
                        datos += "<li>País: " + data.sys.country + "</li>";
                        datos += "<li>Latitud: " + data.coord.lat + " grados</li>";
                        datos += "<li>Longitud: " + data.coord.lon + " grados</li>";
                        datos += "<li>Temperatura: " + data.main.temp + " grados Celsius</li>";
                        datos += "<li>Temperatura máxima: " + data.main.temp_max + " grados Celsius</li>";
                        datos += "<li>Temperatura mínima: " + data.main.temp_min + " grados Celsius</li>";
                        datos += "<li>Dirección del viento: " + data.wind.deg + " grados</li>";
                        datos += "<li>Presión: " + data.main.pressure + " milibares</li>";
                        datos += "<li>Humedad: " + data.main.humidity + " %</li>";
                        datos += "<li>Velocidad del viento: " + data.wind.speed + " metros/segundo</li>";
                        datos += "<li>Descripción: " + data.weather[0].description + "</li>";
                        datos += "<li>Amanece a las: " + new Date(data.sys.sunrise *1000).toLocaleTimeString() + "</li>";
                        datos += "<li>Oscurece a las: " + new Date(data.sys.sunset *1000).toLocaleTimeString() + "</li>";
                        datos += "<li>Visibilidad: " + data.visibility + " metros</li>";
                        datos += "<li>Nubosidad: " + data.clouds.all + " %</li></ul>";
                        datos += "<li>Hora de la medida: " + new Date(data.dt *1000).toLocaleTimeString() + "</li>";
                        datos += "<li>Fecha de la medida: " + new Date(data.dt *1000).toLocaleDateString() + "</li>";
                    
                    $("ul").html(datos);
                },
            error:function(){
                $("h3").html("Ha habido un problema, disculpe las molestias"); 
                },
            complete : function(xhr, status){
                $("h2").text("OpenWeatherMap");
            }
        });
    }
}
tiempoOviedo = new Tiempo("Oviedo");
tiempoLlanes = new Tiempo("Llanes");
tiempoCudillero = new Tiempo("Cudillero");
tiempoGranada = new Tiempo("Granada");