const { Router } = require("express");
const router = Router();

//const {registrarCompra,confirm} = require('../controllers/compra');
const compra= require('../controllers/compra');

/* router.post("/registrarCompra",registrarCompra);
router.get("/confirm/:token",confirm); */

router.post(
    '/registrarCompra',
    [],
    compra.registrarCompra
);

router.get(
    '/confirm/:token',
    [],
    compra.confirm
);

module.exports = router;