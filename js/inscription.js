// recuperation du formulaire
const form = document.getElementById("myForm");

// ajout d'un écouteur d'événement sur le formulaire
form.addEventListener("submit", async (event) => {
  // j'empêche le rechargement de la page
  event.preventDefault();

  // recuperation des données du formulaire
  const formData = new FormData(form);

  const data = []; // traformation des données en objet
  formData.forEach((value , key) => {
    data[key] = value;
  });

  // soumission de la data a l'api
  try {
    const reponse = await fetch("http://localhost/apiprojet/inscription", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(data)
    })

    if(reponse.ok){
      console.error("erreur de l'api ", reponse.status)
      alert("Erreur lors de l'nvoi des données")
    } else {
      const reponseData = await reponse.json()
      console.log("reponse de l'api", reponseData)
      alert("Votre inscription a bien été prise en compte")

    }
  } catch (error) {
    // Gérer les erreurs réseau
    console.error("Erreur réseau :", error);
    alert("Une erreur réseau s'est produite.");
  }



});
