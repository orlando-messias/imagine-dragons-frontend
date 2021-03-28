const modalValidation = (value) => {
  return (value.length >= 3) ? true : false;
};

module.exports = { modalValidation };