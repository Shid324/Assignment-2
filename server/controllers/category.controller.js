const { Category } = require('../models/category.model');

const create = async (req, res) => {
  const category = new Category(req.body);
  try {
    await category.save();
    return res.status(200).json({
      message: 'Category created successfully!'
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const read = async (req, res) => {
  try {
    const categories = await Category.find();
    return res.status(200).json(categories);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const update = async (req, res) => {
  try {
    let category = req.category;
    category = extend(category, req.body);
    category.updated = Date.now();
    await category.save();
    return res.status(200).json(category);
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

const remove = async (req, res) => {
  try {
    let category = req.category;
    await category.remove();
    return res.status(200).json({
      message: 'Category deleted successfully!'
    });
  } catch (err) {
    return res.status(400).json({
      error: errorHandler.getErrorMessage(err)
    });
  }
};

module.exports = { create, read, update, remove };
