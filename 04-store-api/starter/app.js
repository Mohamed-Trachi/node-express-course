require("dotenv").config();
require("express-async-errors");
const express = require("express");
const connectDB = require("./db/connect");
const app = express();
const notFound = require("./middleware/not-found");
const errorMiddleware = require("./middleware/error-handler");
const router = require("./routes/products");
app.use(express.json());
app.get("/", (req, res) => {
  res.send("<h1>store api</h1><a href='/api/v1/products'>products route</a>");
});
app.use("/api/v1/products", router);
app.use(notFound);
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
