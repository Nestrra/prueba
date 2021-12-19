

const isValid = (usuario, nombre, cargo) => {

    //const reg = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

    if (usuario.startsWith('XMX') && usuario.length === 6) {

        if (nombre.length >= 5 && nombre.length <= 15) {

            if (cargo.length >= 5 && cargo.length <= 10) {
                return 'Validacion ok'

            } else {
                return 'Cargo invalido'
            }
        } else {
            return 'Nombre invalido'
        }
    } else {

        return 'nombre de usuario incorrecto'

    }

}


const crearContraseña = () => {

    const letras = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    const numeros = '1234567890'
    let contr = []


    for (let index = 0; index < 8; index++) {

        if (index % 2 === 0) {

            contr.push(letras.charAt(Math.floor(Math.random() * letras.length)));

        } else {
            contr.push(numeros.charAt(Math.floor(Math.random() * numeros.length)));
        }

    }

    contr.sort(function () { return Math.random() - 0.5 });

    return contr.join('')



}



module.exports = { isValid, crearContraseña };