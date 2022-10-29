import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import store from "../Redux/store";
import { Logout } from "../Redux/actions";

export default function ConnectedUserInfo() {
  const firstName = useSelector((state) => state.data.body.firstName);

  return (
    <>
      <div>
        <Link to="/User" className="header-buttons">
          <i className="fa fa-user-circle"></i>
          {firstName}
        </Link>
        <Link
          id="logout"
          to="/"
          onClick={() => {
            store.dispatch(Logout());
          }}
          className="main-nav-item"
        >
          <i className="fa fa-sign-out"></i>
          Sign Out
        </Link>
      </div>
    </>
  );
}
