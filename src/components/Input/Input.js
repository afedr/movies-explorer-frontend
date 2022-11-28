import "./Input.css";

function Input({ label, value }) {
  return (
    <div className="input__out">
      {label}
      <input className="input__in" value={value} />
    </div>
  );
}

export default Input;
