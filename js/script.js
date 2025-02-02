function getPersonajeInfo() {
  const personajeInput = document.getElementById("personaje");
  const personajeInfo = document.getElementById("personajeInfo");

  const personaje = personajeInput.value.toLowerCase();

  fetch(`http://localhost:3000/characters/${personaje}`)
    .then((response) => response.json())
    .then((data) => {
      const { name, status, species, gender, origin, image } = data;
      personajeInfo.innerHTML = `
              <h2>${name}</h2>
              <img src="${image}" alt="${name}"/>
              <p>Status: ${status}</p>
              <p>Species: ${species}</p>
              <p>Gender: ${gender}</p>
              <p>Origin: ${origin}</p>
        `;
    })
    .catch((error) => {
      personajeInfo.innerHTML = `<p>Imposible acceder al personaje</p>`;
    });
}
