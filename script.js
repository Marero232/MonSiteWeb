const bouton = document.getElementById("btnMessage");
const message = document.getElementById("message");

bouton.addEventListener("click", () => {
  message.textContent = "Merci d’avoir visité mon site 😊";
});
