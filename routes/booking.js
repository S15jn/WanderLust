const express = require("express");
const router = express.Router();
const Booking = require("../models/booking");
const { isLoggedIn } = require("../middleware");

router.get("/book", isLoggedIn, (req, res) => {
  res.render("bookings/book");
});

router.post("/", isLoggedIn, async (req, res) => {
  const { name, rooms, guests, days } = req.body;

  const pricePerRoomPerDay = 1000;
  const totalPrice = rooms * days * pricePerRoomPerDay;

  const booking = new Booking({
    user: req.user._id,
    name,
    rooms,
    guests,
    days,
    totalPrice,
  });

  await booking.save();

  req.flash("success", "Booking successful! Proceed to payment ");
  res.redirect(`/bookings/${booking._id}/payment`);
});

router.get("/:id/payment", isLoggedIn, async (req, res) => {
  const booking = await Booking.findById(req.params.id);
  res.render("bookings/payment", { booking });
});

module.exports = router;
