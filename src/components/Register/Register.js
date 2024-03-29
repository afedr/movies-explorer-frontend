import React from "react";
import FormHeader from "../FormHeader/FormHeader";
import Form from "../Form/Form";
import Input from "../Input/Input";
import SubmitButton from "../SubmitButton/SubmitButton";
import SignNav from "../SignNav/SignNav";
import { useState } from "react";
import useFormWithValidation from "../FormWithValidation/useFormWithValidation";
import "./Register.css";

import mainApi from "../../utils/MainApi";

import { useHistory } from "react-router";

function Register({handleLogin}) {
  const [isRegisterFailed, setIsRegisterFailed] = useState(false);
  const formWithValidation = useFormWithValidation({
    name: "",
    email: "",
    password: "",
  });
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    mainApi
      .register(
        formWithValidation.values.email,
        formWithValidation.values.password,
        formWithValidation.values.name
      )
      .then((data) => {
        setIsRegisterFailed(false);
        formWithValidation.resetForm();
        handleLogin(formWithValidation.values.email, formWithValidation.values.password)
        .then(() => {
          history.push("/movies");
        })
      })
      .catch((err) => setIsRegisterFailed(true));
  }

  return (
    <section className="register">
      <FormHeader text="Добро пожаловать!" />
      <Form>
        <div>
          <Input
            name="name"
            label="Имя"
            type="text"
            autoComplete="username"
            placeholder="Имя"
            value={formWithValidation.values.name}
            onChange={formWithValidation.handleChange}
            required
            errors={formWithValidation.errors.name}
          />
          <Input
            name="email"
            label="E-mail"
            type="email"
            autoComplete="email"
            value={formWithValidation.values.email}
            placeholder="емейл"
            onChange={formWithValidation.handleChange}
            required
            errors={formWithValidation.errors.email}
          />
          <Input
            name="password"
            label="Пароль"
            type="password"
            autoComplete="new-password"
            placeholder="Пароль"
            value={formWithValidation.values.password}
            onChange={formWithValidation.handleChange}
            required
            errors={formWithValidation.errors.password}
          />
        </div>
        {isRegisterFailed && (
          <span className="register__error">Ошибка при регистрации</span>
        )}
        <SubmitButton
          isDisabled={!formWithValidation.isValid}
          handleSubmit={handleSubmit}
          label={"Зарегистрироваться"}
        />
      </Form>
      <SignNav label="Уже зарегистрированы?" link="Войти" to="/signin" />
    </section>
  );
}

export default Register;
