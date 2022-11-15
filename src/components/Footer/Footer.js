import './Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <p className='footer__title'> Учебный проект Яндекс.Практикум х BeatFilm.</p>
      <hr className='footer__line' />
      <section className='footer__container'>
        <div className='footer__social'>
          <a
            className='footer__link'
            target='_blank'
            rel='noreferrer'
            href='https://praktikum.yandex.ru/profile/web/'>
            Яндекс.Практикум
          </a>
          <a
            className='footer__link'
            target='_blank'
            rel='noreferrer'
            href='https://github.com/afedr'>
            Github
          </a>
        </div>
        <p className='footer__copyright'>&copy; 2022</p>
      </section>
    </footer>
  );
}

export default Footer;