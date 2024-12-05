// Tab Content

function openTab(evt, tabName) {
    var i, tabcontent, tablinks;

    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";

    evt.currentTarget.className += " active";
  }

  window.onload = function() {
    document.querySelector(".tablinks").click();  
  };

//   Chatbot

const responses = {
    "Are you available for freelance projects?": "Yes, feel free to reach out via LinkedIn or email!",
    "Can I collaborate with you on a project?": "Absolutely! Let’s discuss your project and start building something great. Please reach out via LinkedIn or email.",
    "What technologies do you use?": "I work with Java, JavaScript, Angular, React, HTML, and CSS.",
    "What qualifications do you have?": "I have an advanced diploma in IT from Vaal University of Technology, majoring in software development.",
    "Can I see your LinkedIn profile?": "Sure! Here’s my LinkedIn: <a href='https://linkedin.com/in/zinhle-mgwenya-465b27269/' target='_blank'>LinkedIn Profile</a>.",
    "What inspired you to become a developer?": "I enjoy solving problems and creating solutions through code.",
    "Can I contact you?": "Yes! For more questions, feel free to send me an email: zinhlengwenya962@gmail.com, <a href='https://linkedin.com/in/zinhle-mgwenya-465b27269/' target='_blank'>LinkedIn Profile</a>"
};

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
}

function sendMessage() {
    const userInput = document.getElementById('user-input').value;
    if (userInput.trim() === "") return;

    addMessage(userInput, 'user-message');
    document.getElementById('user-input').value = '';

    setTimeout(() => {
        const botResponse = responses[userInput] || "I'm not sure about that. Feel free to reach out via email at zinhlengwenya962@gmail.com for further assistance.";
        addMessage(botResponse, 'bot-message');
    }, 500);
}

function sendQuestion(question, button) {
    addMessage(question, 'user-message');
    button.style.display = 'none'; 

    setTimeout(() => {
        const botResponse = responses[question] || "I'm not sure about that. Feel free to reach out via email at zinhlengwenya962@gmail.com for further assistance.";
        addMessage(botResponse, 'bot-message');
    }, 500);
}

function addMessage(text, className) {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('div');
    message.className = `message ${className}`;
    message.innerHTML = text;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function startChat() {
    document.getElementById('intro-container').style.display = 'none';
    document.getElementById('chat-container').style.display = 'flex';
}

function closeChat() {
    document.getElementById('chat-container').style.display = 'none';
    document.getElementById('intro-container').style.display = 'block';
    clearChat();
}

function clearChat() {
    const chatBox = document.getElementById('chat-box');
    chatBox.innerHTML = '<div class="message bot-message">My Name is Zee! How can I assist you?</div>';
    const options = document.getElementById('options').children;
    for (let i = 0; i < options.length; i++) {
        options[i].style.display = 'block';
    }
}

// ToggleMenu

function toggleMenu() {
    const navMenu = document.getElementById('nav-menu');
    const wrapper = document.querySelector('.wrapper');
    navMenu.classList.toggle('active');
    wrapper.classList.toggle('active');
}