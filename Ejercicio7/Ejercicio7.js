"use restrictive"
class Ejercicio7{
    constructor() {

    }

    mostrarH1() {
        $("h1").show();
    }
    ocultarH1() {       
        $("h1").hide();
    }
    invertirNombre() {
        $("h2").text("Salles Fidalgo Santiago");
    }
    ordenCorrecto() {
         $("h2").text("Santiago Fidalgo Salles  ");
    }
    añadirPalabra() {
        $("#p1").append("Elemento añadido");
    }
    eliminarElemento() {
        $("#p1").remove();
    }
    mostrarPadres() {
        $(document).find('*').each((i,elemento)=>{
            let elementoActual=$(elemento)
            let padre=elementoActual.parent()
            $('#padres').append($('<li>',{text: `Tipo de elemento: ${elementoActual.prop('nodeName')} Padre: ${padre.prop('nodeName')}`}))
        })
    }
    calcularTotal() {
        var tablaNotas=document.getElementById("tablaNotas");
        var total=0;
        for (var i=0;i<tablaNotas.rows.length;i++){
            var cellsOfRow = tablaNotas.rows[i].getElementsByTagName('td');
            for (var j=0;j<cellsOfRow.length;j++){
                var valor=cellsOfRow[j].innerHTML;
                var entero=parseInt(valor);
                total+=entero;
            }
        }

        $("#p2").text("Suma total de la tabla: "+total);
       
    }

}
var metodos=new Ejercicio7();