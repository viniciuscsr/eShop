import Product from '../models/productModel.js';
import asyncHandler from 'express-async-handler';

// @description fetch all products
// @route GET /api/products

const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  res.json(products);
});

// @description fetch products by id
// @route GET /api/products/:id

const getProductById = asyncHandler(async (req, res) => {
  const product = await Product.findById(req.params.id);
  if (product) {
    res.json(product);
  } else {
    res.status(404);
    throw new Error('Product not found');
  }
});

export { getProducts, getProductById };
