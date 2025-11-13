'use client'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


type Props = { className?: string }

const LoginForm = ({ className }: Props) => {

    return (
        <form className={className} action="">
            <div className="row">
                <div className="col-12 mt-4">
                    <label htmlFor="i-email">Correo electrónico</label>
                    <input id="i-email" type="text" placeholder="Correo electrónico" />
                </div>

                <div className="col-12 mt-4">
                    <label htmlFor="i-password">Contraseña</label>
                    <input id="i-password" type="password" placeholder="Contraseña" />
                </div>

                <div className="col-12 mt-4">
                    <button type="submit">Iniciar sesión</button>

                    <p className='mt-3 text-center'>
                        ¿Todavía no te registras? <a href="/register">Crear cuenta</a>
                    </p>
                </div>

                <div className="col-12 mt-5 text-center">
                    <p>
                        O también inicia sesión con Google:
                    </p>
                    
                    <button className='google-btn'>
                        <FontAwesomeIcon style={{color: "#D9432F", width: "30px", height: "50px"}} icon={faGoogle} />
                    </button>
                </div>

            </div>
        </form>
    )
}

export default LoginForm