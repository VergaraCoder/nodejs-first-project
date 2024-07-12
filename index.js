const express = require("express");
const { router } = require("./routes/tasks");

const PORT = 3001;

const app = express();

app.use(router);

app.listen(PORT, () => {
  console.log("Abrimos en el puerto " + PORT);
});
