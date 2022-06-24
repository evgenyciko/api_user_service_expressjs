const crypto = require("crypto");
const users = [];

const getUsers = (req, res) => {
  return res.send(users);
};

const createUsers = (req, res) => {
  const newUser = req.body;
  const id = crypto.randomBytes(6).toString("hex");
  console.log(newUser);
  newUser.id = id;
  users.push(newUser);
  return res.json(users);
};

const readUsers = (req, res) => {
  console.log(req.params);
  const findUser = users.find((user) => user.nama == req.params.userId);
  return res.send(findUser);
};

const updateUsers = (req, res) => {
  console.log(req.body.nama);
  const findUser = users.find((user) => user.nama == req.params.userId);
  findUser.nama = req.body.nama;
  findUser.password = req.body.password;

  return res.send(findUser);
};

const deleteUsers = (req, res) => {
  console.log(req.params);
  const findUser = users.find((user) => user.nama == req.params.userId);
  const removeIndex = users.findIndex((user) => user.id === findUser.id);
  // remove object
  users.splice(removeIndex, 1);
  return res.send(users);
};

module.exports = { getUsers, createUsers, readUsers, updateUsers, deleteUsers };
