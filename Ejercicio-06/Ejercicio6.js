"use strict"
class CalculadoraBasica {
	constructor () {
		this.consola="";
		this.memoria="0";
	}
	  
    numero9(){
        this.consola+="0.12013 €/kWh";
        this.pintar();
    }
	
	 numero8(){
        this.consola+="0.022 €/Lh";
        this.pintar();
    }
	
	numero7(){
        this.consola+="1.0752 €/h";
        this.pintar();
    }
	
	numero6(){
        this.consola+="1.0752 €/h";
        this.pintar();
    }
	
	pintar(){
		var p = document.getElementById("consola");
        p.value = this.consola;
        //document.getElementById("consola").value = this.consola;
    }
		
	borrarTodo(){
		this.consola="";
		this.pintar();
	}
 

}	
	class CalculadoraCientifica extends CalculadoraBasica {
		
		constructor() {
			super();
		}
	
	
	
}
var calculadora = new CalculadoraCientifica();