const validateDescriptionValue = (descriptionValue, res, value) => {
  if (!descriptionValue) {
    return res
      .status(400)
      .json({ message: `O campo ${value} é obrigatório` });
  }
};

const validateDescription = (req, res, next) => {
    const { description } = req.body;

    return validateDescriptionValue(description, res, 'description')
    || validateDescriptionValue(description.createdAt, res, 'createdAt')
    || validateDescriptionValue(description.rating, res, 'rating')
    || validateDescriptionValue(description.difficulty, res, 'difficulty')
    || next();
};

module.exports = validateDescription;