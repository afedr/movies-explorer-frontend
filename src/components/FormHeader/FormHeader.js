import "./FormHeader.css";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "../../images/logo.svg";

function FormHeader({ text }) {
  return (
    <header className="form-header">
      <NavLink to="/">
        <Logo className="form-header__logo" />
      </NavLink>
      <h1 className="form-header__caption">{text}</h1>
    </header>
  );
}

export default FormHeader;
