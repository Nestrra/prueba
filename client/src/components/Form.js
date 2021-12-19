import React, { useState } from 'react'
import swal from 'sweetalert';
import axios from 'axios'
import './style.css'
import { isValid } from '../utils'



export const Form = () => {

    const [formState, setformState] = useState({
        codigo: 'xmxwebdemo2',
        nombre: '',
        cargo: '',
        telefono: '',
        email: '',
        numeroCel: '+57',
        tipoContacto: '',
        autWeb: false,
        autOrdenes: false,
        informacion: false,
        usuario: ''

    })

    console.log(formState)

    const handleInputChange = ({ target }) => {

        setformState({
            ...formState,
            [target.name]: target.value
        })
    }


    const validacion = isValid(formState.usuario, formState.nombre, formState.cargo, formState.email)


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (validacion === 'Validacion ok') {
            swal({
                title: "Bien",
                text: "Datos guardados con exito!",
                icon: "success",
                button: "Ok",
            });
            await axios.post("http://localhost:3000/newUser", formState);
            setformState({
                codigo: 'xmxwebdemo2',
                nombre: '',
                cargo: '',
                telefono: '',
                email: '',
                numeroCel: '+57',
                tipoContacto: '',
                autWeb: false,
                autOrdenes: false,
                informacion: false,
                usuario: ''
            })
        } else {

            swal({
                title: "Ups",
                text: validacion,
                icon: "warning",
                button: "Ok",
            });

        }
    }


    return (
        <div>
            <div className='form'>
                <form id='form' className="form-container">

                    <h3>Informacion de contacto</h3>
                    <div></div>
                    <div className="form-group">

                        <label for="">Codigo del cliente: </label>
                        <input type="text" value={formState.codigo} name='codigo' id='codigo' />

                    </div>

                    <div className="form-group">

                        <label for="">Usuario:* </label>
                        <input type="text" id='usuario' name='usuario' onChange={handleInputChange} />

                    </div>

                    <div className="form-group">

                        <label for="">Nombre:* </label>
                        <input type="text" placeholder="Nombre:*" id="nombre" name='nombre' onChange={handleInputChange} />

                    </div>

                    <div className="form-group">

                        <label for="">Cargo:* </label>
                        <input type="text" placeholder="Cargo:*" id="cargo" name='cargo' onChange={handleInputChange} />

                    </div>

                    <div className="form-group">

                        <label for="">Telefono:* </label>
                        <input type="text" placeholder="Telefono:*" id="telefono" name='telefono' onChange={handleInputChange} />

                    </div>

                    <div className="form-group">
                        <label for="">Correo Electronico:* </label>
                        <input type="email" placeholder="Correo Electronico:*" id="email" name='email' onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label for="">Número de elular:* </label>
                        <input type="text" placeholder="Número de elular:*" id="numeroCel" value={formState.numeroCel} name='numeroCel' onChange={handleInputChange} />
                    </div>

                    <div className="form-group">
                        <label for="">Tipo de contacto:* </label>
                        <select name="tipoContacto" id="tipoContacto" onChange={handleInputChange} >
                            <option value="1">--Selecione tipo de contacto-- </option>
                            <option value="Contacto Comercial">Contacto Comercial</option>
                            <option value="Pago de Factura">Pago de Factura</option>
                            <option value="Representante Legal">Representante Legal</option>
                            <option value="Retiro de Mercaderia">Retiro de Mercaderia</option>
                        </select>
                    </div>
                    <div className="form-group">
                        <label>Autorizado para accder a webStore</label>
                        <input type="checkBox" id="autWeb" value='true' name="autWeb" />
                    </div>

                    <div className="form-group">
                        <label>Autorizado para crear ordenes</label>
                        <input type="checkBox" id="autOrdenes" value='true' name="autOrdenes" />
                    </div>
                    <div className="form-group">
                        <label>¿Desea que se envié la información de acceso al usuario?</label>
                        <input type="checkBox" id="informacion" value='true' name='informacion' />
                    </div>
                    <div className="form-group-btn">
                        <button className='btn' onClick={handleSubmit}>Aceptar</button>
                        <button className='btn'>Cancelar</button>
                    </div>

                </form>
            </div>
        </div>
    )
}
