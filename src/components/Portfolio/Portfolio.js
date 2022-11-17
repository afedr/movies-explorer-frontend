import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <h2 className="portfolio__title">Портфолио</h2>
      <a
        className="portfolio__link"
        target="_blank"
        href="https://afedr.github.io/how-to-learn/"
        rel="noreferrer"
      >
        Статичный сайт
        <span className="portfolio__arrow"> &#8599; </span>
      </a>
      <hr className="portfolio__line" />
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
      <a
        className="portfolio__link"
        target="_blank"
        rel="noreferrer"
        href="https://domainname.students.nomoredomains.icu/"
      >
        Одностраничное приложение
        <span className="portfolio__arrow"> &#8599; </span>
      </a>
    </section>
  );
}

export default Portfolio;
