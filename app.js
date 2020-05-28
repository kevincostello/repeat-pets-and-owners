const { getAllOwners, getOwnerById } = require("./controllers/owners");

const { getPetById, getPetsByOwnerId } = require("./controllers/pets");

const express = require("express");
const app = express();

app.use(express.json());

app.listen(9090, () => {
  console.log(`Server is listening on port 9090...`);
});

app.get("/api/owners", (request, response) => {
  getAllOwners(request, response);
});

// to use next in controller, the get request has to be called with next
// app.get("/api/owners/:id", (request, response, next) => {
//   getOwnerById(request, response, next);
// });

// this automatically calls getOwnerById with request, response, next
app.get("/api/owners/:id", getOwnerById);

// to use error function this will have to have next included or just refactor it as for getOwnerById above
// app.get("/api/pets/:id", (request, response) => {
//   getPetById(request, response);
// });

app.get("/api/pets/:id", getPetById);

app.get("/api/pets/owner/:id", (request, response) => {
  getPetsByOwnerId(request, response);
});

app.use(function errorHandler(err, req, res, next) {
  console.log("error is here: ", err);
  // res.status(500).send("Resource not found in here");
  res.status(500).send(err);
});
