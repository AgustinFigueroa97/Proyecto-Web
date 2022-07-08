const conn = require('../bd/bd');

exports.getCliente =async (req, res) => {
    try {
        console.log('Entre al controlador');
        const [results ] = await conn.query("SELECT * FROM cliente")
        console.log(results); 
        return res.status(200).json(results);
    } catch (error) {
        res.status(500).json({msg: "Hubo un error."});
    }
}

exports.getIdCliente =async (req, res) => {
    try {
        console.log('Entre al controlador cliente para recuperar id');
        console.log(req.params.id);
        const [results ] = await conn.query("SELECT *FROM cliente WHERE idCliente = "+req.params.id);
        console.log(results); 
        return res.status(200).json(results);
    } catch (error) {
        res.status(500).json({msg: "Hubo un error."});
    }
}


exports.addCliente = async (req,res) =>{
    try {
        console.log("Me estan haciendo un post");
        console.log("Lo que enviaron es:", req.body);
        let {
            Nombre_Cliente,
            Apellido_Cliente,
            Email_Cliente,
            CUIT_Cliente,
            CUIL_Cliente,
            Telefono_Cliente,
            Provincia_Cliente,
            Localidad_Cliente,
            Codigo_P_Cliente,
            Direccion_P_Cliente
        } = req.body; 

        const [results] = await conn.query("INSERT INTO `cliente` (`idCliente`, `Nombre_Cliente`, `Apellido_Cliente`,`Email_Cliente`,`CUIT_Cliente`,`CUIL_Cliente`,`Telefono_Cliente`,`Provincia_Cliente`,`Localidad_Cliente`,`Codigo_Postal_Cliente`,`Direccion_Cliente`) VALUES (NULL, '"+Nombre_Cliente+"', '"+Apellido_Cliente+"', '"+Email_Cliente+"','"+CUIT_Cliente+"','"+CUIL_Cliente+"','"+Telefono_Cliente+"','"+Provincia_Cliente+"','"+Localidad_Cliente+"','"+Codigo_P_Cliente+"','"+Direccion_P_Cliente+"');");

        res.status(201).json({ message: "ok created"});
    } catch (error) {
        res.status(500).json({msg: "Hubo un error."});
    }
}


