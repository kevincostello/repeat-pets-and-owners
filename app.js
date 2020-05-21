const {
  getAllOwners,
  getOwnerById,
  fetchPetById,
  getPetsByOwnerId,
} = require("./controllers/owners");

const express = require("express");
const app = express();

app.listen(9090, () => {
  console.log(`Server is listening on port 9090...`);
});

app.get("/api/owners", (request, response) => {
  getAllOwners(request, response);
});

app.get("/api/owners/:id", (request, response) => {
  getOwnerById(request, response);
});

app.get("/api/pets/:id", (request, response) => {
  fetchPetById(request, response);
});

app.get("/api/pets/:id", (request, response) => {
  getPetsByOwnerId(request, response);
});
