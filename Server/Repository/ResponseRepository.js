exports.success = function (res, data) {
  return res.status(200).json(data);
};

exports.error = function (res, message) {
  return res.status(400).json({ message: message });
};
