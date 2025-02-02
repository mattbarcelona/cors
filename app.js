const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();

app.use(cors());

app.get("/characters/:personaje", async (req, res) => {
  const personaje = req.params.personaje;
  const url = `https://rickandmortyapi.com/api/character/?name=${personaje}`;

  try {
    const response = await axios.get(url);

    if (!response.data.results || response.data.results.length === 0) {
      return res.status(404).json({ error: "Personaje no encontrado" });
    }

    const { name, status, species, gender, origin, image } =
      response.data.results[0];

    res.json({ name, status, species, gender, origin: origin.name, image });
  } catch (error) {
    res.status(500).json({ error: "Error al obtener los datos" });
  }
});

app.listen(3000, () => {
  console.log("Express está escuchando en el puerto http://localhost:3000");
});
