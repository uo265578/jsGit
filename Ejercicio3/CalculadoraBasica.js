"use strict"
class Calculadora {
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
        document.getElementById("consola").value = this.consola;
    }
	
	borrarTodo(){
		this.consola="";
		this.pintar();
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
var calculadora = new Calculadora();  