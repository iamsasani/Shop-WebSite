import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

function Nav() {
  return (
    <div className="bg-black/90 text-white font-serif">
      <div className="container flex justify-between mx-auto items-center py-3">
        <a className="text-2xl ">iamsasani Codding</a>
        <ul className="flex gap-10 text-gray-300">
          <li className="flex">
            <Link to="/" className="hover:text-gray-400">
              shop
            </Link>
          </li>
          <li className="flex">
            <Link to="/cart" className="hover:text-gray-400">
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
