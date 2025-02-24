function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");

    if (userInput.trim() !== "") {
        let userMessage = `<p><strong>You:</strong> ${userInput}</p>`;
        chatBox.innerHTML += userMessage;
        document.getElementById("user-input").value = "";
        
    }
}
