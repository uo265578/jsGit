"use strict"
class CalculadoraBasica {
	constructor () {
		this.consola="";
		this.memoria="0";
	}
	  
    numero9(){
        this.consola+=9;
        this.pintar();
    }
	
	 numero8(){
        this.consola+=8;
        this.pintar();
    }
	
	numero7(){
        this.consola+=7;
        this.pintar();
    }
	
	numero6(){
        this.consola+=6;
        this.pintar();
    }
	
	numero5(){
        this.consola+=5;
        this.pintar();
    }
	
	numero4(){
        this.consola+=4;
        this.pintar();
    }
	
	numero3(){
        this.consola+=3;
        this.pintar();
    }
	
	numero2(){
        this.consola+=2;
        this.pintar();
    }
	
	numero1(){
        this.consola+=1;
        this.pintar();
    }
	
	numero0(){
        this.consola+=0;
        this.pintar();
    }
	
	mSuma(){
		this.memoria+="+" + document.getElementById('consola').value;
		this.resetear();
	}
	botonMemResta(){
		this.memoria+="-" + document.getElementById('consola').value;
		this.resetear();
	}
	mMostrar(){
		document.getElementById('consola').value = eval(this.memoria);
		this.memoria="";
	}
	
	botonDec(){
        this.consola+=".";
        this.pintar();
    }
	
	botonSuma(){
		this.consola+="+";
		this.pintar();
	}
	botonResta(){
		this.consola+="-";
		this.pintar();
	}
	botonMultiplicar(){
		this.consola+="*";
		this.pintar();
	}
	botonDivision(){
		this.consola+="/";
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
	
	agregarDisplay(digito) {
		if ("0" == this.consola) {
            this.consola = digito;
        }
        else {
            this.consola += digito;
        }
        this.pintar();
    }
	
	limpiarDisplay() {
        this.consola = "0";
        this.pintar();
    }

    limpiarResultado() {
        this.limpiarDisplay();
        this.memoria = "";
    }

    limpiarTodo() {
        this.limpiarResultado();
        this.memoria = "";
    }
	
	calcular(){
		try { 
			document.getElementById("consola").value = eval(this.consola);
			this.consola = document.getElementById("consola").value;
        }
        catch(err) {
            document.getElementById("consola").value = "Syntax Error";
			this.consola="";
        }  
	}

}	
	class CalculadoraCientifica extends CalculadoraBasica {
		
		constructor() {
			super();
		}
	
		limpiarDisplayParte() {
			this.consola = this.consola.substring(0, this.consola.length - 1);
			this.pintar();
		}
	
		factorial() {
			var x = eval(this.consola);
			x = parseInt(x, 10);
			if (isNaN(x)) return 1;

			if (x <= 0) return 1;
			if (x > 170) return Infinity;
			var y = 1;
			for (var i = x; i > 0; i--) {
				y *= i;
			}
			this.consola = y;
			this.memoria = this.consola;
			this.pintar();
		}
		
		cambioSigno() {
			if ("+" == this.consola.substring(0, 1)) {
				this.consola = "-" + this.consola.substring(1, this.consola.length);
			} else if ("-" == this.consola.substring(0, 1)) {
				this.consola = "+" + this.consola.substring(1, this.consola.length);
			} else
				this.consola = "+" + this.consola.substring(0, this.consola.length);
			this.memoria = this.consola;
				this.pintar();
		}
		
		calculoMath(operador) {
        var aux = eval(this.consola);
        switch (operador) {
            case "e":
                aux = Math.exp(aux);
                break;
            case "log":
                aux = Math.log(aux);
                break;
            case "x":
                aux = Math.pow(10, aux);
                break;
            case "y":
                aux = Math.pow(aux, this.memoria);
                break;
            case "raiz":
                aux = Math.sqrt(10, aux);
                break;
            case "sin":
                aux = Math.sin(10, aux);
                break;
            case "cos":
                aux = Math.cos(10, aux);
                break;
            case "tan":
                aux = Math.tan(10, aux);
                break;
            case "2":
                aux = Math.pow(aux, 2);
                break;
        }
        this.consola = aux;
        this.memoria = this.consola;
        this.pintar();
    }
	
	
}
var calculadora = new CalculadoraCientifica();