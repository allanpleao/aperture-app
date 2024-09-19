import React from 'react'
import styles from './LoginForm.module.css'
import Input from '../form/Input'
import Button from '../form/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const navigate = useNavigate()
  return (
    <section className={styles.loginContainer}>
    <form className={styles.loginForm}>
      <h2 className={styles.loginTitle}>Login</h2>
      <Input label="Email" />
      <Input label="Senha" />
      <Button>Entrar</Button>
    </form>
    <Link className={styles.loginLost} to={'/login/lost'}>perdeu a senha?</Link>
    <p className={styles.haveAccount}>Não tem uma conta?</p>
    <Button size='small' onClick={() => navigate('/login/create')} >Cadastre-se</Button>
    </section>

  )
}

export default LoginForm