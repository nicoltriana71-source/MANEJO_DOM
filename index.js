
let contador = 0;


const boton = document.getElementById("btnClic");
const visorContador = document.getElementById("numero");
const tabla = document.getElementById("registro");


boton.addEventListener("click", function() {

    
    contador++;

    
    visorContador.textContent = contador;

    
    const hora = new Date().toLocaleTimeString();

   
    const fila = document.createElement("tr");

    
    const celdaNumero = document.createElement("td");
    const celdaHora = document.createElement("td");

    
    celdaNumero.textContent = contador;
    celdaHora.textContent = hora;

    
    fila.appendChild(celdaNumero);
    fila.appendChild(celdaHora);

    tabla.appendChild(fila);

});
