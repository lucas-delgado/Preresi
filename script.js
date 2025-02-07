const direcciones = {
    1: "Moreno 267, Bahía Blanca. Lunes a viernes de 9 a 12 hs.",
    2: "Echeverría 680, Pehuajó. Lunes a viernes de 9 a 13 hs.",
    3: "Borges y 25 de Mayo, Junín. Martes a viernes de 9 a 13 hs.",
    4: "Linares e Italia, Pergamino. Lunes a viernes de 9 a 12 hs.",
    5: "Acassuso 715, San Isidro. Lunes a viernes de 10 a 13 hs.",
    6: "Alem 435, Lomas de Zamora. Lunes a viernes de 9 a 13 hs.",
    7: "Brandsen 3859, Ituzaingó. Martes a jueves de 9 a 13 hs.",
    8: "Av. Independencia 1213, Mar del Plata. Lunes a viernes de 10 a 13 hs.",
    9: "Arenales 675, Azul. Lunes a viernes de 9 a 12 hs.",
    10: "Hijas de San José 145, Chivilcoy. Lunes a viernes de 9:30 a 12:30 hs.",
    11: "Calle 129 N° 1153, Ensenada. Lunes a viernes de 9 a 13 hs.",
    12: "Hospital Paroissien, Isidro Casanova. Martes, jueves y viernes de 9 a 13 hs."
};

function mostrarDireccion() {
    const region = document.getElementById("region").value;
    const direccionTexto = document.getElementById("direccion-texto");
    const direccion = document.getElementById("direccion");
    
    if (region) {
        direccionTexto.textContent = direcciones[region];
        direccion.classList.remove("hidden");
    } else {
        direccion.classList.add("hidden");
    }
}

function toggleInfo(id) {
    document.getElementById(id).classList.toggle("hidden");
}
