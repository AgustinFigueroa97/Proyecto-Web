const { Router } = require("express");
const router = Router();
// La llave lo conviene 
const {getProducto,getIdProducto} = require("../controllers/productos");

router.get("/",getProducto);
router.get("/:id",getIdProducto); 


// Exportando esto ya podemos acceder al metodo. 
module.exports = router; 