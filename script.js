document.addEventListener("DOMContentLoaded", function() {
    const regionSelect = document.getElementById("region");
    const direccionDiv = document.getElementById("direccion");
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

    const infoPorRegion = {
        "1": { digital: "SÍ", vba: "NO" },
        "2": { digital: "NO", vba: "SÍ" },
        "3": { digital: "SÍ", vba: "SÍ" },
        "4": { digital: "NO SE", vba: "NO SE" },
        "5": { digital: "NO SE", vba: "NO SE" },
        "6": { digital: "SÍ", vba: "NO" },
        "7": { digital: "NO SE", vba: "NO SE" },
        "8": { digital: "NO", vba: "SÍ" },
        "9": { digital: "NO SE", vba: "NO SE" },
        "10": { digital: "SÍ", vba: "SÍ" },
        "11": { digital: "NO", vba: "NO" },
        "12": { digital: "NO SE", vba: "NO SE" }
    };

    regionSelect.addEventListener("change", function() {
        const region = this.value;
        direccionDiv.innerText = region ? "Dirección: " + direcciones[region] : "";
        
        if (region && infoPorRegion[region]) {
            infoDigital.innerText = infoPorRegion[region].digital;
            infoVBA.innerText = infoPorRegion[region].vba;
        } else {
            infoDigital.innerText = "NO SE";
            infoVBA.innerText = "NO SE";
        }
    });
});
