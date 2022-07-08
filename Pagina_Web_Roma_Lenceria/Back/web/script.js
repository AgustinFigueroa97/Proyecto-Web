/*
const formElement = document.getElementById("saveCliente"); 
formElement.addEventListener("submit",(event)=>{ 
    event.preventDefault(); 
    let Nombre_Cliente = document.getElementById("Nombre_Cliente").value;
    let Apellido_Cliente = document.getElementById("Apellido_Cliente").value;
    let Email_Cliente = document.getElementById("Email_Cliente").value;
    let CUIT_Cliente = document.getElementById("CUIT_Cliente").value;
    let CUIL_Cliente = document.getElementById("CUIL_Cliente").value;
    let Telefono_Cliente = document.getElementById("Telefono_Cliente").value;
    let Provincia_Cliente = document.getElementById("Provincia_Cliente").value;
    let Localidad_Cliente = document.getElementById("Localidad_Cliente").value;
    let Codigo_P_Cliente = document.getElementById("Codigo_P_Cliente").value;
    let Direccion_P_Cliente = document.getElementById("Direccion_Cliente").value;

    let cliente = { 
        Nombre_Cliente:Nombre_Cliente,
        Apellido_Cliente:Apellido_Cliente,
        Email_Cliente:Email_Cliente,
        CUIT_Cliente:CUIT_Cliente,
        CUIL_Cliente:CUIL_Cliente,
        Telefono_Cliente:Telefono_Cliente,
        Provincia_Cliente:Provincia_Cliente,
        Localidad_Cliente:Localidad_Cliente,
        Codigo_P_Cliente:Codigo_P_Cliente,
        Direccion_P_Cliente:Direccion_P_Cliente
    }; 

    let clienteJson = JSON.stringify(cliente); 
    console.log(clienteJson);

    
    fetch('http://localhost:3000/cliente',{
        method:'Post',    
        body:clienteJson
    })

})

// Vamos a recibir supongamos a penas entramos a la pagina 

fetch('http://localhost:3000/cliente').then(res => res.json()).then(res => console.log(res)).catch( err => console.error(err));
*/


