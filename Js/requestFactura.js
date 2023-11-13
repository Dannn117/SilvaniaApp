    
function cargarDatosFactura(){
    
    //Traer el código ingresado
    var codigoCatastral = localStorage.getItem('codigoGuardado');
    console.log(codigoCatastral);

     // Función para cargar el Json
     fetch("http://localhost:80/api/predios/")
     .then(respuesta => respuesta.json())
     .then((usuarios) => {

       // Buscamos el usuario con el código especificado
       const usuario = usuarios.find((usuario) => usuario.codCatastral === codigoCatastral);

       // Obtenemos el objeto JSON
       const objetoJSON = usuario;

       // Se imprimen los datos
       document.getElementById("numeroPredial").innerText = `${objetoJSON.numPredial}`
       document.getElementById("codigoCatas").innerText = `${codigoCatastral}`
       document.getElementById("prop_title").innerText = `${objetoJSON.Propietario}`
       document.getElementById("direccion").innerText = `${objetoJSON.direccion}`
       document.getElementsByClassName("fecha").innerText = "asdasdsa";
      //  document.getElementById("Valor_d").placeholder = "No aplica"; 
 
     //PARA CALCULAR EL IMPUESTO...
     const avaluoPredio = objetoJSON.Avaluo;
     document.getElementById("avaluo").innerText = avaluoPredio.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
      }); 
      document.getElementById("subTotal").innerText = avaluoPredio.toLocaleString('es-CO', {
        style: 'currency',
        currency: 'COP',
        maximumFractionDigits: 0
        }); 

     // Calculamos el impuesto predial
     const impuestoPredial = calcularImpuesto(avaluoPredio);

     // Imprimimos el impuesto predial
     document.getElementById("total").innerText = impuestoPredial.toLocaleString('es-CO', {
      style: 'currency',
      currency: 'COP',
      maximumFractionDigits: 0
      }); 
    //  document.getElementById("Impuesto").placeholder = impuestoPredial.toLocaleString('es-CO', {
    //   style: 'currency',
    //   currency: 'COP',
    //   maximumFractionDigits: 0
    //   });     
             
     })
     .catch(error => console.log(error));

}

// Función para calcular la tarifa del impuesto
function calcularImpuesto(datoAvaluo){
 // Obtenemos la tarifa del impuesto predial
 const tarifa = 0.10;

 // Calculamos la tarifa aplicable
 var tarifaAplicable = tarifa;
 if (datoAvaluo >= 0 && datoAvaluo <= 20000000) {
   tarifaAplicable;
   document.getElementById("tarifaImpuesto").innerText = tarifaAplicable+"%";
 } else if (datoAvaluo >= 20000001 && datoAvaluo <= 50000000) {
   tarifaAplicable = 0.12;
   document.getElementById("tarifaImpuesto").innerText = tarifaAplicable+"%";
 } else if (datoAvaluo >= 50000001 && datoAvaluo <= 100000000) {
   tarifaAplicable = 0.14;
   document.getElementById("tarifaImpuesto").innerText = tarifaAplicable+"%";
 } else if (datoAvaluo >= 100000001 && datoAvaluo <= 200000000) {
   tarifaAplicable = 0.16;
   document.getElementById("tarifaImpuesto").innerText = tarifaAplicable+"%";
 } else if (datoAvaluo > 200000000) {
   tarifaAplicable = 0.18;
   document.getElementById("tarifaImpuesto").innerText = tarifaAplicable+"%";
 }
 
 // Calculamos el impuesto predial
 const impuestoPredial = datoAvaluo * tarifaAplicable;

 // Devolvemos el impuesto predial
 return impuestoPredial;
}