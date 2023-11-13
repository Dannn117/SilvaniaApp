

//Cargar los datos en el formulario "perfil"
function cargarDatos(){
       
        //Traer el código ingresado
        var codigoCatastral = localStorage.getItem('codigoGuardado');
        console.log(codigoCatastral);

         // Función para cargar el Json
         fetch("http://localhost:80/api/predios")
         .then(respuesta => respuesta.json())
         .then((usuarios) => {
 
           // Buscamos el usuario con el código especificado
           const usuario = usuarios.find((usuario) => usuario.codCatastral === codigoCatastral);
 
           // Obtenemos el objeto JSON
           const objetoJSON = usuario;
 
           // Se imprimen los datos
           document.getElementById("usuario").placeholder = objetoJSON.Propietario;
           document.getElementById("Direccion").placeholder = objetoJSON.direccion;
           document.getElementById("Valor_d").placeholder = "No aplica"; 
     
         //PARA CALCULAR EL IMPUESTO...
         const avaluoPredio = objetoJSON.Avaluo;
         document.getElementById("Valor_a").placeholder = avaluoPredio.toLocaleString('es-CO', {
          style: 'currency',
          currency: 'COP',
          maximumFractionDigits: 0
          }); 

         // Calculamos el impuesto predial
         const impuestoPredial = calcularImpuesto(avaluoPredio);
 
         // Imprimimos el impuesto predial
         document.getElementById("Total").placeholder = impuestoPredial.toLocaleString('es-CO', {
          style: 'currency',
          currency: 'COP',
          maximumFractionDigits: 0
          }); 
         document.getElementById("Impuesto").placeholder = impuestoPredial.toLocaleString('es-CO', {
          style: 'currency',
          currency: 'COP',
          maximumFractionDigits: 0
          });     
                 
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
       document.getElementById("Tarifa").placeholder = tarifaAplicable+"%";
     } else if (datoAvaluo >= 20000001 && datoAvaluo <= 50000000) {
       tarifaAplicable = 0.12;
       document.getElementById("Tarifa").placeholder = tarifaAplicable+"%";
     } else if (datoAvaluo >= 50000001 && datoAvaluo <= 100000000) {
       tarifaAplicable = 0.14;
       document.getElementById("Tarifa").placeholder = tarifaAplicable+"%";
     } else if (datoAvaluo >= 100000001 && datoAvaluo <= 200000000) {
       tarifaAplicable = 0.16;
       document.getElementById("Tarifa").placeholder = tarifaAplicable+"%";
     } else if (datoAvaluo > 200000000) {
       tarifaAplicable = 0.18;
       document.getElementById("Tarifa").placeholder = tarifaAplicable+"%";
     }
     
     // Calculamos el impuesto predial
     const impuestoPredial = datoAvaluo * tarifaAplicable;
 
     // Devolvemos el impuesto predial
     return impuestoPredial;

}

function crearFactura(){
  window.location.href = 'factura.html';
}