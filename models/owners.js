const fs = require("fs");

const createOwner = (data, cb) => {
  data.id = "o" + Date.now();
  fs.writeFile(`./data/owners/${data.id}.json`, JSON.stringify(data), (err) => {
    if (err) cb(err);
    else cb(null, data);
  });
};

const fetchAllOwners = (cb) => {
  let allOwners = [];
  fs.readdir("./data/owners", (err, files) => {
    files.forEach((file) => {
      fs.readFile(`./data/owners/${file}`, "utf8", (err, owner) => {
        allOwners.push(JSON.parse(owner));
        if (err) cb(err);
        else if (allOwners.length === files.length) cb(null, allOwners);
      });
    });
  });
};

// id is a param, cb is a passed a function from the controller
const fetchOwnerById = (id, cb) => {
  fs.readFile(`./data/owners/${id}.json`, "utf8", (err, owner) => {
    if (err) cb(err);
    else cb(null, owner);
  });
};

const updateOwner = (id, data, cb) => {};

const deleteOwnerById = (id, cb) => {};

module.exports = {
  createOwner,
  fetchAllOwners,
  fetchOwnerById,
  updateOwner,
  deleteOwnerById,
};
