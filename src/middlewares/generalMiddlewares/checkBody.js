function checkBody(req, res, next) {
  const { body } = req;
  if (body === {}) {
    return res.status(400).json({ message: '"name" is required' });
  }
  next();
}

module.exports = checkBody;