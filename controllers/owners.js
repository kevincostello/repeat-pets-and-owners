const {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
} = require("../models/owners.js");

const getAllOwners = (request, response, next) => {
  fetchAllOwners((err, owners) => {
    if (err) next(err);
    else {
      response.status(200).send(owners);
    }
  });
};

const getOwnerById = (request, response, next) => {
  const { id } = request.params;
  fetchOwnerById(id, (err, owner) => {
    if (err) next(err);
    else {
      response.status(200).send(owner);
    }
  });
};

module.exports = {
  getAllOwners,
  getOwnerById,
};
