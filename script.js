document.addEventListener("DOMContentLoaded", function() {
    const regionSelect = document.getElementById("region");
    const direccionDiv = document.getElementById("direccion");
    const infoAdicional = document.getElementById("info-adicional");
    const textoDigital = document.getElementById("texto-digital");
    const textoVba = document.getElementById("texto-vba");

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
        "11": "Hospital El Cruce, Ensenada - Lunes a viernes de 9 a 13 hs.",
        "12": "Hospital Paroissien, Isidro Casanova - Martes, jueves y viernes de 9 a 13 hs."
    };

    const digitalAcepta = {
        "1": "No se",
        "2": "No se",
        "3": "No se",
        "4": "No se",
        "5": "No se",
        "6": "Si",
        "7": "No se",
        "8": "No se",
        "9": "No se",
        "10": "No se",
        "11": "No se",
        "12": "No se"
    };

    const vbaAcepta = {
        "1": "No se",
        "2": "No se",
        "3": "No se",
        "4": "No se",
        "5": "No se",
        "6": "No se",
        "7": "No se",
        "8": "No se",
        "9": "No se",
        "10": "No se",
        "11": "No se",
        "12": "No se"
    };

    regionSelect.addEventListener("change", function() {
        const regionValue = this.value;
        direccionDiv.innerText = "Dirección: " + (direcciones[regionValue] || "");
        
        if (regionValue) {
            infoAdicional.classList.remove("oculto");
            textoDigital.innerText = digitalAcepta[regionValue] || "No se";
            textoVba.innerText = vbaAcepta[regionValue] || "No se";
        } else {
            infoAdicional.classList.add("oculto");
        }
    });

    document.querySelectorAll(".btn-opcion").forEach(button => {
        button.addEventListener("click", function() {
            const opcion = this.getAttribute("data-opcion");
            const valor = this.getAttribute("data-valor");

            if (opcion === "digital") {
                textoDigital.innerText = valor;
            } else if (opcion === "vba") {
                textoVba.innerText = valor;
            }
        });
    });

    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function() {
            const info = this.parentElement.querySelector(".info");
            if (info) {
                info.classList.toggle("visible");
            }
        });
    });
});
