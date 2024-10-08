let googleForm = document.getElementById("custom-google-form");
let emailInput = document.getElementById("input-email");
let messageText = document.getElementById("input-message");
const customToast = document.getElementById("custom-toast");
const alertMsg = document.getElementById("alert-message");
const customToastBtn = document.getElementById("alert-ok-btn");
googleForm.addEventListener("submit", function (event) {
  event.preventDefault();
  // Create a FormData object to handle the form data
  const formData = new FormData(this);

  // Testing
  alertMsg.innerText = "Hold tight!";
  customToastBtn.style.display = "none";
  customToast.classList.add("custom-toast-visible-class");

  // Send the form data using fetch
  fetch(this.action, {
    method: "POST",
    body: formData,
    mode: "no-cors", // No CORS required for Google Forms
  })
    .then(() => {
      // Clear input fields after submission
      emailInput.value = "";
      messageText.value = "";

      // Remove processing
      alertMsg.innerText = "";
      customToastBtn.style.display = "flex";
      customToast.classList.remove("custom-toast-visible-class");

      alertMsg.innerText =
        "Message received! Your words are now officially in my inbox—I'll get back to you soon, PROMISE!";
      customToast.classList.add("custom-toast-visible-class");
      //   alert("Form submitted successfully!");
    })
    .catch((error) => {
      console.error("Error submitting the form:", error);
      alertMsg.innerText = "Form submission failed. Please try again.";
      customToast.classList.add("custom-toast-visible-class");
      //   alert("Form submission failed. Please try again.");
    });
});

customToastBtn.addEventListener("click", () => {
  customToast.classList.remove("custom-toast-visible-class");
});
