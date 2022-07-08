const { Router } = require("express");
const router = Router();
// La llave lo conviene 
const {addFactura} = require("../controllers/facturas");

router.post("/AddFactura",addFactura);

// Exportando esto ya podemos acceder al metodo. 
module.exports = router; 