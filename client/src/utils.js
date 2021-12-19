



export  const isValid = (usuario, nombre, cargo, email) => {

    const reg = new RegExp("^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$");

    if (usuario.startsWith('XMX') && usuario.length === 6) {

        if (nombre.length >= 5 && nombre.length <= 15) {

            if (cargo.length >= 5 && cargo.length <= 10) {

                if (reg.test(email)) {

                    return 'Validacion ok'

                } else {

                    return 'Debe ingresar un email valido'
                }
            } else {
                return 'El cargo mínimo 5 -máximo 10 caracteres '
            }
        } else {
            return 'El nombre debe tener mínimo 5 - máximo 15 caracteres'
        }
    } else {

        return 'El usuario debe iniciar con XMX y tener 6 caracteres'

    }

}