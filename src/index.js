require("./models/User");
require("./models/Track");

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const authRoutes = require("./routes/authRoutes");
const trackRoutes = require("./routes/trackRoutes");
const requireAuth = require("./middlewares/requireAuth");

const app = express();

app.use(bodyParser.json());
app.use(authRoutes);
app.use(trackRoutes);

const mongoUri = "mongodb+srv://sgadmin:OCzsF7Ev0QfD0pWm@nativetestcluster.mubu8mw.mongodb.net/test";
mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
  console.log("connected 2 mongo");
});
mongoose.connection.on("error", (error) => {
  console.error("some weird crap happened", error);
});
app.get("/", requireAuth, (req, res) => {
  res.send("heyyo");
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
