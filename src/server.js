require("dotenv").config();
const express = require("express");

const configViewEngine = require("./config/viewEngine");
const webRoutes = require("./routes/web.js");
const connection = require("./config/database");

const app = express();
const port = process.env.PORT || 8888;
const hostname = process.env.HOST_NAME;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

configViewEngine(app);

app.use("/", webRoutes);

app.listen(port, hostname, () => {
  console.log(`listening on port ${port}`);
});
