import FormHeader from '../FormHeader/FormHeader';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import Form from '../Form/Form';
import SignNav from '../SignNav/SignNav';
import './Login.css';

function Login() {

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
          />
          <Input
            name='password'
            label='Пароль'
            type='password'
            autoComplete='current-password'
            placeholder='Пароль'
          />
        </div>
        <SubmitButton label='Войти' />
      </Form>
      <SignNav
        label='Ещё не зарегистрированы?' link='Регистрация' to='/signup'
      />
    </section>
  );
}

export default Login;