document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contactForm");
    const submitForm = document.getElementById("submitForm");

    submitForm.addEventListener("click", function () {
        const subject = document.getElementById("subject");
        const firstName = document.getElementById("first-name");
        const lastName = document.getElementById("last-name");
        const email = document.getElementById("email");
        const message = document.getElementById("message");

        
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach((error) => (error.textContent = ""));

        let isValid = true;

        if (subject.value === "") {
            document.getElementById("subjectError").textContent = "Subject is required";
            isValid = false;
        }

        if (firstName.value === "") {
            document.getElementById("firstNameError").textContent = "First Name is required";
            isValid = false;
        }

        if (lastName.value === "") {
            document.getElementById("lastNameError").textContent = "Last Name is required";
            isValid = false;
        }

        if (email.value === "") {
            document.getElementById("emailError").textContent = "Email is required";
            isValid = false;
        }

        if (message.value === "") {
            document.getElementById("messageError").textContent = "Message is required";
            isValid = false;
        }

        if (isValid) {
            
            alert("Form submitted successfully.");
        }
    });
});