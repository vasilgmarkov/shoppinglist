const express = require('express');
const router = express.Router();

//Item Model
const Item = require('../../models/Item');

// @route   Get api/items
// @desc    Get All items
// @access  Public

router.get('/', (req, res) => {
  Item.find()
    .sort({date: -1})//DES
    .then(items=> res.json(items));
});

module.exports = router;
