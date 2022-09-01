const sumar = require("./sumar");
const restar = require("./restar");
const multiplicar = require("./multiplicar");
const dividir = require("./dividir");
const process = require("process")
const colors = require("colors")

let operacion = process.argv[2];
let numeroA = +process.argv[3]
let numeroB = +process.argv[4]

 
   
if ( operacion === "sumar"){
    if (process.argv[3] !==undefined || process.argv[4] !== undefined){
       
        console.log(sumar (numeroA,numeroB));
    } else {
        console.log("Agrega correctamente los  parametros!!".underline.red);
    }
     
}else if (operacion === "restar"){
    if (process.argv[3] !==undefined || process.argv[4] !== undefined){
       
        console.log(restar (numeroA,numeroB));
    } else {
        console.log("Agrega correctamente los  parametros!!".underline.red);
    }
}else if ( operacion === "multiplicar"){
    if (process.argv[3] !==undefined || process.argv[4] !== undefined){
       
        console.log(multiplicar (numeroA,numeroB));
    } else {
        console.log("Agrega correctamente los  parametros!!".underline.red);
    }
}else if(operacion === "dividir"){
    if (process.argv[3] !==undefined || process.argv[4] !== undefined){
       
        console.log( dividir (numeroA,numeroB));
    } else {
        console.log("Agrega correctamente los  parametros!!".underline.red);
    }
}else{
    console.log("Ingrese correctamente la operacion a realizar".underline.red);
} 
