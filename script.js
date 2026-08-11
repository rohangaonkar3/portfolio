/*

* Portfolio Website
* Minimal JavaScript for accessibility and form interaction
  */

document.addEventListener("DOMContentLoaded", function () {

```
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
```

});
