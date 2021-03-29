const passwordValidation = (value) => {
  const spaces = /^\S*$/;
  return (value.length >= 3 && spaces.test(value)) ? true : false;
};

 // Checks if email is a valid email
 const emailValidation = (email) => {
  const validEmail = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/;
  if (!validEmail.test(email)) return false;
  return true;
};

const isLogin = () => {
  return localStorage.getItem('user') ? true : false
};

module.exports = {
  passwordValidation,
  emailValidation,
  isLogin
};