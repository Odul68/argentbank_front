import logo from "../images/argentBankLogo.png";
import { Link } from "react-router-dom";
import store from "../Redux/store";
import { useSelector } from "react-redux";
import { Logout } from "../Redux/actions";
import { useEffect, useRef } from "react";

/**
 * Shows Header with :
 * login button when not connected
 * logout button when connected
 *
 */

export default function Header() {
  const connected = useSelector((state) => state.connected);
  const loginLink = useRef();
  const logoutLink = useRef();
  const logoutIcon = useRef();

  useEffect(() => {
    if (connected === true) {
      loginLink.current.style.display = "none";
    } else {
      logoutLink.current.style.display = "none";
      logoutIcon.current.style.display = "none";
      loginLink.current.style.display = "block";
    }
  }, [connected]);

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
      <div>
        <Link ref={loginLink} id="login" to="/Login" className="main-nav-item">
          <i className="fa fa-user-circle signInIcon"></i>
          Sign In
        </Link>
        <Link ref={logoutIcon} to={connected ? "/User" : "/login"}>
          <i className="fa fa-user-circle logoutIcon"></i>
        </Link>
        <Link
          ref={logoutLink}
          id="logout"
          to="/"
          onClick={() => {
            store.dispatch(Logout());
          }}
          className="main-nav-item"
        >
          Logout
        </Link>
      </div>
    </nav>
  );
}
