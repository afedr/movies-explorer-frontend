import Heading from "../Heading/Heading";
import "./Intro.css";
import photo from "../../images/photo.jpg";

function Intro() {
  return (
    <section className="intro" id="intro">
      <Heading text="Студент" />
      <article className="intro__box">
        <img className="intro__photo" alt="Nastya" src={photo} />
        <div className="intro__text">
          <h1 className="intro__heading">Настя</h1>
          <p className="intro__caption">
            Фронтенд&#8209;разработчик, 28 лет
          </p>
          <p className="intro__paragraph">
            Родилась в Саратове, закончила бакалавриат по специальности
            "Финансы" в СГУ. Получила магистерскую степень по направлению
            "Инновационный менеджмент" в ВШЭ. С 2017 года я работала
            бизнес-аналитиком в Accenture и в Microsoft на роли Technical
            Account Manager. На данный момент заканчиваю проходить курс по
            веб-разработке от Яндекс.Практикум.
          </p>
          <div className="intro__social">
            <a
              className="intro__link"
              target="_blank"
              rel="noreferrer"
              href="https://github.com/afedr"
            >
              Github
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default Intro;
