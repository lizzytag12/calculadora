 // Creamos la funcion dividir y usamos la dependencia colors
  
 const dividir = (numeroA,numeroB ) => {
      if (numeroA>0 && numeroB>0){
          return numeroA / numeroB
  } else {

    return  "No se puede dividir por 0".underline.red
  }
    

}



module.exports= dividir;