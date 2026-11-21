
const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("light-mode");

    if (document.body.classList.contains("light-mode")) {
        themeBtn.innerText = "Dark Mode";
    } else {
        themeBtn.innerText = "Change Theme";
    }

});

const typingText = document.getElementById("typingText");

const messages = [
    "BCA Student",
    "Beginner Programmer",
    "Learning Web Development"
];

let messageIndex = 0;
let charIndex = 0;

function typeEffect() {
    if (!typingText) return;

    if (charIndex < messages[messageIndex].length) {
        typingText.textContent += messages[messageIndex].charAt(charIndex);
        charIndex++;
        setTimeout(typeEffect, 100);
    } else {
        setTimeout(() => {
            typingText.textContent = "";
            charIndex = 0;
            messageIndex = (messageIndex + 1) % messages.length;
            typeEffect();
        }, 1500);
    }
}

typeEffect();

// Smooth Scroll to Contact Section
const contactBtn = document.getElementById("contactBtn");
const contactSection = document.getElementById("contact");

if (contactBtn && contactSection) {
    contactBtn.addEventListener("click", function () {
        contactSection.scrollIntoView({
            behavior: "smooth"
        });
    });
}


