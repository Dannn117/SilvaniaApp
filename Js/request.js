
  // document.querySelector("#loginform").addEventListener("submit", cargarPredios);

  // Llamado variables modificación de la url
function cargarPredios(e){

        // Leer las variables
        const codigoCatastral = document.getElementById("Codigo").value;
        // console.log(codigoCatastral);


        localStorage.setItem('codigoGuardado', codigoCatastral);
            // Redirigir a la otra página
            window.location.href = 'perfil.html';

    }