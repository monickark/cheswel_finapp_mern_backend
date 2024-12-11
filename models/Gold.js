const mongoose = require("mongoose");
const goldSchema = new mongoose.Schema(
  {

    goldName: {
      type: String,
      required: true,
    },
    purchasedDate: {
      type: Date,
      required: true,
    },
    purchasedGram: {
      type: Number,
      required: true,
    },
    wastageGram: {
      type: Number,
      required: true,
    },
    gramPrice: {
      type: Number,
      required: true,
    },
    amount: {
      type: Number,
      required: true,
    },
    remarks: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      lowercase: true,
      enum: ["show", "hide"],
      default: "show",
    },
  },
  {
    timestamps: true,
  }
);

const gold = mongoose.model("gold", goldSchema);
module.exports = gold;
