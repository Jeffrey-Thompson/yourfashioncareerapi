const router = require('express').Router();
const controller = require('../controllers');

// routes
router.get('/', controller.company.index);
router.get('/:id', controller.company.show);
router.post('/', controller.company.create);
router.put('/:id', controller.company.update);
router.delete('/:id', controller.company.destroy);
// Review routes
router.get('/:id/reviews', controller.company.reviewIndex);
router.get('/:id/reviews/:reviewId', controller.company.showReview);
router.post('/:id/reviews', controller.company.createReview);
router.put('/:id/reviews/:reviewId', controller.company.updateReview);
router.delete('/:id/reviews/:reviewId', controller.company.deleteReview);
// exports
module.exports = router;
