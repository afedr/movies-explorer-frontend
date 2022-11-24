import './SubmitButton.css';

function SubmitButton({ label, handleSubmit, isDisabled}) {
  return (
    <button
      className={`submit-button ${isDisabled ? 'submit-btn_is-disabled' : ''}`}
      type='submit'
      onClick={handleSubmit}
      disabled={isDisabled}> 
      {label}
    </button>
  );
}

export default SubmitButton;

