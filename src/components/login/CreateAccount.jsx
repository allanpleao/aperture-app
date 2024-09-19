import React from 'react'
import Input from '../form/Input'
import Button from '../form/Button'
import styles from './CreateAccount.module.css'

const CreateAccount = () => {

  return (
    <form className={styles.createContainer}>
      <h2 className={styles.createTitle}>Criar conta</h2>
      <Input label='Email'/>
      <Input label='Senha' />
      <Input label='Confirmar senha' />
      <Button>Criar conta</Button>
    </form>
  )
}

export default CreateAccount