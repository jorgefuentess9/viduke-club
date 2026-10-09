/* ==========================================================================
   ARCHIVO JAVASCRIPT PRINCIPAL (js/main.js)
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
    
    /* 1. PROMOCIÓN EN INDEX.HTML */
    const botonPromo = document.getElementById("btn-promo");
    const tituloBanner = document.getElementById("titulo-banner");

    if (botonPromo && tituloBanner) {
        botonPromo.addEventListener("click", () => {
            tituloBanner.textContent = "¡Código de DAM activado!";
            botonPromo.textContent = "¡Obtuviste 2x1 en alquileres de VHS!";
            botonPromo.style.backgroundColor = "#2ecc71"; 
            botonPromo.disabled = true; 
        });
    }

    /* 2. FORMULARIO EN CONTACTO.HTML */
    const formulario = document.getElementById("formulario-contacto");

    if (formulario) {
        formulario.addEventListener("submit", (evento) => {
            evento.preventDefault();

            const nombreUsuario = document.getElementById("nombre").value;
            alert(`¡Muchas gracias por tu solicitud, ${nombreUsuario}! En breve nos pondremos en contacto para dar de alta tu ficha de socio.`);
            formulario.reset();
        });
    }
});