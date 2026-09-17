// =====================================
// MENÚ MÓVIL
// =====================================

function mostrarMenu() {

    const menu = document.getElementById("menu");

    menu.classList.toggle("active");

}


// =====================================
// ABRIR IA
// =====================================

function abrirIA() {

    const modal = document.getElementById("modalIA");

    modal.classList.add("active");

    document.getElementById("chatInput").focus();

}


// =====================================
// CERRAR IA
// =====================================

function cerrarIA() {

    document
        .getElementById("modalIA")
        .classList.remove("active");

}


// =====================================
// CHAT IA SIMULADO
// =====================================

function enviarChat() {

    const input =
        document.getElementById("chatInput");

    const chat =
        document.getElementById("chatBody");

    const pregunta =
        input.value.trim();


    if (pregunta === "") {
        return;
    }


    // Mensaje usuario

    const userMessage =
        document.createElement("div");

    userMessage.className =
        "user-message";

    userMessage.textContent =
        pregunta;

    chat.appendChild(userMessage);


    input.value = "";


    // Respuesta automática

    setTimeout(function() {

        const botMessage =
            document.createElement("div");

        botMessage.className =
            "bot-message";


        let respuesta =
            "🤖 Gracias por tu consulta. ";


        const texto =
            pregunta.toLowerCase();


        if (texto.includes("web")) {

            respuesta +=
                "Puedo ayudarte con desarrollo de páginas web utilizando HTML, CSS y JavaScript.";

        }

        else if (
            texto.includes("ia") ||
            texto.includes("inteligencia")
        ) {

            respuesta +=
                "La IA puede utilizarse para automatización, análisis de datos, asistentes virtuales y optimización de procesos.";

        }

        else if (
            texto.includes("base") ||
            texto.includes("datos")
        ) {

            respuesta +=
                "Las bases de datos permiten almacenar, organizar y consultar información de manera eficiente.";

        }

        else if (
            texto.includes("seguridad") ||
            texto.includes("ciber")
        ) {

            respuesta +=
                "La ciberseguridad busca proteger sistemas, aplicaciones, redes y datos frente a diferentes amenazas.";

        }

        else {

            respuesta +=
                "Cuéntame si necesitas una solución de software, IA, bases de datos, automatización, soporte TI o desarrollo web.";

        }


        botMessage.innerHTML =
            respuesta;

        chat.appendChild(botMessage);


        chat.scrollTop =
            chat.scrollHeight;


    }, 700);

}


// =====================================
// ENTER EN EL CHAT
// =====================================

function enterChat(event) {

    if (event.key === "Enter") {

        enviarChat();

    }

}


// =====================================
// FORMULARIO
// =====================================

document
    .getElementById("contactForm")
    .addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const nombre =
                document.getElementById("nombre").value;


            alert(
                "🚀 ¡Gracias, " +
                nombre +
                "!\n\n" +
                "Tu solicitud fue recibida. " +
                "Jeison Moreno se pondrá en contacto contigo."
            );


            this.reset();

        }
    );


// =====================================
// CERRAR MODAL AL HACER CLICK AFUERA
// =====================================

document
    .getElementById("modalIA")
    .addEventListener(
        "click",
        function(event) {

            if (event.target === this) {

                cerrarIA();

            }

        }
    );