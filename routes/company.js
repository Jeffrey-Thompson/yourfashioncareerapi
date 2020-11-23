const router = require('express').Router();
const controller = require('../controllers');

// routes
router.get('/', controller.companies.index);
router.get('/:id', controller.companies.show);
router.post('/', controller.companies.create);
router.put('/:id', controller.companies.update);
router.delete('/:id', controller.companies.destroy);
// Review routes
router.get('/:id/reviews', controller.companies.reviewIndex);
router.get('/:id/reviews/:reviewId', controller.companies.showReview);
router.post('/:id/reviews', controller.companies.createReview);
router.put('/:id/reviews/:reviewId', controller.companies.updateReview);
router.delete('/:id/reviews/:reviewId', controller.companies.deleteReview);
// exports
module.exports = router;
