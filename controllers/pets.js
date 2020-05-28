const {
  createPet,
  fetchPetById,
  fetchPetsByOwnerId,
  deletePetById,
} = require("../models/pets.js");

const getPetsByOwnerId = (request, response, next) => {
  fetchPetsByOwnerId((err, owners) => {
    if (err) next(err);
    else {
      response.status(200).send(owners);
    }
  });
};

const getPetById = (request, response, next) => {
  const { id } = request.params;
  fetchPetById(id, (err, pet) => {
    if (err) next(err);
    else {
      response.status(200).send(pet);
    }
  });
};

module.exports = {
  getPetsByOwnerId,
  getPetById,
};
