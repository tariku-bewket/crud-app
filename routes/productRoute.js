const express = require('express');
const router = express.Router()

const { getAllProducts, getSigleProduct, createProduct,updateProduct, deleteProduct } = require('../controllers/productController.js');


router.get('/', getAllProducts)

router.get('/:id', getSigleProduct)

router.post('/', createProduct);

router.put('/:id', updateProduct);

router.delete('/:id', deleteProduct)

module.exports = router;