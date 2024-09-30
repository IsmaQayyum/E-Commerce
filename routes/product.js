import express from 'express';
import { addProduct, fetchProduct, fetchProductbyid, fetchProductbyidandupdate, productdelete } from '../controller/products.js';

const product = express.Router();

product.route('/product').post(addProduct)
product.route('/products').get(fetchProduct)
product.route('/products/:id').get(fetchProductbyid)
product.route('/products/:id').put(fetchProductbyidandupdate)
product.route('/products/:id').delete(productdelete)

export default product;


