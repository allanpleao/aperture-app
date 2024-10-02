import React, { useState } from "react";
import Input from "../form/Input";
import Button from "../form/Button";
import styles from "./CreateAccount.module.css";
import { auth } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/store/slices/authSlice";
import { useDispatch } from "react-redux";
import Error from "../helper/Error";
import useForm from "../../hooks/useForm";
import { useNavigate } from "react-router-dom";

const CreateAccount = () => {
  const email = useForm('email')
  const password = useForm('senha')
  const dispatch = useDispatch()
  const [loginError, setLoginError] = useState(null)
  const navigate = useNavigate();

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    try {
      if (!email.validate() || !password.validate()) {
        console.log( 'dados inválidos')
        setLoginError('dados inválidos')
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(auth, email.inputValue, password.inputValue);
      const user = userCredential.user;
      dispatch(setUser(user))
      console.log('conta criada com sucesso')
      navigate('/user')
      
    } catch (error) {
      console.error('erro ao criar conta', error)
      setLoginError('erro ao criar conta')
    }
  };

  return (
    <form onSubmit={handleCreateAccount} className={styles.createContainer}>
      <h2 className={styles.createTitle}>Criar conta</h2>
      <Input name="email" label="Email" value={email.inputValue} onChange={email.handleChange} onBlur={email.handleBlur} error={email.error} />

      <Input type="password" name="senha" value={password.inputValue} onChange={password.handleChange} label="Senha" onBlur={password.handleBlur} error={password.error} />
      <Button>Criar conta</Button>
      {loginError && <Error error={loginError} />}
    </form>
  );
};

export default CreateAccount;
