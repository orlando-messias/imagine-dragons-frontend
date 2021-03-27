const passwordValidation = (value) => {
  return (value.length >= 3) ? true : false;
};

 // Checks if email is a valid email
 const emailValidation = (email) => {
  const validEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (!validEmail.test(email)) return false;
  return true;
};

module.exports = {
  passwordValidation,
  emailValidation
};