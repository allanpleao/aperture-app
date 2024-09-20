import React, { useState } from 'react'
import Input from '../form/Input'
import Button from '../form/Button'
import styles from './CreateAccount.module.css'
import { auth } from '../../../firebaseConfig';
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { setUser } from '../../redux/store/slices/authSlice';
import { useDispatch } from 'react-redux'
import Error from '../helper/Error'

const CreateAccount = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  const handleCreateAccount = async(event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, password, email);
      console.log('Usuário criado', userCredential.user);
      dispatch(setUser(userCredential.user))
    } catch (error) {
      console.error('Erro ao criar usuário', error)
      setError(error.message)
    }
  }
  
  return (
    <form onSubmit={handleCreateAccount} className={styles.createContainer}>
      <h2 className={styles.createTitle}>Criar conta</h2>
      <Input value={email} onChange={({ target }) => setEmail(target.value)} label='Email'/>
      <Input value={password} onChange={({ target }) => setPassword(target.value)} label='Senha' />
      <Input label='Confirmar senha' />
      <Button>Criar conta</Button>
      {error && <Error error={error} />}
    </form>
  )
}

export default CreateAccount