exports.Auth = (req, res, next) => {
    if(req.isAuthenticated()) {
      return next();
    }else {
      res.redirect("/register");
    }
  };

  exports.userAccess = (req, res, next) =>  {
    if(req.user.roll == 'admin'){
        next()
    }else{
        return res.send("No tienes permiso para acceder");
    }
}

exports.dashboardAcc = (req, res, next) =>  {
  if(req.user.roll == 'user' || req.user.roll == 'admin'){
      next()
  }else{
      return res.send("No tienes permiso para acceder");
  }
}