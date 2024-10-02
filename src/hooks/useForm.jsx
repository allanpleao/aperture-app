import { useState } from "react";

export const useForm = (type) => {
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

  const validate = (value) => {
    setError(null);
    if (!type) {
      return true;
    }
    if (!value) {
      setError('Preencha o campo')
      return false;
    }
    else if (validationRules[type] && !validationRules[type].pattern.test(value)) {
      setError(validationRules[type].message)
      return false;
    }
    else {
      setError(null)
      return true;
    }
  };

  const handleChange = ({ target: { value } }) => {
    setInputValue(value);
    if (error) validate(value);
  };
  const handleBlur = ({ target: {  value } }) => {
    validate(value);
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
