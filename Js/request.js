
  document.querySelector("#loginform").addEventListener("submit", cargarPredios);

  // Llamado variables modificación de la url
  function cargarPredios(e){
        e.preventDefault();

        // Leer las variables
        const codigoCatastral = document.getElementById("Codigo").value;
        // console.log(codigoCatastral);

        // Función para cargar el Json
        fetch("Datos-catastro.json")
        .then(respuesta => respuesta.json())
        .then((usuarios) => {

          // Buscamos el usuario con el código especificado
          const usuario = usuarios.find((usuario) => usuario.codCatastral === codigoCatastral);

          // Obtenemos el objeto JSON
          const objetoJSON = usuario;

          // Se imprimen los datos
          console.log("Propietario: " +objetoJSON.Propietario);

    
        //PARA CALCULAR EL IMPUESTO...
        const avaluoPredio = objetoJSON.Avaluo;
        console.log("Avalúo: " +avaluoPredio);

        // Calculamos el impuesto predial
        const impuestoPredial = calcularImpuesto(avaluoPredio);

        // Imprimimos el impuesto predial
        console.log("El impuesto a pagar es: " +impuestoPredial);
                
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
      console.log("La tarifa aplicable es del " +tarifaAplicable+"%");
    } else if (datoAvaluo >= 20000001 && datoAvaluo <= 50000000) {
      tarifaAplicable = 0.12;
      console.log("La tarifa aplicable es del " +tarifaAplicable+"%");
    } else if (datoAvaluo >= 50000001 && datoAvaluo <= 100000000) {
      tarifaAplicable = 0.14;
      console.log("La tarifa aplicable es del " +tarifaAplicable+"%");
    } else if (datoAvaluo >= 100000001 && datoAvaluo <= 200000000) {
      tarifaAplicable = 0.16;
      console.log("La tarifa aplicable es del " +tarifaAplicable+"%");
    } else if (datoAvaluo > 200000000) {
      tarifaAplicable = 0.18;
      console.log("La tarifa aplicable es del " +tarifaAplicable+"%");
    }
    
    // Calculamos el impuesto predial
    const impuestoPredial = datoAvaluo * tarifaAplicable;

    // Devolvemos el impuesto predial
    return impuestoPredial;
    
    }


