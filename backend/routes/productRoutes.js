import express from 'express';
const router = express.Router();
import {
  getProducts,
  getProductById,
  deleteProduct,
  createProduct,
  updateProduct,
  createProductReview,
  getTopProducts,
  getHeadphones,
  getEarphones,
  getProfessionalHeadphones,
  getEarbuds,
} from '../controllers/productController.js';
import { protect, admin } from '../middleware/authMiddleware.js';

router.route('/').get(getProducts).post(protect, admin, createProduct);
router.route('/:id/reviews').post(protect, createProductReview);
router.get('/top', getTopProducts);
router
  .route('/:id')
  .get(getProductById)
  .delete(protect, admin, deleteProduct)
  .put(protect, admin, updateProduct);

router.route('/category/headphones').get(getHeadphones);
router.route('/category/earphones').get(getEarphones);
router
  .route('/category/professional-headphones')
  .get(getProfessionalHeadphones);
router.route('/category/earbuds').get(getEarbuds);

export default router;
