/*
 * Portfolio Website
 * Accessibility, form interaction, and theme switching
 */

document.addEventListener("DOMContentLoaded", function () {

    // Contact form
    const contactForm = document.querySelector("form");

    if (contactForm) {
        contactForm.addEventListener("submit", function (event) {

            event.preventDefault();

            const existingMessage =
                document.querySelector("#form-status");

            if (existingMessage) {
                existingMessage.remove();
            }

            const statusMessage = document.createElement("p");

            statusMessage.id = "form-status";
            statusMessage.setAttribute("role", "status");
            statusMessage.setAttribute("aria-live", "polite");

            statusMessage.textContent =
                "Thank you for your message. Your form has been submitted successfully.";

            contactForm.appendChild(statusMessage);

            contactForm.reset();
        });
    }

    // Light/Dark mode
    const themeToggle = document.getElementById("themeToggle");

    if (themeToggle) {
        themeToggle.addEventListener("click", function () {

            const currentTheme =
                document.documentElement.getAttribute("data-theme");

            if (currentTheme === "dark") {
                document.documentElement.removeAttribute("data-theme");
                themeToggle.textContent = "🌙 Dark Mode";
            } else {
                document.documentElement.setAttribute("data-theme", "dark");
                themeToggle.textContent = "☀️ Light Mode";
            }

        });
    }

});
