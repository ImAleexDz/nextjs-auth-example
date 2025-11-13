import React from 'react'
import styles from './styles/login.module.css'
import LoginForm from './LoginForm' // client component

const page = () => {
  return (
    <div className='row'>
      <div className='col-md-4 offset-md-4'>
        <h1 className='text-center mt-4'>Iniciar sesión</h1>
        <LoginForm className={styles.form} />
      </div>
    </div>
  )
}

export default page
