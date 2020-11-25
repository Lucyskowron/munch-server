const express = require("express");
const app = express();
const { PORT } = require('./utils/constants');

app.get("/panda", (request, response) => {
  response.send("bamboo");
});

app.listen(PORT, () => {
  console.log("bamboo");
  console.log(`Example app listening at http://localhost:${PORT}`);
})

