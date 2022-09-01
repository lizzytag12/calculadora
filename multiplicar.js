//Creamos funcion multiplicar y usamos la dependencia colors

let multiplicar= (numeroA,numeroB) => {

 if ( numeroA ===0 || numeroB===0 ){
    
    return "0".red

 }else {

    return numeroA * numeroB

 }
    
}

module.exports= multiplicar;
