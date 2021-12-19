const User = require('../models/User')
const {isValid, crearContraseña} = require('./utils')



const createUser = async (req, res) => {

    const { codigo, usuario, nombre, cargo, telefono, email, numeroCel, tipoContacto, autWeb, autOrdenes, informacion } = req.body;

        console.log('datos:', req.body)

    const validacion = isValid(usuario, nombre, cargo, email)    
    const contraseña = crearContraseña();

    if (validacion === 'Validacion ok') {
        try {
            const user = await User.create({

                codigoCliente: codigo,
                usuario: usuario,
                nombre: nombre,
                cargo: cargo,
                telefono: telefono,
                correoElectronico: email,
                numCel: numeroCel,
                tiopAcceso: tipoContacto,
                autoriWebStore: autWeb,
                autoriOrdens: autOrdenes,
                envioInfo: informacion,
                password:contraseña,
            

            })

            res.send(user);

        } catch (error) {
            console.log(error);
        }

    }else{
        res.send(validacion)
    }



}

module.exports = createUser