import "./FormHeader.css";
import { ReactComponent as Logo } from "../../images/logo.svg";

function FormHeader({ text }) {
  return (
    <header className="form-header">
      <Logo className="form-header__logo" />
      <h1 className="form-header__caption">{text}</h1>
    </header>
  );
}

export default FormHeader;
