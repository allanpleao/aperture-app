import React from 'react'
import styles from './LoginForm.module.css'
import Input from '../form/Input'
import Button from '../form/Button'

const LoginForm = () => {
  return (
    <form className={styles.loginForm}>
      <h2>Login</h2>
      <Input label="Email" />
      <Input label="Senha" />
      <Button>Entrar</Button>
    </form>
  )
}

export default LoginForm