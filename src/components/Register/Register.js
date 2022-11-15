import FormHeader from '../FormHeader/FormHeader';
import Form from '../Form/Form';
import Input from '../Input/Input';
import SubmitButton from '../SubmitButton/SubmitButton';
import SignNav from '../SignNav/SignNav';
import './Register.css';

function Register() {

  return (
    <section className='register'>
      <FormHeader text='Добро пожаловать!' />
      <Form>
        <div>
          <Input
            name='name'
            label='Имя'
            type='text'
            autoComplete='username'
            placeholder='Имя'
          />
          <Input
            name='email'
            label='E-mail'
            type='email'
            autoComplete='email'
            placeholder='емейл'
          />
          <Input
            name='password'
            label='Пароль'
            type='password'
            autoComplete='new-password'
            placeholder='Пароль'
          />
        </div>
        <SubmitButton
          label='Зарегистрироваться'
        />
      </Form>
      <SignNav label='Уже зарегистрированы?' link='Войти' to='/signin' />
    </section>
  );
}

export default Register;