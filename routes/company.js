const router = require('express').Router();
const controller = require('../controllers');

// routes
router.get('/', controller.company.index);
router.get('/:id', controller.company.show);
router.post('/', controller.company.create);
router.put('/:id', controller.company.update);
router.delete('/:id', controller.company.destroy);

// exports
module.exports = router;
