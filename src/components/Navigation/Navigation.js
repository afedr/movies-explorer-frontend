import { ReactComponent as NavIcon } from '../../images/icon.svg';
import { ReactComponent as CloseIcon } from '../../images/close.svg';
import './Navigation.css';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';

function Navigation() {

  function navIsMobile() {
    return window.innerWidth < 1280
  }
  const [isMobile, setIsMobile] = useState(navIsMobile());
  const [isNavOpen, setIsNavOpen] = useState(false);

  window.addEventListener('resize', function(event) {
    setIsMobile(navIsMobile())
  }, true);
  
  function openPopup() {
    setIsNavOpen(true);
  }

  function closePopup() {
    setIsNavOpen(false);
  }
  return (
    <>

{isMobile && (
        <section className='navigation'>
           <NavIcon className='nav__icon' onClick={openPopup} />

           {isNavOpen && (
            <>
              <div className='nav__overlay' onClick={closePopup} />
              <div className='nav__popup'>
                <CloseIcon className='nav__close' onClick={closePopup} />

                <div className='navigation__main-nav'>
                  <NavLink
                    exact
                    to='/'
                    activeClassName="navigation__link_active"
                    className='navigation__link'
                    onClick={closePopup}>
                      
                    Главная
                  </NavLink>
                  <NavLink
                    to='/movies'
                    activeClassName="navigation__link_active"
                    className='navigation__link'
                    onClick={closePopup}>
                    Фильмы
                  </NavLink>
                  <NavLink
                    to='/saved-movies'
                    activeClassName="navigation__link_active"
                    className='navigation__link'
                    onClick={closePopup}>
                    Сохранённые фильмы
                  </NavLink>
                </div>

                <NavLink
                  to='/profile'
                  className='navigation__profile-link'
                  onClick={closePopup}>
                  Аккаунт
                </NavLink>
              </div>
            </>
          )}
        </section>)}

      {!isMobile && (
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
          </NavLink>
        </section>)}
    
    </>
  );
}

export default Navigation;