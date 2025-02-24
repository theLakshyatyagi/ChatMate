document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
        sendMessage();
    }
});

function sendMessage() {
    let userInput = document.getElementById("user-input").value.trim();
    if (userInput === "") return;

    appendMessage(userInput, "user-message");

    setTimeout(() => {
        let botResponse = getBotResponse(userInput);
        appendMessage(botResponse, "bot-message");
    }, 500);

    document.getElementById("user-input").value = "";
}

function appendMessage(text, className) {
    let chatBox = document.getElementById("chat-box");
    let messageDiv = document.createElement("div");
    messageDiv.className = className;
    messageDiv.textContent = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    let responses = {
        "hi": "Hello! How can I help you?",
        "hello": "Hi there! What can I do for you?",
        "bye": "Goodbye! Have a great day!",
        "how are you": "I'm just a bot, but I'm doing great!",
        "help": "Sure! Let me know what you need help with.",
    };

    let lowerInput = input.toLowerCase();
    return responses[lowerInput] || "I'm not sure I understand that.";
}
