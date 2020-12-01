class MapaKML{
    constructor(){
        this.archivo="";
    }

    cargarKml(archivos){
        this.archivo=archivos[0];
        this.cargarMapa();
    }

    cargarMapa(){
        var mapa = new google.maps.Map(document.getElementById('map'), {
            zoom: 2,
            center: new google.maps.LatLng(-5.8448989,43.3605977),
            mapTypeId: google.maps.MapTypeId.HYBRID
          });
        
        var geoXml = new geoXML3.parser({map: mapa});
		
        if (this.archivo.name.endsWith(".kml")) {
            var reader = new FileReader();
            reader.readAsText(this.archivo);
            reader.onload = function (evento) {
				geoXml.parseKmlString(reader.result);       
            }
        }
    }

}

mapaEnKml=new MapaKML();
