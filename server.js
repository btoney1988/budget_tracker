import express, { urlencoded, json, static } from "express";
import logger from "morgan";
import { connect } from "mongoose";
import compression from "compression";

const PORT = process.env.PORT || 3000;

const app = express();

app.use(logger("dev"));

app.use(compression());
app.use(urlencoded({ extended: true }));
app.use(json());

app.use(static("client"));

connect(process.env.MONGODB_URI || "mongodb://localhost/budget", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true
});

// routes
app.use(require("./routes/api.js"));

app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});