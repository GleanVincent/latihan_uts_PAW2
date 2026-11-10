const express = require('express');
const router = express.Router();
const gameController = require('../controllers/timController');
const cekApiKey = require('../middlewares/cekApiKey');

router.get('/', gameController.getAll);
router.get('/:id', gameController.getById);
router.post('/', cekApiKey, gameController.create);
router.put('/:id', cekApiKey, gameController.update);
router.delete('/:id', cekApiKey, gameController.remove);

module.exports = router;