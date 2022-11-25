import FormHeader from '../FormHeader/FormHeader';
import { useState } from 'react';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import Form from '../Form/Form';
import SignNav from '../SignNav/SignNav';
import './Login.css';
import useFormWithValidation from '../FormWithValidation/useFormWithValidation';
import mainApi from "../../utils/MainApi";
import { useHistory } from "react-router";

function Login({handleLogin}) {
  const [isLoginFailed, setIsLoginFailed] = useState(false);
  const formWithValidation = useFormWithValidation();
  const history = useHistory();

  function handleSubmit(e) {
    e.preventDefault();

    handleLogin(formWithValidation.values.email, formWithValidation.values.password)
    .then((data) => {
      setIsLoginFailed(false);
      formWithValidation.resetForm();
      history.push("/movies");
    })
    .catch((err) => 
      setIsLoginFailed(true)
    );
  }

  return (
    <section className='login'>
      <FormHeader text='Рады видеть!' />
      <Form>
        <div>
          <Input
            name='email'
            label='E-mail'
            type='email'
            autoComplete='username'
            placeholder='name@yandex.ru'
            value={formWithValidation.values.email || ""}
            onChange={formWithValidation.handleChange}
            required
            errors={formWithValidation.errors.email}
          />
          <Input
            name='password'
            label='Пароль'
            type='password'
            autoComplete='current-password'
            placeholder='Пароль'
            value={formWithValidation.values.password || ""}
            onChange={formWithValidation.handleChange}
            required
            errors={formWithValidation.errors.password}
          />
        </div>
        {isLoginFailed && <span className='login__error'>Ошибка при входе</span>}
        <SubmitButton isDisabled={!formWithValidation.isValid} handleSubmit={handleSubmit} label='Войти' />
      </Form>
      <SignNav
        label='Ещё не зарегистрированы?' link='Регистрация' to='/signup'
      />
    </section>
  );
}

export default Login;