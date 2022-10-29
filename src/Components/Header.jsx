import logo from "../images/argentBankLogo.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import ConnectedUserInfo from "./ConnectedUserInfo";

/**
 * Shows Header with :
 * login button when not connected
 * logout button when connected
 *
 */

export default function Header() {
  const connected = useSelector((state) => state.connected);

  return (
    <nav className="main-nav">
      <Link to="/" className="main-nav-logo">
        <img
          className="main-nav-logo-image"
          src={logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {connected ? (
        <ConnectedUserInfo />
      ) : (
        <Link id="login" to="/Login" className="main-nav-item">
          <i className="fa fa-user-circle signInIcon"></i>
          Sign In
        </Link>
      )}
    </nav>
  );
}
