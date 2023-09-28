const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 3000;

app.set("port", port);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
  res.render("index", {usuario: "andres"})
})

app.listen(app.get("port"), () => {
  console.log("port", port)
})