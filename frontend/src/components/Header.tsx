import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-emerald-800 py-6">
      <div className="container mx-auto flex justify-between">
        <span className="text-3xl text-white font-bold tracking-tight">
          <Link to="/">MernBooking.com</Link>
        </span>
        <span className="felx space-x-2">
          <Link
            to="/sign-in"
            className="flex items-center text-emerald-500 px-3 py-2 rounded-md font-bold bg-white hover:bg-gray-100"
          >
            Sign In
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Header;
