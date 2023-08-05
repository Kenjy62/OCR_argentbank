// Required
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Store Redux
import { userLogout } from "../store/user";

// Assets
import Logo from "../assets/logo.png";

export default function Header() {
  const user = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const location = useLocation();
  const currentPath = location.pathname;

  const logout = () => {
    dispatch(userLogout());
    setTimeout(() => {
      navigate("/");
    });
  };

  return (
    <header className="h-16 flex justify-between px-5 items-center">
      <Link to="/">
        <img src={Logo} className="h-14" />
      </Link>
      <div className="flex flex-row gap-4 items-center">
        {currentPath === "/" && !user.connected ? (
          <Link
            to="/login"
            className="flex flex-row gap-3 justify-center items-center"
          >
            <i className="fa fa-user-circle"></i>
            <span className="text-base font-semibold">Sign In</span>
          </Link>
        ) : currentPath === "/" && user.connected ? (
          <Link
            to="/profile"
            className="flex flex-row gap-3 justify-center items-center"
          >
            <i className="fa fa-user-circle"></i>
            <span className="text-base font-semibold">{user.email}</span>
          </Link>
        ) : currentPath != "/" && user.connected ? (
          <>
            <i className="fa fa-user-circle"></i>
            <span className="text-base font-semibold">{`${user.firstName}`}</span>
            <Link
              onClick={logout}
              className="flex flex-row gap-3 justify-center items-center"
            >
              <i className="fa fa-sign-out"></i>
              <span className="text-base font-semibold">Sign out</span>
            </Link>
          </>
        ) : null}
      </div>
    </header>
  );
}
