const express = require("express");
const app = express();
const path = require("path");

app.set("port", 4000);
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))

app.get("/", (req, res) => {
  res.render("index", {usuario: "andres"})
})

app.listen(app.get("port"), () => {
  console.log("port", app.get("port"))
})