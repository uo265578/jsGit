class Stack {
	constructor(){
        this.stack=[];

    }

    push(element){
        this.stack.push(element);
        return this.stack;
    }

    pop(){
       return this.stack.pop();
    }

    peek(){
        return this.stack[this.stack.length-1];
    }

    get(n){
        return this.stack[n];
    }

    size(){
        return this.stack.length;
    }

    clear(){
        this.stack=[];
    }

    isEmpty() 
    { 
        return this.stack.length==0;
    } 

}

class CalculadoraRPN {
	constructor () {
		this.consola="";
		this.memoria="0";
		this.stack=new Stack();
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
	mResta(){
		this.memoria+="-" + document.getElementById('consola').value;
		this.resetear();
	}
	botonMr(){
        this.consola=this.memoria;
        this.pintar();
    }
    
    botonMc(){
        this.consola="0";
    }
	
	botonDec(){
		if (this.consola==""){
			this.consola="0.";
		}else{
			this.consola+=".";
		}
        
        this.pintar();
    }
	
	botonPop(){
		if(this.stack.isEmpty()==true){
			this.consola="0";
			this.pintar();
		}
		else{	
			this.valor=this.stack.pop();
			this.consola=this.valor;
			this.pintar();
		}
        
    }

    botonSwap(){
        if (this.stack.isEmpty()==true){
            this.nuevoValorP=this.consola;
            this.consola="0";
        }else{
            this.nuevoValorP=this.consola;
            this.consola=this.stack.pop();
        }
        
        this.stack.push(this.nuevoValorP);
        this.pintar();
    }

    botonPorcent(){
        this.valor=this.stack.peek();
        this.consola=this.valor+"*"+this.consola+"/100";
        this.consola=eval(this.consola);
        this.pintar();
    }

    raiz(){
        this.consola=String(Math.sqrt(this.consola));
        this.pintar();
    }

    botonPow(){
        
        this.valor=this.stack.pop();
        this.consola=String(Math.pow(this.valor,this.consola));
        this.consola=eval(this.consola);
        this.pintar();
    }

    inverso(){
        
        this.consola=String("1/"+this.consola);
        this.consola=eval(this.consola);
        this.pintar();
    }

    opuesto(){
        this.consola=this.consola+"*(-1)";
        this.consola=eval(this.consola);
        this.pintar();
    }
	
	botonSuma(){
		if (this.stack.isEmpty()==true){
			this.valor="0";
		}else{
			this.valor=this.stack.pop();
		}
		this.consola=String(this.valor+"+"+this.consola);
		this.consola=eval(this.consola);
		this.pintar();
	}
	botonResta(){
		if (this.stack.isEmpty()==true){
			this.valor="0";
		}else{
			this.valor=this.stack.pop();
		}
    
		this.consola=""+this.valor+"-"+this.consola;
		this.consola=eval(this.consola);
		this.pintar();
	}
	botonMultiplicar(){
		if (this.stack.isEmpty()==true){
            this.consola="0";
        }else{
            this.valor=this.stack.pop();
            this.consola=String(this.valor+"*"+this.consola);
            this.consola=eval(this.consola);
        }
        
        this.pintar();
	}
	botonDivision(){
		if(this.stack.isEmpty()==true){
            this.consola="0";
        }else{
            this.valor=this.stack.pop();
            this.consola=String(this.valor+"/"+this.consola);
            this.consola=eval(this.consola);
        }
        
        this.pintar();
	}

	
	pintar(){
        if (this.stack.size()==0){
			document.getElementById('consola1').value = "0";
			document.getElementById('consola2').value = "0";
			document.getElementById('consola3').value = "0";
		}else if(this.stack.size()==1){
			document.getElementById('consola1').value = this.stack.get(0);
			document.getElementById('consola2').value = "0";
			document.getElementById('consola3').value = "0";
		}else if(this.stack.size()==2){
			document.getElementById('consola1').value = this.stack.get(1);
			document.getElementById('consola2').value = this.stack.get(0);
			document.getElementById('consola3').value = "0";
		}else {
			document.getElementById('consola1').value = this.stack.get(2);
			document.getElementById('consola2').value = this.stack.get(1);
			document.getElementById('consola3').value = this.stack.get(0);
		}
    
		document.getElementById('consola').value=this.consola;
   }
	
	borrarTodo(){
		this.consola="";
		this.pintar();
	}
	
	botonAc(){
        this.consola="0";
        this.stack.clear();
        this.pintar();
    }
	
	calcular(){
	    this.stack.push(this.consola);
        this.consola="0";
        this.pintar(); 
	}
}
var calculadora = new CalculadoraRPN();  