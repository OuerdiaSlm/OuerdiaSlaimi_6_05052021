// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll("#modal-btn");
const formData = document.querySelectorAll(".formData");
const closeModalX = document.querySelectorAll(".close");

function newFunction() {
  return "#close";
}

// launch modal forms
function launchModal() {
  modalbg.style.display = "block";
  //document.getElementById("modal-btn").focus();
}

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// Close Modal event
closeModalX.forEach((btn) => btn.addEventListener("click", closeModal));

// close modal form
function closeModal() {
  modalbg.style.display = "none";
}

// RACOURCI CLAVIER ESCAPE Formulaire...........................
window.addEventListener("keydown", function (eventEscapeFormulaire) {
  if (eventEscapeFormulaire.key == "Escape") {
    // Fermeture de la modal Formulaire

    modalbg.style.display = "none";
  }
});

// Evenement d'envoie du formulaire
document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  validate();
});

// Verification des donnèes formulaire
function validate() {
  let prenom = document.getElementById("first");
  let nom = document.getElementById("last");
  let email = document.getElementById("email");
  let styleEmail = document.getElementById("email");
  let msg = document.getElementById("msg");

  // Gestion des erreurs
  // conditions prenom
  let error = 0;
  if (prenom.value.length < 2) {
    error++;
    let errorSpan = document.getElementById("errorFirst");
    errorSpan.textContent = "Le prénom fait moins de 2 caractères";
    first.style.border = "2px solid red";
  } else {
    document.getElementById("errorFirst").textContent = "";
    first.style.border = "2px solid green";
  }

  // Condition nom
  if (nom.value.length < 2) {
    error++;
    let errorSpan = document.getElementById("errorLast");
    errorSpan.textContent = "Le prénom fait moins de 2 caractères";
    last.style.border = "2px solid red";
  } else {
    document.getElementById("errorLast").textContent = "";
    last.style.border = "2px solid green";
  }

  // Condition email
  if (email.value.length < 1 || !validateEmail(email.value)) {
    error++;
    let errorSpan = document.getElementById("errorEmail");
    errorSpan.textContent =
      "Veuillez respecter le format email : exemple@domaine.com";
    styleEmail.style.border = "2px solid red ";
  } else {
    document.getElementById("errorEmail").textContent = "";
    styleEmail.style.border = "2px solid green ";
  }

  if (msg.value.length < 2) {
    error++;
    let errorSpan = document.getElementById("errorMsg");
    errorSpan.textContent = "Le message fait moins de 2 caractères";
    msg.style.border = "2px solid red";
  } else {
    document.getElementById("errorMsg").textContent = "";
    msg.style.border = "2px solid green";
  }

  // Condition d'apparition du message de validation si aucune erreur est presente
  if (error == 0) {
    validation.style.display = "block";
  } else {
    validation.style.display = "none";
  }
}

// Condition email regex
function validateEmail(mail) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    mail
  );
}
