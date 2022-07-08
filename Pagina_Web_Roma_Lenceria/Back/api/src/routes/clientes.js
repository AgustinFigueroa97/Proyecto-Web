
const { Router } = require("express");
const router = Router();
// La llave lo conviene 
const {getCliente,addCliente,getIdCliente} = require("../controllers/clientes");

router.get("/",getCliente);
router.post("/AddCliente",addCliente);
router.get("/:id",getIdCliente); 

// Exportando esto ya podemos acceder al metodo. 
module.exports = router; 

