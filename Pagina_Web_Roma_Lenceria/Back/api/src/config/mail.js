const nodemailer = require('nodemailer');

// Esto almacenará nuestro correo. 
const mail = {
    user: 'copislm47@gmail.com',
    pass: 'afhfhhriysycmucp'
}

let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    tls: {
        rejectUnauthorized: false // dice que si no pone esto no le funca 
    },
    secure: true, // true for 465, false for other ports
    // El otro chico le puso true
    auth: {
      user: mail.user, // generated ethereal user
      pass: mail.pass, // generated ethereal password
    }, 
   /*  service: 'Gmail',
       auth: {
           user: mail.user,
           pass: mail.pass
        },
    tls: {
        rejectUnauthorized: false
    } */
  });

  exports.sendEmail = async (email, subject, html) => {
    /* email será el destinatario
    subject que sería el asunto 
    y el html porque eso es lo que enviaremos como mensajes.
     */
    try {
        
        await transporter.sendMail({
            from: `Roma Lenceria <${ mail.user }>`, // sender address,esto sería el remitente 
            to: email, // a quien le envio el mensaje 
            subject, // como la propiedad valor tiene el mismo nombre toma el valor subject del parametro. 
            text: "Estimado cliente gracias por elegir a Roma Lenceria", // plain text body
            html, // html body
        });

    } catch (error) {
        console.log('Algo no va bien con el email', error);
    }
  }

  exports.getTemplate = (name, token) => {
      return `
        <head>
            <link rel="stylesheet" href="./style.css">
        </head>
        
        <div id="email___content">
            <img src="https://i.imgur.com/eboNR82.png" alt="">
            <h2>Hola ${ name }</h2>
            <p>Para confirmar tu compra, ingresa al siguiente enlace</p>
            <a
                href="http://localhost:3000/Compra/confirm/${ token }"
                target="_blank"
            >Confirmar Compra</a>
        </div>
      `;
  }
