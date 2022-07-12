const conn = require('../bd/bd');

exports.addProductohasFactura = async (req,res) =>{
    try {
        console.log("Me estan haciendo un post dentro de la producto has factura");
        console.log("Lo que enviaron es:", req.body);
        
        let {
            Producto_idProducto,
            Factura_idFactura,
            PF_Cantidad_Prendas,
            PF_Precio_Unitario,
            PF_Subtotal,
        } = req.body; 

        const [results] = await conn.query("INSERT INTO `producto_has_factura` (`Producto_idProducto`, `Factura_idFactura`, `PF_Cantidad_Prendas`,`PF_Precio_Unitario`,`PF_Subtotal`) VALUES ('"+Producto_idProducto+"', '"+Factura_idFactura+"', '"+PF_Cantidad_Prendas+"','"+PF_Precio_Unitario+"','"+PF_Subtotal+"');");
        res.status(201).json({ message: "ok created"});
    } catch (error) {
        res.status(500).json({msg: "Hubo un error."});
    }
}

