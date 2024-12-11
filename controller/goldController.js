const Gold = require("../models/Gold");
const { mongo_connection } = require("../config/db"); // CCDev

const addGold = async (req, res) => {
  try {
    const newGold = new Gold(req.body);
    await newGold.save();
    res.send({
      message: "Gold added successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const addAllGold = async (req, res) => {
  try {
    await Gold.insertMany(req.body);
    res.send({ message: "All zones added successfully!" });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getAllGolds = async (req, res) => {
  // console.log('get all Gold')
  try {
    const Golds = await Gold.find({});
    console.log('Golds',Golds)
    res.send(Golds);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getShowingGold = async (req, res) => {
  try {
    // console.log('get showing Gold')
    const Golds = await Gold.find({ status: "show" }).sort({
      _id: -1,
    });
    res.send(Golds);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const getGoldById = async (req, res) => {
  try {
    const Gold = await Gold.findById(req.params.id);
    res.send(Gold);
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateGold = async (req, res) => {
  try {
    const Gold = await Gold.findById(req.params.id);
    if (Gold) {
      Gold.name = req.body.name;
      Gold.iso_code = req.body.iso_code;
      Gold.flag = req.body.flag;
      Gold.status = req.body.status;
    }
    await Gold.save();
    res.send({
      message: "Gold update successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateManyGold = async (req, res) => {
  try {
    await Gold.updateMany(
      { _id: { $in: req.body.ids } },
      {
        $set: {
          status: req.body.status,
        },
      },
      {
        multi: true,
      }
    );

    res.send({
      message: "Golds update successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const updateStatus = async (req, res) => {
  try {
    const newStatus = req.body.status;

    await Gold.updateOne(
      { _id: req.params.id },
      {
        $set: {
          status: req.body.status,
        },
      }
    );
    res.status(200).send({
      message: `Gold ${
        newStatus === "show" ? "Published" : "Un-Published"
      } Successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteGold = async (req, res) => {
  try {
    await Gold.deleteOne({ _id: req.params.id });
    res.send({
      message: "Delete Gold successfully!",
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

const deleteManyGold = async (req, res) => {
  try {
    await Gold.deleteMany({ _id: req.body.ids });
    res.send({
      message: `Gold Delete Successfully!`,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message,
    });
  }
};

module.exports = {
  addGold,
  addAllGold,
  getAllGolds,
  getShowingGold,
  getGoldById,
  updateGold,
  updateStatus,
  deleteGold,
  updateManyGold,
  deleteManyGold,
};
