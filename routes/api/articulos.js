const router = require('express').Router();
const articuloController = require('../../controllers/articuloController');
const auth = require('../../middlewares/auth');



router.put('/update',  articuloController.update)
router.put('/activate',   articuloController.activate)
router.put('/deactivate',   articuloController.deactivate)

router.post('/add',   articuloController.add);


router.get('/list',   articuloController.list)
 
module.exports = router;