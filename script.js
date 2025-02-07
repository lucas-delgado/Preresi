document.addEventListener("DOMContentLoaded", function() {
    const regionSelect = document.getElementById("region");
    const direccionDiv = document.getElementById("direccion");
    const direcciones = {
        "1": "Moreno 267, Bahía Blanca - Lunes a viernes de 9 a 12 hs.",
        "2": "Echeverría 680, Pehuajó - Lunes a viernes de 9 a 13 hs.",
        "3": "Borges y 25 de Mayo, Junín - Martes a viernes de 9 a 13 hs.",
        "4": "Linares e Italia, Pergamino - Lunes a viernes de 9 a 12 hs.",
        "5": "Acassuso 715, San Isidro - Lunes a viernes de 10 a 13 hs.",
        "6": "Alem 435, Lomas de Zamora - Lunes a viernes de 9 a 13 hs.",
        "7": "Coronel Brandsen 3859, Ituzaingó - Martes a jueves de 9 a 13 hs.",
        "8": "Av. Independencia 1213, Mar del Plata - Lunes a viernes de 10 a 13 hs.",
        "9": "Arenales 675, Azul - Lunes a viernes de 9 a 12 hs.",
        "10": "Hijas de San José 145, Chivilcoy - Lunes a viernes de 9:30 a 12:30 hs.",
        "11": "Calle 129 Nº 1153, Ensenada - Lunes a viernes de 9 a 13 hs.",
        "12": "Hospital Paroissien, Isidro Casanova - Martes, jueves y viernes de 9 a 13 hs."
    };

    regionSelect.addEventListener("change", function() {
        direccionDiv.innerText = "Dirección: " + (direcciones[this.value] || "");
    });

    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function() {
            this.nextElementSibling.classList.toggle("info");
        });
    });
});
