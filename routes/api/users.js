const router = require('express').Router();
const userController = require('../../controllers/userController');
const auth = require('../../middlewares/auth');


//registrar usuario /api/user/register
router.post('/register',  userController.register)

router.post('/login', userController.login)

//UPDATE
router.put('/update',  userController.update);

//READ
router.get('/list',  userController.list)
 
module.exports = router;