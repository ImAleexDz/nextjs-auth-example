import React from 'react'
import styles from './styles/register.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGoogle } from '@fortawesome/free-brands-svg-icons'

const page = () => {
  return (
    <div className='row'>

      <div className='col-md-4 offset-md-4'>
        <h1 className='text-center'>Crear cuenta</h1>

        <form className={styles.form} action="">

          <div className="row">
            <div className="col-12 mt-4">
              <label htmlFor="i-full-name">
                Nombre completo
              </label>
              <input id='i-full-name' type="text" placeholder='Nombre' />
            </div>

            <div className="col-12 mt-4">
              <label htmlFor="i-phone">
                Teléfono
              </label>
              <input id="i-phone" type="text" placeholder='Teléfono' />
            </div>

            <div className="col-12 mt-4">
              <label htmlFor="i-email">
                Correo electrónico
              </label>
              <input id="i-email" type="email" placeholder="Correo electrónico" />
            </div>

            <div className="col-12 mt-4">
              <label htmlFor="i-password">
                Contraseña
              </label>
              <input id="i-password" type="password" placeholder="Contraseña" />
            </div>

            <div className="col-12 mt-4">
              <label htmlFor="i-confirm-password">
                Confirmar contraseña
              </label>
              <input id="i-confirm-password" type="password" placeholder="Confirmar contraseña" />
            </div>
            
            <div className="col-12 mt-4">
              <button>Crear cuenta</button>
              <p className='mt-3 text-center'>
                ¿Ya tienes una cuenta? <a href="/login">Inicia sesión</a>
              </p>
            </div>

            <div className="col-12 mt-5 text-center">
                    <p>
                        O también regístrate con Google:
                    </p>
                    
                    <button className='google-btn'>
                        <FontAwesomeIcon style={{color: "#D9432F", width: "30px", height: "50px"}} icon={faGoogle} />
                    </button>
                </div>
          </div>

        </form>
      </div>

    </div>
  )
}

export default page