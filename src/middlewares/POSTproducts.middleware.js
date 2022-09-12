function checkName(req, res, next) {
  const { name } = req.body;
  if (name === undefined || name === '' || name === null) {
    return res.status(400).json({ message: '"name" is required' });
  }
  const nameArr = name.split('');
  if (nameArr.length <= 5) {
    return res.status(422).json({ message: '"name" length must be at least 5 characters long' });
  }
  next();
}

module.exports = {
  checkName,
};