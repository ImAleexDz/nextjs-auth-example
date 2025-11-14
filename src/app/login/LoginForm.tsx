'use client'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'


type Props = { className?: string }

const LoginForm = ({ className }: Props) => {

    const [userInfo, setUserInfo] = useState<{ email: string; password: string } | null>(null);

    const handleUserInfo = (e: React.FormEvent) => {
        setUserInfo({
            ...userInfo,
            [(e.target as HTMLInputElement).id]: (e.target as HTMLInputElement).value
        } as { email: string; password: string });
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        if (!userInfo) {
            alert("Por favor, completa el formulario.");
            return;
        }

        const res = await fetch('http://localhost:3002/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify(userInfo),
        });

        let body: any = null;
        try {
            body = await res.json();
        } catch (err) {
            try { body = await res.text(); } catch { body = null; }
        }

        if (res.ok) {
            alert("Inicio de sesión exitoso.");
            console.log('login success', res.status, body);
            // redirect or update UI here
        } else {
            // show server-provided message when available
            const msg = body?.message || body || `Error ${res.status} ${res.statusText}`;
            alert(msg);
            console.log('login failed', res.status, body);
        }
    }

    return (
        <div className={className}>
            <form onSubmit={e => handleSubmit(e)}>
                <div className="row">
                    <div className="col-12 mt-4">
                        <label htmlFor="email">Correo electrónico</label>
                        <input id="email" type="text" placeholder="Correo electrónico" onChange={e => handleUserInfo(e)} />
                    </div>

                    <div className="col-12 mt-4">
                        <label htmlFor="password">Contraseña</label>
                        <input id="password" type="password" placeholder="Contraseña" onChange={e => handleUserInfo(e)} />
                    </div>

                    <div className="col-12 mt-4">
                        <button type="submit">Iniciar sesión</button>

                        <p className='mt-3 text-center'>
                            ¿Todavía no te registras? <a href="/register">Crear cuenta</a>
                        </p>
                    </div>
                </div>
            </form>

            <div className="col-12 mt-5 text-center">
                <p>
                    O también inicia sesión con Google:
                </p>

                <a href="http://localhost:3002/api/auth/google">
                    <button className='google-btn'>
                        <FontAwesomeIcon style={{ color: "#D9432F", width: "30px", height: "50px" }} icon={faGoogle} />
                    </button>
                </a>

            </div>
        </div>
    )
}

export default LoginForm