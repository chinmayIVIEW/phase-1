const express = require("express");
const app = express();
const hbs = require("hbs");
const path = require("path");

const partials_path = path.join(__dirname, "../partials_tut/partials");

app.set("view engine", "hbs");
hbs.registerPartials(partials_path);

app.get("/", (req, res) => {
  res.render("home", {
    myname: "chinmay's",
  });
});

app.get("/about", (req, res) => {
  // console.log((req.query).name)
  // console.log(req.query)
  res.render("about", {
    myname: "chinmay's",
  });
});

app.get("/about/*", (req, res) => {
  res.render("404", {
    errorcomment: "Opps this about page is not found",
  });
});

app.get("*", (req, res) => {
  res.render("404", {
    errorcomment: "Opps page not found",
  });
});

app.listen(8000, "127.0.0.1", () => {
  console.log("its a succes from partials tute");
});
