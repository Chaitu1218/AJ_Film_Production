const menu = document.getElementById("menu");
const navLinks = document.getElementById("nav-links");
const links = document.querySelectorAll(".nav-links a");

// Toggle menu
menu.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});

// Close menu when clicking any link
links.forEach(link => {
    link.addEventListener("click", () => {
        navLinks.classList.remove("active");
    });
});


// Smooth scrolling for nav links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function sendToWhatsApp() {
    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();
    let message = document.getElementById("message").value.trim();

    // Basic validation
    if (!name || !phone || !email || !message) {
        alert("Please fill in all fields!");
        return;
    }

    let formattedMessage =
        "New Inquiry for your work : %0A%0A" +
        "Name: " + name + "%0A" +
        "Phone: " + phone + "%0A" +
        "Email: " + email + "%0A" +
        "Message: " + message;

    let whatsappUrl = "https://api.whatsapp.com/send?phone=918320130497&text=" + formattedMessage;

    window.open(whatsappUrl, "_blank");
}