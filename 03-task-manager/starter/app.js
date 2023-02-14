const express = require("express");
const app = express();
const router = require("./routes");
const connectDB = require("./connect");
const notFound = require("./notFound");
const errorHandler = require("./errorHandler");
require("dotenv").config();
app.use(express.static("./public"));
app.use(express.json());
app.use("/api/v1/tasks", router);
app.use(notFound);
app.use(errorHandler);
const port = process.env.PORT || 3000;
const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, console.log(`listening on port ${port}`));
  } catch (error) {
    console.log(error);
  }
};
start();
