import './Profile.css';

function Profile() {


  return (
    <form className='profile'>
      <div className='profile__info'>
        <h1 className='profile__heading'>Привет, Виталий!</h1>
        <div className='profile__unit'>
          <label className='profile__key'>
            Имя
          </label>
          <input
            className='profile__value'
            name='name'
            id='profile-name'
            type='text'
          />
        </div>
        <hr className='profile__line' />
        <div className='profile__unit'>
          <label className='profile__key'>
            E-mail
          </label>
          <input
            className='profile__value'
            name='email'
            id='profile-email'
            type='email'
          />
        </div>
      </div>
      <div className='profile__buttons'>
        <button
          type='submit'
          className='profile__button'>
          Редактировать
        </button>
        <button
          className='profile__button profile__button_quit'>
          Выйти из аккаунта
        </button>
      </div>
    </form>
  );
}

export default Profile;
