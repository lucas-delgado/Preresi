document.addEventListener("DOMContentLoaded", function() {
    const regionSelect = document.getElementById("region");
    const direccionDiv = document.getElementById("direccion");
    const infoAdicional = document.getElementById("info-adicional");
    const textoDigital = document.getElementById("digitalAcepta");
    const textoVba = document.getElementById("vbaAcepta");

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
    const testimonios = {
    "1": "Testimonio de la región 1.",
    "2": "Testimonio de la región 2.",
    "3": "Testimonio de la región 3.",
    "4": "Testimonio de la región 4.",
    "5": "Testimonio de la región 5.",
    "6": "No hay testimonios sobre la region 6.",
    "7": "Testimonio de la región 7.",
    "8": "Testimonio de la región 8.",
    "9": "Testimonio de la región 9.",
    "10": "Testimonio de la región 10.",
    "11": "Testimonio de la región 11.",
    "12": "Testimonio de la región 12."
};

    regionSelect.addEventListener("change", function() {
        const regionValue = this.value;
        const testimoniosDiv = document.getElementById("testimonios");
        const contenidoTestimonios = document.getElementById("contenidoTestimonios");
        direccionDiv.innerText = "Dirección: " + (direcciones[regionValue] || "");
        
        if (regionValue) {
            infoAdicional.classList.remove("oculto");
            textoDigital.innerText = digitalAcepta[regionValue] || "No se";
            textoVba.innerText = vbaAcepta[regionValue] || "No se";
            testimoniosDiv.classList.remove("oculto");
            contenidoTestimonios.innerText = testimonios[regionValue] || "Seleccione una región sanitaria para ver testimonios";
        } else {
            infoAdicional.classList.add("oculto");
            testimoniosDiv.classList.add("oculto");
            contenidoTestimonios.innerText = "";
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
