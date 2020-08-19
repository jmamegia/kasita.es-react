const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const routes = require("./Routes/routes");
const cors = require("cors");
const port = 3001;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

function start() {
  app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
  });
}

module.exports = start;
