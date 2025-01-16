document
  .getElementById("signupForm")
  .addEventListener("submit", function (event) {
    const dateNaissance = new Date(
      document.getElementById("floatingDateNaissance").value
    );
    const age = calculateAge(dateNaissance);

    if (age < 18) {
      event.preventDefault(); // Empêche l'envoi du formulaire
      alert("Vous devez être majeur pour vous inscrire.");
    }
  });

// Fonction pour calculer l'âge à partir de la date de naissance
function calculateAge(birthDate) {
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDifference = today.getMonth() - birthDate.getMonth();

  if (
    monthDifference < 0 ||
    (monthDifference === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
}
