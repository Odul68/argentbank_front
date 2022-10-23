import store from "../Redux/store";
import { fetchLogin } from "../Redux/actions";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useRef } from "react";
import Header from "../Components/Header";

export default function Login() {
  let email = useRef();
  let password = useRef();
  let rememberMe = useRef();
  let inputWrapper = useRef();
  const navigate = useNavigate();
  const statutReq = useSelector((state) => state.status);

  useEffect(() => {
    if (statutReq === "void") {
      recupererSession();
    }
    if (statutReq === "connected") {
      if (rememberMe.current.checked) {
        sauvegarderSession();
      } else {
        supprimerSession();
      }
      navigate("/User");
    }
  }, [statutReq, navigate]);

  function connexion(e) {
    e.preventDefault();
    if (email !== (undefined, null) || password !== (undefined, null)) {
      store.dispatch(fetchLogin(email.current.value, password.current.value));
    }
  }

  function sauvegarderSession() {
    try {
      if (
        email.current !== (undefined, null) ||
        password.current !== (undefined, null)
      ) {
        sessionStorage.setItem("email", email.current.value);
        sessionStorage.setItem("password", password.current.value);
        sessionStorage.setItem("rememberMe", rememberMe.current.checked);
      }
    } catch (e) {
      console.warn(e);
    }
  }

  function recupererSession() {
    try {
      if (
        email.current !== (undefined, null) ||
        password.current !== (undefined, null)
      ) {
        email.current.value = sessionStorage.getItem("email");
        password.current.value = sessionStorage.getItem("password");
        rememberMe.current.checked = sessionStorage.getItem("rememberMe");
      }
    } catch (e) {
      console.warn(e);
    }
  }

  function supprimerSession() {
    try {
      sessionStorage.clear();
    } catch (e) {
      console.warn(e);
    }
  }

  return (
    <>
      <Header />
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form>
          <div ref={inputWrapper} className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input ref={email} type="text" id="email" />
          </div>
          <div ref={inputWrapper} className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input ref={password} type="password" id="password" />
          </div>
          <div className="input-remember">
            <input ref={rememberMe} type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          <button onClick={connexion} className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </>
  );
}
