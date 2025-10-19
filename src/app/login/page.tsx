import React from 'react'
import styles from './styles/login.module.css'

const page = () => {
  return (
    <div className='row'>

      <div className='col-md-4 offset-md-4'>
        <h1>Iniciar sesión</h1>

        <form className={styles.form} action="">

          <div className="row">
            <div className="col-12 mt-4">
              <label htmlFor="i-email">
                Correo electrónico
              </label>
              <input id='i-email' type="text" placeholder='Correo electrónico' />
            </div>

            <div className="col-12 mt-4">
              <label htmlFor="i-password">
                Contraseña
              </label>
              <input id="i-password" type="text" placeholder='Contraseña' />
            </div>

            <div className="col-12 mt-4">
              <button>Iniciar sesión</button>
            </div>
          </div>

        </form>
      </div>

    </div>
  )
}

export default page