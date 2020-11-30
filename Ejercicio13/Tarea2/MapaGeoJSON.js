class MapaGeoJSON{
    constructor(){
        this.archivo="";
    }

    cargarGeoJSON(archivos){
        this.archivo=archivos[0];
        this.cargarMapa();
        
    }

    cargarMapa() {
        var mapa;
        mapa = new google.maps.Map(document.getElementById('map'), {
            zoom: 4,
            center: new google.maps.LatLng(40.4636688,-3.7492199),
            mapTypeId: 'terrain'
          });
		
        if (this.archivo.name.endsWith(".geojson")) {
            var reader = new FileReader();
            reader.readAsText(this.archivo);
            reader.onload = function (evento) {
				var geojson = JSON.parse(reader.result);
				mapa.data.addGeoJson(geojson);
            }
        } 
    }
}

mapaEnGeoJSON=new MapaGeoJSON();