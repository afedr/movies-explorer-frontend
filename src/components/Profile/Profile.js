import "./Profile.css";
import React from "react";
import { CurrentUserContext } from "../CurrentUserContext/CurrentUserContext";
import useFormWithValidation from "../FormWithValidation/useFormWithValidation";

function Profile({ onUpdateProfile, logOutHandler }) {
  const currentUser = React.useContext(CurrentUserContext);
  const formWithValidation = useFormWithValidation({});
  const [isChangeOk, setIsChangeOk] = React.useState(false);

  React.useEffect(() => {
    formWithValidation.setValues({
      name: currentUser.name,
      email: currentUser.email,
    });
  }, [currentUser]);

  function handleSubmit(e) {
    e.preventDefault();
    onUpdateProfile({
      name: formWithValidation.values.name,
      email: formWithValidation.values.email,
    }).then(() => {
      setIsChangeOk(true)
    })
    .catch((err) => {
      setIsChangeOk(false)
      console.log(err);
    });
  }

  return (
    <form className="profile" onSubmit={handleSubmit}>
      <div className="profile__info">
        <h1 className="profile__heading">Привет, {currentUser.name} </h1>
        <div className="profile__unit">
          <label className="profile__key">Имя</label>
          <input
            className="profile__value"
            name="name"
            id="profile-name"
            type="text"
            value={formWithValidation.values.name || ""}
            onChange={formWithValidation.handleChange}
          />
          {formWithValidation.errors.name && (
            <p className="profile__error">{formWithValidation.errors.name}</p>
          )}
        </div>
        <hr className="profile__line" />
        <div className="profile__unit">
          <label className="profile__key">E-mail</label>
          <input
            className="profile__value"
            name="email"
            id="profile-email"
            type="email"
            value={formWithValidation.values.email || ""}
            onChange={formWithValidation.handleChange}
          />
          {formWithValidation.errors.email && (
            <p className="profile__error">{formWithValidation.errors.email}</p>
          )}
        </div>
      </div>
      <div className="profile__buttons">
      {isChangeOk && (
          <span className="profile__notification">Данные успешно отредактированы</span>
        )}
        <button 
          type="submit" 
          className="profile__button"
          disabled={currentUser.name === formWithValidation.values.name && currentUser.email === formWithValidation.values.email}>
          Редактировать
        </button>
        <button
          type="button"
          className="profile__button profile__button_quit"
          onClick={logOutHandler}> 
          Выйти из аккаунта
        </button>
      </div>
    </form>
  );
}

export default Profile;
