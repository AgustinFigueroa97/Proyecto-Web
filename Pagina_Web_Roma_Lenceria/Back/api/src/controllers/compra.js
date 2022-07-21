const { getToken,getTokenData} = require('../config/jwt');
const {getTemplate,sendEmail} = require('../config/mail');
const { v4: uuidv4 } = require('uuid')

const registrarCompra = async (req, res) => {
    try {

        // Obtener la data del cliente: name, email
        //const { name, email } = req.body;
        console.log('Entro aca');
        console.log(req.body);
        console.log("el tipo del dato es:"+typeof req.body);

        //let {name,email} = req.body; 
        

        /* const {name , email} = req.body; */


        console.log("El nombre para registrar la compra es "+req.body.nombre);
        console.log("El correo para registrar la compra es "+req.body.correo);

        let email = req.body.correo;
        let name = req.body.nombre;

        // Generar el código para confirmar el email.
        const code = uuidv4();

        // Generar token
        const token = getToken({ email, code }); // Estos son los datos que estarán serializados. 

        // Obtener un template 
        const template = getTemplate(name, token);

        // Enviar el email
        await sendEmail(email, 'Envio el email', template);
        //await user.save();

        res.json({
            success: true,
            msg: 'Compra Realizada'
        });

    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            msg: 'Error al registrar la compra'
        });
    }
}


const confirm = async (req, res) => {
    try {

       // Obtener el token
       const { token } = req.params;
       
       // Verificar la data
       const data = await getTokenData(token);

       if(data === null) {
            return res.json({
                success: false,
                msg: 'Error al obtener data'
            });
       }

       console.log(data);

       // Aca deberíamos hacer el update de los flags una vez confirmada la compra 
       
       // Redireccionar a la confirmación
       return res.redirect('/confirm.html');
        
    } catch (error) {
        console.log(error);
        return res.json({
            success: false,
            msg: 'Error al confirmar usuario'
        });
    }
}

module.exports = {
    registrarCompra,
    confirm
}

