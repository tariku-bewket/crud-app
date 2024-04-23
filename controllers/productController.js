const Product = require('../models/productModel.js');

// Get all products
const getAllProducts = async (req, res) => {
  try {
    const products = await Product.find({})
    res.send(products)
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

// Get single product by Id
const getSigleProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const products = await Product.findById(id)
    res.send(products)
  } catch (error) {
    res.status(500).json({message: error.message})
  }   
}

// Create a product
const createProduct = async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Update a product
const updateProduct = async (req, res) => {
  try {
    const {id} = req.params
    const product = await Product.findByIdAndUpdate(id, req.body);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    const updatedProduct = await Product.findById(id)

    res.status(201).json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

// Delete Product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;

    const product = await Product.findByIdAndDelete(id)
    
    if (!product) {
      return res.status(404).json({message: "Product not found"})
    }

    res.status(201).json({message: "Product deleted successfully"})
    
  } catch (error) {
    res.status(500).json({message: error.message})
  }
}

module.exports = {
  getAllProducts,
  getSigleProduct,
  createProduct,
  updateProduct,
  deleteProduct
}