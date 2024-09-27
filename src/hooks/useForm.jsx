import { useState } from "react";

export const useForm = () => {
  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");

  const validationRules = {
    email: {
      pattern: /^[\w\.-]+@[a-zA-Z\d\.-]+\.[a-zA-Z]{2,6}$/,
      message: "Digite um email válido",
    },
    senha: {
      pattern: /[A-Za-z\d@$!%*?&]{6,}/,
      message: "A senha precisar ter pelo menos 6 dígitos",
    },
  };

  const validate = (name, value) => {
    setError(null);
    const key = validationRules[name];
    if (!value) {
      setError(`O campo de ${name} é obrigatório!`);
      return false;
    }
    if (key && !key.pattern.test(value)) {
      setError(key.message);
      return false;
    } else {
      setError(null);
      return true;
    }
  };

  const handleChange = ({ target: {name, value } }) => {
    setInputValue(value);
    if (error) validate(name, value);
  };
  const handleBlur = ({ target: { name, value } }) => {
    validate(name, value);
  };

  return {
    inputValue,
    setInputValue,
    handleChange,
    handleBlur,
    error,
    validate: () => validate(inputValue)
  };
};

export default useForm;
