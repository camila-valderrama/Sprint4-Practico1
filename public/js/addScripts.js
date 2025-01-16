window.addEventListener("load", () => {

    const btnAgregarSuperheroe = document.getElementById('btnAgregarSuperheroe')
    const formAgregar = document.getElementById('formAgregar')
  
    btnAgregarSuperheroe.addEventListener('click', async (event) => {
      event.preventDefault()
     
      if (!formAgregar.checkValidity()) { //habilitra la validacion del formulario
        formAgregar.reportValidity();
        return;
    }
      const superheroe = {        
        nombreSuperheroe: formAgregar.nombreSuperheroe.value,
        nombreReal: formAgregar.nombreReal.value,
        edad: formAgregar.edad.value,
        planetaOrigen: formAgregar.planetaOrigen.value,
        debilidad: formAgregar.debilidad.value,
        poderes: formAgregar.poderes.value.split(',').map(p => p.trim()),
        aliados: formAgregar.aliados.value.split(',').map(a => a.trim()),
        enemigos: formAgregar.enemigos.value.split(',').map(e => e.trim()),
    };
      
    try {
      const response = await fetch('/api/heroes/heroe-nuevo', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify(superheroe),
      });

      if (response.ok) {
        const superheroeCreado = await response.json();        
       
          //alert('Superhéroe creado con éxito: ' + superheroeCreado.nombre);          
          window.location.href = `/api/dashboard`
        } else {
          const error = await response.json();
          const mensaje = error.error[0].message;
          let mensajeCompleto = "";
  
          error.error.forEach(error => {
            mensajeCompleto += error.message + "\n";
          })
  
          alert('Error al crear el superhéroe: ' + '\n' + mensajeCompleto);
          // alert('Error al crear el superhéroe: '+'\n' + mensajeCompleto);  //MUESTRA TODOS LOS ERRORES DE VALIDACION JUNTOS
        }
      } catch (error) {
        console.error('Error en la solicitud:', error);
      }
    });
       
    })