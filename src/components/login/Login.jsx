import React from 'react'
import { Outlet } from 'react-router-dom'
import styles from './Login.module.css'

const Login = () => {
  return (
    <section className={styles.login}>
      <div className={styles.form}>
      <Outlet />
      </div>
    </section>
  )
}

export default Login