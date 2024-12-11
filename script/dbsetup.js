require("dotenv").config();
const { connectDB } = require("../config/db");

const Gold = require("../models/Gold");
const goldData = require("../utils/gold");

connectDB();
const importData = async () => {
  try { 
    await Gold.insertMany(goldData);

    console.log("data inserted successfully!");
    process.exit();
  } catch (error) {
    console.log("error", error);
    process.exit(1);
  }
};

importData(); 
