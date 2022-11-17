import Heading from '../Heading/Heading';
import './AboutMe.css';
import photo from '../../images/photo.jpg';

function AboutMe() {
  return (
    <section className='about-me' id='about-me'>
      <Heading text='Студент' />
      <article className='about-me__box'>
        <img className='about-me__photo' alt='Nastya' src={photo} />
        <div className='about-me__info'>
          <h1 className='about-me__heading'>Настя</h1>
          <p className='about-me__caption'>
            Фронтенд&#8209;разработчик, 28 лет
          </p>
          <p className='about-me__paragraph'>
            Родилась в Саратове, закончила бакалавриат по специальности "Финансы" в СГУ. Получила магистерскую степень
            по направлению "Инновационный менеджмент" в ВШЭ. С 2017 года я работала бизнес-аналитиком в Accenture и в Microsoft 
            на роли Technical Account Manager. На данный момент заканчиваю проходить курс по веб-разработке от Яндекс.Практикум.
          </p>
          <div className='about-me__social'>
          <a
              className='about-me__link'
              target='_blank'
              href='https://github.com/afedr'
              rel="noreferrer">
              Github
            </a>
          </div>
        </div>
      </article>
    </section>
  );
}

export default AboutMe;