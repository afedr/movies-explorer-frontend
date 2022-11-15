import './Navigation.css';
import { NavLink } from 'react-router-dom';

function Navigation() {

  return (
    <>
        <section className='navigation'>
          <div className='navigation__main-nav'>
            <NavLink
              to='/movies'
              className='navigation__link'
              activeClassName='navigation__link_current'>
              Фильмы
            </NavLink>
            <NavLink
              to='/saved-movies'
              className='navigation__link'
              activeClassName='navigation__link_current'>
              Сохранённые фильмы
            </NavLink>
          </div>
          <NavLink to='/profile' className='navigation__profile-link'>
            Аккаунт
            <div className='navigation__user-icon' />
          </NavLink>
        </section>
    </>
  );
}

export default Navigation;