const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("Estas al inicio delproyecto");
});

router.get("/tasks", (req, res) => {
  res.send("Estas en las tareas del servidor");
});

router.post("/", (req, res) => {
  const data = req.body;
  res.json({
    message: "La respuesta es que fue exitoso el proceso",
  });
});

router.put("/tasks/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: "La data que se envio fue eitosa" });
});

router.delete("/tasks/:id", (req, res) => {
  const id = req.params.id;
  res.json({ message: "La data que se envio fue eitosa" });
});

module.exports = { router };
