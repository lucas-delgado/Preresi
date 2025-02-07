function mostrarDireccion() {
    const regiones = {
        "1": "Dirección: Moreno 267, Bahía Blanca.",
        "2": "Dirección: Echeverría 680, Pehuajó.",
        "3": "Dirección: Borges y 25 de Mayo, Junín.",
        "4": "Dirección: Linares e Italia, Pergamino.",
        "5": "Dirección: Acassuso 715, San Isidro.",
        "6": "Dirección: Alem 435, Lomas de Zamora.",
        "7": "Dirección: Brandsen 3859, Ituzaingó.",
        "8": "Dirección: Av. Independencia 1213, Mar del Plata.",
        "9": "Dirección: Arenales 675, Azul.",
        "10": "Dirección: Hijas de San José 145, Chivilcoy.",
        "11": "Dirección: Calle 129 Nº 1153, Ensenada.",
        "12": "Dirección: Hospital Paroissien, Isidro Casanova."
    };
    document.getElementById("direccion").innerText = regiones[document.getElementById("region").value] || "";
}

function toggleInfo(id) {
    document.getElementById(id).classList.toggle("hidden");
}
