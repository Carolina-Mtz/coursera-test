document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("formulario").addEventListener('submit', validarFormulario); 
  });
  
  function validarFormulario(evento) {
    evento.preventDefault();
    var usuario = document.getElementById('usuario').value;
    if(usuario.length == 0) {
      alert("Campo vacio");
      return;
    }
    var clave = document.getElementById('clave').value;
    if (clave.length < 6) {
      alert("Clave Incorrecta");
      return;
    }
    this.submit();
  }

  


  