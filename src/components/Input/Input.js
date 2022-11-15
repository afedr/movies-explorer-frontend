import './Input.css';

function Input({label, type, value}) {

  return (
    <label className='input__outside'>
        {label}
      <input
        className='input__inside'
        type={type}
        value={value}
      />
    </label>
  );
}

export default Input;