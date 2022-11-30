import React, { useCallback, useEffect } from 'react';
import validator from 'validator';

const nameValidation = (name) => {
  if (!name || name.length < 2 || name.length > 30) {
    return 'Имя должно содержать от 2 до 30 символов';
  }
  return '';
};

const emailValidation = (email) => {
  if (!email || email === '') {
    return 'Укажите адрес почты';
  }
  if (!validator.isEmail(email)) {
    return 'Укажите корректную почту';
  }
  return '';
};

const passwordValidation = (password) => {
  if (!password || password.length < 6) {
    return 'Пароль должен содержать не меньше 6 символов';
  }
  return '';
};

const validators = {
  name: nameValidation,
  email: emailValidation,
  password: passwordValidation,
};

function useFormWithValidation(initialValues) {
  const [values, setValues] = React.useState(initialValues);
  const [errors, setErrors] = React.useState({});
  const [isValid, setIsValid] = React.useState(false);

  useEffect(() => {
    setIsValid(Object.entries(values).every((entry) => {
      return validators[entry[0]](entry[1]).length === 0
    }));
  }, [values]);

  const handleChange = (event) => {
    const { target } = event;
    const { name } = target;
    const { value } = target;
    const error =  validators[name](value);
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: error});
  };

  const resetForm = useCallback(
    (newValues = {}, newErrors = {}, newIsValid = false) => {
      setValues(newValues);
      setErrors(newErrors);
      setIsValid(newIsValid);
    },
    [setValues, setErrors, setIsValid],
  );

  return {
    values, setValues, handleChange, errors, isValid, setIsValid, resetForm,
  };
}

export default useFormWithValidation;