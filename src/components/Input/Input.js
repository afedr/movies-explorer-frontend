import "./Input.css";

function Input({ label, value, name, type,autoComplete, placeholder, onChange, errors, minLength, maxLength }) {
  return (
    <div className="input__out">
      {label}
      <input className={`input__in ${errors ? 'input__inside__error' : ''}`} value={value} name={name} type={type} autoComplete={autoComplete} onChange={onChange} maxLength={maxLength} minLength={minLength}/>
      {errors && <p className='input__error'>{errors}</p>}
    </div>
  );
}

export default Input;
