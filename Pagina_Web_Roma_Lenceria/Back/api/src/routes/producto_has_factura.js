const { Router } = require("express");
const router = Router();
// La llave lo conviene 
const {addProductohasFactura} = require("../controllers/producto_has_factura");

router.post("/AddProductohasFactura",addProductohasFactura);

// Exportando esto ya podemos acceder al metodo. 
module.exports = router; 