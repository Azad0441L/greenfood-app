const express = require("express");
const app = express();
app.use(express.json());

const state = [
  { id: 1, nom: "Azad", prenom: "Gulam hussain" },
];
app.get("/status", (req, res) => {
  res.json(state);
});