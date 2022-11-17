import './Heading.css';

function Heading({ text }) {
  return (
    <>
      <h2 className='heading__caption'>{text}</h2>
      <hr className='heading__line' />
    </>
  );
}

export default Heading; 