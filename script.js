function sendMessage() {
    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") return;

    addMessage("user", message);

    let response = getBotResponse(message.toLowerCase());

    setTimeout(() => {
        addMessage("bot", response);
    }, 500);

    input.value = "";
}

function addMessage(sender, text) {
    let chatbox = document.getElementById("chatbox");
    let message = document.createElement("p");

    message.className = sender;
    message.innerText = text;

    chatbox.appendChild(message);
    chatbox.scrollTop = chatbox.scrollHeight;
}

function getBotResponse(input) {

    // RESPUESTAS EDUCATIVAS
    if (input.includes("planificación")) {
        return "La planificación es el proceso de organizar contenidos, objetivos y actividades de enseñanza.";
    }

    if (input.includes("clase")) {
        return "Una clase debe tener inicio, desarrollo y cierre.";
    }

    if (input.includes("evaluación")) {
        return "La evaluación permite verificar el aprendizaje de los estudiantes.";
    }

    if (input.includes("residencia")) {
        return "La residencia docente es la etapa donde aplicás tus conocimientos en el aula.";
    }

    if (input.includes("hola")) {
        return "¡Hola! ¿En qué puedo ayudarte con Práctica de la Enseñanza?";
    }

    return "No entiendo la pregunta. Probá con temas como planificación, evaluación o clase.";
}