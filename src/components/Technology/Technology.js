import './Technology.css';
import Heading from '../Heading/Heading';

function Technology() {
  return (
    <section className='techs' id='techs'>
      <Heading text='Технологии' />
      <article className='techs__description'>
        <h1 className='techs__heading'>7 технологий</h1>
        <p className='techs__article'>
          На курсе веб-разработки мы освоили технологии, которые применили в
          дипломном проекте.
        </p>
      </article>
      <article className='techs__tags'>
        <div className='techs__tag'>HTML</div>
        <div className='techs__tag'>CSS</div>
        <div className='techs__tag'>JS</div>
        <div className='techs__tag'>React</div>
        <div className='techs__tag'>Git</div>
        <div className='techs__tag'>Express.js</div>
        <div className='techs__tag'>mongoDB</div>
      </article>
    </section>
  );
}

export default Technology;