// logout function
const logout = (req, res) => {
  res.clearCookie('access_token');
  res.redirect('/');
};

// exports
module.exports = logout;
