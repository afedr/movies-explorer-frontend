import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <p className="footer__title">
        Учебный проект Яндекс.Практикум х BeatFilm.
      </p>
      <hr className="footer__line" />
      <section className="footer__box">
        <div className="footer__social">
          <a
            href="https://praktikum.yandex.ru/profile/web/"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Яндекс.Практикум
          </a>
          <a
            href="https://github.com/afedr"
            className="footer__link"
            target="_blank"
            rel="noreferrer"
          >
            Github
          </a>
        </div>
        <p className="footer__copyright">&copy; 2022</p>
      </section>
    </footer>
  );
}

export default Footer;
