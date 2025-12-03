// Funció per mostrar i amagar el paràgraf ocult
function mostrarParagraf() {
    document.getElementById("paragraf-ocult").style.display = "block";
}

function amagarParagraf() {
    document.getElementById("paragraf-ocult").style.display = "none";
}

// Funció per validar la contrasenya
function validarContrasenya() {
    const pass1 = document.getElementById("pass1").value;
    const pass2 = document.getElementById("pass2").value;

    if (pass1 !== pass2) {
        alert("Les contrasenyes no coincideixen.");
        return false;
    }

    if (pass1.length < 8) {
        alert("La contrasenya ha de tenir almenys 8 caràcters.");
        return false;
    }

    return true;
}
function iniciarRellotge() {
    let segons = 0;
    const rellotge = document.getElementById("rellotge");
  
    setInterval(() => {
      segons++;
      rellotge.textContent = `Temps a la pàgina: ${segons} segons`;
    }, 1000);
  }
  
  document.addEventListener("DOMContentLoaded", iniciarRellotge);