const conn = require('../bd/bd');

exports.getProducto =async (req, res) => {
    try {
        console.log('Entre al controlador productos');
        const [results ] = await conn.query("SELECT * FROM producto")
        console.log(results); 
        return res.status(200).json(results);
    } catch (error) {
        res.status(500).json({msg: "Hubo un error."});
    }
}


exports.getIdProducto =async (req, res) => {
    try {
        console.log('Entre al controlador productos para recuperar id');
        console.log(req.params.id);
        const [results ] = await conn.query("SELECT *FROM producto WHERE idProducto = "+req.params.id);
        console.log(results); 
        return res.status(200).json(results);
    } catch (error) {
        res.status(500).json({msg: "Hubo un error."});
    }
}




