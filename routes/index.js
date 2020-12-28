const router = require('express').Router();
const apiRouterUser = require('./api/users');
const apiRouterCategoria = require('./api/categorias');
const apiRouterArticulo = require('./api/articulos');

router.use('/usuario', apiRouterUser); //aqui quedaría api/usuario
router.use('/categoria', apiRouterCategoria);
router.use('/articulo', apiRouterArticulo); 

module.exports = router;