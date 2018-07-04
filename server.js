const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const items = require("./routes/api/items");

// DBConfig
const db = require("./config/keys").mongoURI;

const app = express();

// Body parser middleware
app.use(bodyParser.json());

//Connect to Mongo
mongoose
  .connect(db)
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.error(err));

app.use("/api/items/", items);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));
