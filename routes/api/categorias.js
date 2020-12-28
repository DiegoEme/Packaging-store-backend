const router = require('express').Router();
const categoriaController = require('../../controllers/categoriaController');
const auth = require('../../middlewares/auth');



router.put('/update',  categoriaController.update)
router.put('/activate',  categoriaController.activate)
router.put('/deactivate',  categoriaController.deactivate)

router.post('/add',  categoriaController.add);


router.get('/list',  categoriaController.list)
 
module.exports = router;