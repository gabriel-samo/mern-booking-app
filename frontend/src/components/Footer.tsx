import { Link } from "react-router-dom";
import logoIcon from "../assets/logo.min.svg";

const Footer = () => {
  return (
    <div className="pt-6 pb-3 px-20">
      <div className="container mx-auto flex justify-between items-center">
        <p className="link text-lg">Privacy Policy</p>
        <span className="text-xl text-dark font-semibold tracking-tight py-2">
          <Link to="/" className="flex items-center justify-center gap-1">
            <img src={logoIcon} className="size-8 object-contain" />
            <span>MernVacation</span>
          </Link>
        </span>
        <p className="link text-lg">Terms &amp; Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
