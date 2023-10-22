import Product from './models/product.js';

export const listProducts = async (req, res) => {
  const products = await Product.find({});
  res.json(products);
};

export const getProduct = async (req, res) => {
  const product = await Product.findById(req.params.id);
  res.json(product);
};

export const createProduct = async (req, res) => {
  const product = new Product(req.body);
  await product.save();
  res.json(product);
};

export const updateProduct = async (req, res) => {
  const product = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(product);
};

export const deleteProduct = async (req, res) => {
  await Product.findByIdAndRemove(req.params.id);
  res.json({ message: 'Product deleted' });
};
