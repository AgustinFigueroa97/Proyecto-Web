const conn = require('../bd/bd');

exports.addFactura = async (req,res) =>{
    try {
        console.log("Me estan haciendo un post dentro de la factura");
        console.log("Lo que enviaron es:", req.body);
        
        let {
            Fecha_Factura,
            MontoTotal_Factura,
            Forma_Pago_Factura,
            Tipo_de_Factura,
            Estado_Venta,
            Venta_Entregada,
            Cliente_idCliente,
        } = req.body; 

        Fecha_Factura = dateFormat.asString("yyyy-MM-dd", new Date(Fecha_Factura));
        const [results] = await conn.query("INSERT INTO `factura` (`idFactura`, `Fecha_Factura`, `MontoTotal_Factura`,`Forma_Pago_Factura`,`Tipo_de_Factura`,`Estado_Venta`,`Venta_Entregada`,`Cliente_idCliente`) VALUES (NULL, '"+fecha+"', '"+MontoTotal_Factura+"', '"+Forma_Pago_Factura+"','"+Tipo_de_Factura+"','"+Estado_Venta+"','"+Venta_Entregada+"','"+Cliente_idCliente+"');");

        res.status(201).json({ message: "ok created"});
    } catch (error) {
        res.status(500).json({msg: "Hubo un error."});
    }
}

