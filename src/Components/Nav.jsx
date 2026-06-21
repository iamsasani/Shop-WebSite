import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { useContext, useState } from "react";
import { ShopContext } from "../context/shopContext";
import AuthModal from "../Components/AuthModal";

function Nav() {
  const { cartItems } = useContext(ShopContext);
  const [showModal, setShowModal] = useState(false);

  const itemCount = cartItems.reduce((prev, current) => {
    return prev + current.count;
  }, 0);

  return (
    <>
      <div className="nav">
        <div className="navContainer">
          <div>
            <span
              className="userSpan cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Log in
            </span>
            {" / "}
            <span
              className="userSpan cursor-pointer"
              onClick={() => setShowModal(true)}
            >
              Register
            </span>
          </div>
          <a className="text-2xl">iamsasani Codding</a>
          <ul className="flex gap-10 text-gray-300">
            <li className="flex">
              <Link to="/" className="navLink">shop</Link>
            </li>
            <li className="flex">
              <Link to="/cart" className="navLink">
                <div className="relative">
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

      {/* modal */}
      {showModal && <AuthModal onClose={() => setShowModal(false)} />}
    </>
  );
}

export default Nav;