// script.js
document.addEventListener("DOMContentLoaded", function () {
  emailjs.init("YOUR_PUBLIC_KEY"); // Substitua pelo seu public key do EmailJS

  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      const name = document.getElementById("name").value;
      const phone = document.getElementById("phone").value;
      const email = document.getElementById("email").value;
      const message = document.getElementById("message").value;

      emailjs
        .send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
          name,
          phone,
          email,
          message,
        })
        .then(
          function () {
            alert("Mensagem enviada com sucesso!");
          },
          function (error) {
            alert("Ocorreu um erro, tente novamente.");
          }
        );
    });
});
