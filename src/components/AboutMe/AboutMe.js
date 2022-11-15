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
            Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть жена 
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. 
            С 2015 года работал в компании «СКБ Контур». После того, 
            как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл 
            с постоянной работы.
          </p>
          <div className='about-me__social'>
            <a
              className='about-me__link'
              target='_blank'
              href='https://www.linkedin.com/in/anastasiiafimushkina/'
              rel="noreferrer">
              LinkedIn
            </a>
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