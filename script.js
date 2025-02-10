document.addEventListener("DOMContentLoaded", function() {
    const regionSelect = document.getElementById("region");
    const direccionDiv = document.getElementById("direccion");
    const testimoniosContainer = document.getElementById("testimonios-container");

    const direcciones = {
        "1": "Moreno 267, Bahía Blanca - Lunes a viernes de 9 a 12 hs.",
        "2": "Echeverría 680, Pehuajó - Lunes a viernes de 9 a 13 hs.",
        "3": "Borges y 25 de Mayo, Junín - Martes a viernes de 9 a 13 hs."
    };

    const testimonios = {
        "1": ["Muy buena atención en Bahía Blanca.", "Todo fue rápido y eficiente."],
        "2": ["En Pehuajó hay que ir temprano, pero es ordenado.", "Me atendieron bien."],
        "3": ["Junín es organizado y con buena información."]
    };

    regionSelect.addEventListener("change", function() {
        const region = this.value;
        direccionDiv.innerText = region ? "Dirección: " + direcciones[region] : "";

        testimoniosContainer.innerHTML = region && testimonios[region]
            ? testimonios[region].map(t => `<p>${t}</p>`).join("")
            : "<p>No hay testimonios para esta región.</p>";
    });

    document.querySelectorAll(".toggle-btn").forEach(button => {
        button.addEventListener("click", function() {
            this.nextElementSibling.classList.toggle("info");
        });
    });

    document.querySelectorAll(".btn-opcion").forEach(button => {
        button.addEventListener("click", function() {
            const opcion = this.dataset.opcion;
            const valor = this.dataset.valor;
            alert(`Seleccionaste: ${opcion.toUpperCase()} - ${valor.toUpperCase()}`);
        });
    });
});