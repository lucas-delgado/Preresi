document.addEventListener("DOMContentLoaded", function() {
    const regionSelect = document.getElementById("region");
    const direccionDiv = document.getElementById("direccion");
    const infoAdicional = document.getElementById("info-adicional");
    const infoDigital = document.getElementById("info-digital");
    const infoVBA = document.getElementById("info-vba");

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

    // Configuración inicial de valores para "Acepta digital" y "Acepta certificado"
    const infoPorRegion = {
        "1": { digital: "SÍ", vba: "NO" },
        "2": { digital: "NO", vba: "SÍ" },
        "3": { digital: "SÍ", vba: "SÍ" },
        "4": { digital: "NO SE", vba: "NO SE" },
        "5": { digital: "SÍ", vba: "NO" },
        "6": { digital: "NO", vba: "SÍ" },
        "7": { digital: "NO SE", vba: "NO SE" },
        "8": { digital: "SÍ", vba: "SÍ" },
        "9": { digital: "NO", vba: "SÍ" },
        "10": { digital: "SÍ", vba: "NO" },
        "11": { digital: "NO SE", vba: "NO SE" },
        "12": { digital: "SÍ", vba: "SÍ" }
    };

    // Evento para actualizar la dirección y mostrar la información adicional
    regionSelect.addEventListener("change", function() {
        const region = this.value;
        if (region) {
            direccionDiv.innerText = "Dirección: " + direcciones[region];
            infoDigital.innerText = infoPorRegion[region]?.digital || "NO SE";
            infoVBA.innerText = infoPorRegion[region]?.vba || "NO SE";
            infoAdicional.classList.remove("oculto");
        } else {
            direccionDiv.innerText = "";
            infoAdicional.classList.add("oculto");
        }
    });

    // Evento para los botones de información adicional en los documentos
    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function() {
            const infoText = this.nextElementSibling;
            infoText.classList.toggle("oculto");
        });
    });

});
