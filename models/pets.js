const createPet = (ownerId, data, cb) => {
  data.id = "o" + Date.now();
  fs.writeFile(`./data/pets/${data.id}.json`, JSON.stringify(data), (err) => {
    if (err) cb(err);
    else cb(null, data);
  });
};

const fetchPetById = (id, cb) => {
  fs.readFile(`./data/pets/${id}.json`, "utf8", (err, pet) => {
    if (err) cb(err);
    else cb(null, pet);
  });
};

const fetchPetsByOwnerId = (ownerId, cb) => {
  // Get all pets and filter only pets belonging to owner
  const allPets = [];
  for (let i = 1; i < 14; i++) {
    fs.readFile(`./data/pets/${id}.json`, "utf8", (err, pet) => {
      if (err) cb(err);
      else cb(null, pet);
    }).push(allPets);
  }
};

const deletePetById = (id, cb) => {};

module.exports = {
  createPet,
  fetchPetById,
  fetchPetsByOwnerId,
  deletePetById,
};
