import React, { useState } from "react";
import Input from "../form/Input";
import Button from "../form/Button";
import styles from "./CreateAccount.module.css";
import { auth } from "../../../firebaseConfig";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { setUser } from "../../redux/store/slices/authSlice";
import { useDispatch } from "react-redux";
import Error from "../helper/Error";
import { useForm } from "react-hook-form";

const CreateAccount = () => {


  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
  } = useForm({
    mode: 'onBlur'
  });

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (!email) {
      return 'email é obrigatório'
    }
     if (!emailRegex.test(email)) {
      return "Digite um email válido";
    }
    return true;
  }
  const validatePassword = (value) => {
    if(!password) {
      return 'senha é obrigatória'
    }
  }

  const handleCreateAccount = async (event) => {
    event.preventDefault();
    try {
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        password,
        email
      );
      console.log("Usuário criado", userCredential.user);
      dispatch(setUser(userCredential.user));
    } catch (error) {
      console.error("Erro ao criar usuário", error);
      setError(error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit(handleCreateAccount)} className={styles.createContainer}>
      <h2 className={styles.createTitle}>Criar conta</h2>
      <Input
        {...register('email', {
          validate: validateEmail
        })}
        onBlur={() => trigger('email')}
        label="Email"
        error={errors.email?.message}
      />
      
      <Input
      {...register('password', {
        validate: validatePassword
      })}
        onBlur={() => trigger('password')}
        label="Senha"
        error={errors.password?.message}
      />
      <Button>Criar conta</Button>
 
    </form>
  );
};

export default CreateAccount;
