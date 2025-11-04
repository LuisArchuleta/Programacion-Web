
const operaciones=['suma','resta','multiplicacion','division']
type Operaciones= 'suma'|'resta'|'multiplicacion'|'division'; //Creamos un tipo de dato operaciones para la comparacion
type Resultados= number|string;//la firma es tipo number o string (La funcion regresa un numero o cadena)

const calculadora = (a:number,b:number,operacion:Operaciones):Number=>{ 

    // if(operaciones.includes(operacion)){
    //     return "Operacion no valida";
    // }

    if(operacion== 'suma'){
        return a+b;
    }

    if(operacion=='resta'){
        return a-b;
    }

    if(operacion=='multiplicacion'){    
        return a*b;
    }

    if(operacion=='division'){
        if(b==0){
            throw new Error("No se puede dividir entre cero");
            // return "No se puede dividir entre cero";
        }
        return a/b;
    }


    throw new Error("Operacion no valida");
}

console.log(calculadora(1,3,'suma'));
console.log(calculadora(1,3,'resta'));
console.log(calculadora(1,3,'multiplicacion'));
console.log(calculadora(1,0,'division'));
// console.log(calculadora(1,3,'sumaste'));