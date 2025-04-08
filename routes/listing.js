const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");

// Validate
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(res.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");

    throw new ExpressError(400, error);
  } else {
    next();
  }
};
// INDEX ROUTE
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index", { allListings });
  })
);

// NEW ROUTE
router.get(
  "/new",
  wrapAsync(async (req, res) => {
    res.render("listings/new");
  })
);

// SHOW ROUTE
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");
    if (!listing) {
      req.flash("error", " Listing You Requested For Doesn't  Exist !");
      res.redirect("/listing");
    }
    res.render("listings/show", { listing });
  })
);

// CREATE ROUTE
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res) => {
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  })
);

// EDIT ROUTE

router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    if (!listing) {
      req.flash("error", " Listing You Requested For Doesn't  Exist !");
      res.redirect("/listing");
    }
    res.render("listings/edit", { listing });
  })
);

// UPDATE ROUTE
router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const updatedListing = await Listing.findByIdAndUpdate(id, {
      ...req.body.listing,
    });
    req.flash("success", " Listing Updated!");
    res.redirect(`/listings/${id}`);
  })
);

// DELETE
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", " Listing Deleted!");
    res.redirect("/listings");
  })
);

module.exports = router;
