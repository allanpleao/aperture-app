import React from 'react'
import styles from './LoginForm.module.css'
import Input from '../form/Input'
import Button from '../form/Button'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../../../firebaseConfig'
import { useDispatch } from 'react-redux'
import { extractUserData, setUser } from '../../redux/store/slices/authSlice'
import useForm from '../../hooks/useForm'
import Error from '../helper/Error'
import { useState } from 'react'

const LoginForm = () => {
  const navigate = useNavigate()
  const email = useForm('email')
  const password = useForm('senha')
  const [ loginError, setLoginError ] = useState(null)
  const dispatch = useDispatch()

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoginError(null)
    
    try {
      if (!email.validate() || !password.validate()) {
        setLoginError('Dados inválidos')
        return;
      }

      const userCredential = await signInWithEmailAndPassword(auth, email.inputValue, password.inputValue)
      const user = userCredential.user;

      dispatch(setUser((user)))

      navigate('/user')
    } catch (error) {
      console.error('Erro ao realizar login', error)
      setLoginError('Erro ao realizar login. Verifique suas credenciais.')
    }
  }

  return (
    <section className={styles.loginContainer}>
    <form onSubmit={handleLogin} className={styles.loginForm}>
      <h2 className={styles.loginTitle}>Login</h2>
      <Input error={email.error} onChange={email.handleChange} onBlur={email.handleBlur} value={email.inputValue} label="Email" />
      <Input error={password.error} onBlur={password.handleBlur} onChange={password.handleChange} value={password.inputValue} type="password" label="Senha" />
      <Button>Entrar</Button>
      {loginError && <Error error={loginError} />}
    </form>
    <Link className={styles.loginLost} to={'/login/lost'}>perdeu a senha?</Link>
    <p className={styles.haveAccount}>Não tem uma conta?</p>
    <Button size='small' onClick={() => navigate('/login/create')} >Cadastre-se</Button>
    </section>

  )
}

export default LoginForm