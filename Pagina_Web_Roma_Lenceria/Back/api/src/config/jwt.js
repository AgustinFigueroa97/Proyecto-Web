const jwt = require('jsonwebtoken');

// Serializo la data en un Json 
exports.getToken = (payload) => { // Genero un toquen, ese paylod lo convierto
    return jwt.sign({
        data: payload
    }, 'SECRET', { expiresIn: '1h' }); // Vigencia del token. Usa una palabra clave llamada secret.  
}

// Esta obtenemos la data cuando la necesitemos. 
exports.getTokenData = (token) => { // Esta funcion obtiene los datos a partir de un token
    let data = null;
    jwt.verify(token, 'SECRET', (err, decoded) => {
        if(err) {
            console.log('Error al obtener data del token');
        } else {
            data = decoded;
        }
    });
    return data; // Acá el token esta decodificado 
}
