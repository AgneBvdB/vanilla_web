// navbar toggle
document.addEventListener("DOMContentLoaded", () => {
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}))
});

// EmailJs initialize

(function(){
    emailjs.init("sPrAzL76zQ6Lp9Rqp");
})();

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const serviceID = "service_l242rda";
    const templateID = "template_0k7c9jk";

    const templateParams = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value
    };

    emailjs.send(serviceID, templateID, templateParams).then(() => {
        alert("Ačiū, žinutė išsiųsta!");
        form.reset();
    }, (err) => {
        alert("O ne! Nepavyko... Bandyk iš naujo.");
        console.error(err);
    });
});