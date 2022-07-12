const { Router } = require("express");
const router = Router();
// La llave lo conviene 
const {addFactura,getIdFactura} = require("../controllers/facturas");

router.post("/AddFactura",addFactura);
router.get("/:id",getIdFactura); 

// Exportando esto ya podemos acceder al metodo. 
module.exports = router; 