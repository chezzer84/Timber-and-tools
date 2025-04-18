// Form validation and UI enhancements for contact form
document.addEventListener("DOMContentLoaded", function () {
  // Get form elements
  const contactForm = document.getElementById("contactForm");
  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");
  const phoneInput = document.getElementById("phone");
  const jobDescriptionInput = document.getElementById("job_description");

  // Get error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const phoneError = document.getElementById("phoneError");
  const jobDescriptionError = document.getElementById("jobDescriptionError");

  // Add form submission handler
  contactForm.addEventListener("submit", function (e) {
    // Reset previous error messages
    resetErrors();

    // Validate form
    let isValid = true;

    // Name validation (required, at least 2 characters)
    if (!nameInput.value.trim() || nameInput.value.trim().length < 2) {
      nameError.textContent = "Please enter your name (at least 2 characters)";
      isValid = false;
    }

    // Email validation
    if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address";
      isValid = false;
    }

    // Phone validation
    if (!validatePhone(phoneInput.value.trim())) {
      phoneError.textContent = "Please enter a valid phone number";
      isValid = false;
    }

    // Job description validation (required, at least 10 characters)
    if (
      !jobDescriptionInput.value.trim() ||
      jobDescriptionInput.value.trim().length < 10
    ) {
      jobDescriptionError.textContent =
        "Please describe your job request in at least 10 characters";
      isValid = false;
    }

    // If form is not valid, prevent submission
    if (!isValid) {
      e.preventDefault();
    }
  });

  // Helper functions
  function resetErrors() {
    nameError.textContent = "";
    emailError.textContent = "";
    phoneError.textContent = "";
    jobDescriptionError.textContent = "";
  }

  function validateEmail(email) {
    // Basic email validation regex
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  function validatePhone(phone) {
    // Allow for different phone number formats
    const cleaned = phone.replace(/\D/g, "");
    return cleaned.length >= 10;
  }
});
