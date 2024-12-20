document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contact-form");
    const formResponse = document.getElementById("form-response");
  
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
  
      const name = document.getElementById("name").value.trim();
      const message = document.getElementById("message").value.trim();
  
      if (!name || !message) {
        formResponse.textContent = "All fields are required.";
        formResponse.classList.add("text-danger");
        return;
      }
  
      // Simulate successful submission
      formResponse.textContent = "Thank you for contacting us! We'll get back to you soon.";
      formResponse.classList.remove("text-danger");
      formResponse.classList.add("text-success");
  
      // Reset the form
      contactForm.reset();
    });
  });
  