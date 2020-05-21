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

module.exports = {
  getPetsByOwnerId,
};
