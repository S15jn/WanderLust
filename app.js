const express = require("express");
const app = express();
const mongoose = require("mongoose");
const ejs = require("ejs");
const Listing = require("./models/listing.js");
const path = require("path");

const MONGO_URL = "mongodb://127.0.0.1:27017/wanderlust";

main()
  .then(() => {
    console.log("connected to WanderlustDB ");
  })
  .catch((err) => {
    console.log(err);
  });
async function main() {
  await mongoose.connect(MONGO_URL);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));

// API
app.get("/", (req, res) => {
  res.send("Hi, i am root");
});

// INDEX ROUTE
app.get("/listings", async (req, res) => {
  const allListings = await Listing.find({});
  res.render("listings/index", { allListings });
});

// NEW ROUTE
app.get("/listings/new", async (req, res) => {
  res.render("listings/new");
});

// SHOW ROUTE
app.get("/listings/:id", async (req, res) => {
  let { id } = req.params;
  const listing = await Listing.findById(id);
  res.render("listings/show", { listing });
});

// CREATE ROUTE
app.post("/listings", async (req, res) => {
  const newListing = new Listing(req.body.listing);
  await newListing.save();
  res.redirect("/listings");
});

// EDIT ROUTE

app.get("/listings/:id/edit" ,(req,res)=>{
    
})

app.listen(8000, () => {
  console.log("server is listening to port 8000");
});
