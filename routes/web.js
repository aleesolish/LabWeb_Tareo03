let router = require('express').Router();
let homepageController = require('../controllers/HomepageController');
let authController = require('../controllers/AuthController');
let authValidator = require('../validators/AuthValidators');
let passport = require('passport');
let permisos = require('../validators/permisos');
let userController = require ('../controllers/userController');

router.get('/', homepageController.index);

// Authentication routes
router.get('/login', authController.login);
router.get('/register', authController.register);

router.get('/users', permisos.Auth, permisos.userAccess, userController.users);
router.get('/dashboard', permisos.Auth, permisos.dashboardAcc, userController.dashboard);



router.post('/register', authValidator.store, authController.store);

router.post('/login', passport.authenticate('local', { failureRedirect: '/login-fail', successRedirect: '/protected' }));
router.get('/protected', (req, res) => {
  res.send('éxito');
});
router.get('/login-fail', (req, res) => {
  res.send('no tiene una sesión válida');
});

module.exports = router;
