
const yearElement = document.getElementById("year");

yearElement.textContent = new Date().getFullYear();

const contactButton = document.getElementById("contact-button");

contactButton.addEventListener("click", function () {
    console.log("The WhatsApp contact button was clicked.");
});
