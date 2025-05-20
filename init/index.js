require("dotenv").config();
const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");

const dbUrl = process.env.ATLASDB_URL;
if (!dbUrl) {
  console.error("ATLASDB_URL is undefined. Please check your .env file.");
  process.exit(1);
}
console.log(" DB URL from .env:", dbUrl);

const connectDB = async () => {
  try {
    await mongoose.connect(dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(" Connected to WanderlustDB");
  } catch (err) {
    console.error("Database connection error:", err.message);
    process.exit(1);
  }
};

const initDB = async () => {
  try {
    console.log(" Clearing existing data...");
    await Listing.deleteMany({});
    console.log(" Inserting new data...");

    const modifiedData = initData.data.map((obj) => ({
      ...obj,
      owner: "67f4eb9055c993932d243f07",
    }));

    await Listing.insertMany(modifiedData);
    console.log("Data was successfully initialized!");
  } catch (err) {
    console.error("Error during DB initialization:", err.message);
  }
};
const run = async () => {
  await connectDB();
  await initDB();
  mongoose.connection.close();
};

run();
