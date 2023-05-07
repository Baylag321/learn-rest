const Category = require("../models/Category");
const MyError = require("../utils/myError");

exports.getCategories = async (req, res, next) => {
  try {
    const categories = await Category.find();

    res.status(200).json({
      success: true,
      data: categories,
    });
  } catch (err) {
    next(err);
  }
};

exports.getCategory = async (req, res, next) => {
  try {
    const category = await Category.findById(req.params.id);

    if (!category) {
      throw new MyError(req.params.id + " ID-тэй категори байхгүйээээ.", 400);
    }

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (err) {
    next(err);
  }
};

exports.createCategory = async (req, res, next) => {
  console.log("data: ", req.body);

  try {
    const category = await Category.create(req.body);

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (err) {
    next(err);
  }
};

exports.updateCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!category) {
      throw new MyError(req.params.id + " ID-тэй категори байхгүйээээ.", 400);
    }

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (err) {
    next(err);
  }
};

exports.deleteCategory = async (req, res, next) => {
  try {
    const category = await Category.findByIdAndDelete(req.params.id);

    if (!category) {
      throw new MyError(req.params.id + " ID-тэй категори байхгүйээээ.", 400);
    }

    res.status(200).json({
      success: true,
      data: category,
    });
  } catch (err) {
    next(err);
  }
};
