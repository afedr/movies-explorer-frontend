import "./Header.css";
import { ReactComponent as Logo } from "../../images/logo.svg";
import { NavLink } from "react-router-dom";
import SignButtons from "../SignButtons/SignButtons";
import Navigation from "../Navigation/Navigation";

function Header({ navigation }) {
  return (
    <header className="header">
      <NavLink to="/" className="header__home">
        <Logo className="header__logo" />
      </NavLink>
      {navigation && <Navigation />}
      {!navigation && <SignButtons />}
    </header>
  );
}

export default Header;
