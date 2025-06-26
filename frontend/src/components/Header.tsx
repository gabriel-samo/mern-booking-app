import { Link } from "react-router-dom";
import { useAppContext } from "../context/AppContext";
import SignOutButton from "./SignOutButton";
import logoIcon from "../assets/logo.min.svg";

const Header = () => {
  const { isLoggedIn } = useAppContext();

  return (
    <div className="py-8 px-12">
      <div className="container mx-auto flex justify-between items-center">
        <span className="text-2xl text-dark font-semibold tracking-tight py-2">
          <Link to="/" className="flex items-center justify-center">
            <img src={logoIcon} className="size-12 object-contain" />
            MernVacation
          </Link>
        </span>
        <span className="flex gap-2">
          {isLoggedIn ? (
            <div className="flex items-center gap-2">
              <Link className="btn btn-md btn-secondary" to="/my-booking">
                My Bookings
              </Link>
              <Link className="btn btn-md btn-secondary" to="/my-hotels">
                My Hotels
              </Link>
              <SignOutButton />
            </div>
          ) : (
            <Link to="/sign-in" className="btn btn-lg btn-primary">
              Sign In
            </Link>
          )}
        </span>
      </div>
    </div>
  );
};

export default Header;
