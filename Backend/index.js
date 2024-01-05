const express = require("express");
const mongoose = require("mongoose");
const app = express();
require("dotenv").config();
const PORT = process.env.PORT || 3000;
app.use(express.json());

const userRoute = require("./Routes/UserRoutes");

app.use("/users", userRoute);

mongoose
  .connect(process.env.DB_CONNECT)
  .then(() => {
    console.log("DB Connected Successfully");
  })
  .catch(() => {
    console.log("Error while connecting DB");
  });

app.listen(PORT, () => {
  console.log("Connected to port 3000");
});
