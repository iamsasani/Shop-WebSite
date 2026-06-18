import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import { ShopContext } from "../context/shopContext";

function Nav() {
  const { cartItems } = useContext(ShopContext);

  const itemCount = cartItems.reduce((prev, current) => {
    return prev + current.count;
  }, 0);

  return (
    <div className="nav">
      <div className="navContainer">
        <a className="text-2xl ">iamsasani Codding</a>
        <ul className="flex gap-10 text-gray-300">
          <li className="flex">
            <Link to="/" className="navLink">
              shop
            </Link>
          </li>
          <li className="flex ">
            <Link to="/cart" className="navLink ">
              <div className="absolute">
                <FontAwesomeIcon icon={faShoppingCart} />
                {itemCount > 0 && (
                  <span className="countItem">{itemCount}</span>
                )}
              </div>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
