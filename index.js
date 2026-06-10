const express = require("express");
const path = require("path");
const app = express();
app.use(express.json());

const state = [
  { id: 1, nom: "Azad", prenom: "Gulam hussain" },
];

app.get("/status", (req, res) => {
  res.json(state);
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});
app.listen(3000, () => {
  console.log("Listen on http://localhost:3000");
});
