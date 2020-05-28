const { getAllOwners, getOwnerById } = require("./controllers/owners");

const { getPetById, getPetsByOwnerId } = require("./controllers/pets");

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
  getPetById(request, response);
});

app.get("/api/pets/:id", (request, response) => {
  getPetsByOwnerId(request, response);
});
