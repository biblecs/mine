const express = require('express');
const router = express.Router();
const sampleController = require('../controllers/sampleController');

router.get('/sample', sampleController.getSample);
router.post('/sample', sampleController.createSample);

module.exports = router;