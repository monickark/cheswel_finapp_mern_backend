const express = require('express');
const router = express.Router();

const {
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
} = require('../controller/goldController');

// add a gold
router.post('/add', addGold);

// add all gold
router.post('/add/all', addAllGold);

// get only showing gold
router.get('/show', getShowingGold);

// get all gold
router.get('/all', getAllGolds);

// get a gold
router.get('/:id', getGoldById);

// update a gold
router.put('/:id', updateGold);

// update many gold
router.patch('/update/many', updateManyGold);

// show/hide a gold
router.put('/status/:id', updateStatus);

// delete a gold
router.patch('/:id', deleteGold);

//delete many gold
router.patch('/delete/many', deleteManyGold);

module.exports = router;
