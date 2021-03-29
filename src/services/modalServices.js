const modalValidation = (value) => {
  return (value.trim().length >= 3) ? true : false;
};

module.exports = { modalValidation };