const bodyParser = require("body-parser");
const express = require("express");
const route = express.Router();
const { allowedNodeEnvironmentFlags } = require("process");
const app = express();
const port = 9000;
const {
  getUsers,
  createUsers,
  readUsers,
  updateUsers,
  deleteUsers,
} = require("./users/users.service");
const { urlencoded } = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  return res.status(200).send("info mase");
});

app.get("/users", getUsers);

app.post("/users", createUsers);

app.get("/users/:userId", readUsers);

app.put("/users/:userId", updateUsers);

app.delete("/users/:userId", deleteUsers);

app.listen(port, () =>
  console.log("server started and listen on port " + port)
);
