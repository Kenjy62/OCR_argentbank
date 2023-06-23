import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

import Logo from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const currentPath = location.pathname;
  console.log(currentPath);

  return (
    <header className="h-16 flex justify-between px-5 items-center">
      <Link to="/">
        <img src={Logo} className="h-14" />
      </Link>
      <div className="flex flex-row gap-4 items-center">
        {currentPath !== "/dashboard" ? (
          <>
            <i className="fa fa-user-circle"></i>
            <Link to="/signin">
              <span className="text-base font-semibold">Sign In</span>
            </Link>
          </>
        ) : (
          <>
            <Link className="flex flex-row gap-3 justify-center items-center">
              <i className="fa fa-user-circle"></i>
              <span className="text-base font-semibold">Tony</span>
            </Link>
            <Link
              className="flex flex-row gap-3 justify-center items-center"
              to="/"
            >
              <i className="fa fa-sign-out"></i>{" "}
              <span className="text-base font-semibold">Sign out</span>
            </Link>
          </>
        )}
      </div>
    </header>
  );
}
