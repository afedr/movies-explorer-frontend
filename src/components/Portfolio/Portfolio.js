import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <ul className="portfolio__content">
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            target="_blank"
            href="https://afedr.github.io/how-to-learn/"
            rel="noreferrer"
          >
            Статичный сайт
            <span className="portfolio__arrow"> &#8599; </span>
            <hr className="portfolio__line" />
          </a>
        </li>
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
            href="https://afedr.github.io/russian-travel/"
          >
            Адаптивный сайт
            <span className="portfolio__arrow"> &#8599; </span>
          </a>
          <hr className="portfolio__line" />
        </li>
        <li className="portfolio__list">
          <a
            className="portfolio__link"
            target="_blank"
            rel="noreferrer"
            href="https://domainname.students.nomoredomains.icu/"
          >
            Одностраничное приложение
            <span className="portfolio__arrow"> &#8599; </span>
          </a>
        </li>
      </ul>
    </section>
  );
}

export default Portfolio;
