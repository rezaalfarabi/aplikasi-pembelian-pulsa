// FUNGSI HELPER cek login
function checkLogin(req, res, next){
    if (req.session.loggedIn) {
      next()
    } else {
      res.redirect('/login')
    };
  };

  module.exports = checkLogin
