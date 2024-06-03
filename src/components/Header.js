import { useEffect, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/customHooks/useOnlineStatus";

const Header = () => {
  const [btnNameReact, setBtnnameReact] = useState("Login");

  const onLoginBtn = () => {
    btnNameReact === "Login"
      ? setBtnnameReact("Logout")
      : setBtnnameReact("Login");
  };

  const onlinestatus = useOnlineStatus();
  //UseEffect------If no dependency array => useEffect is called on eveery render
  //If dependency array is empty = [] => useEffect is called on initial render (just once)
  //if dependency array is [btnNameReact] -> called everytime when btnNameReact is updated

  useEffect(() => {
    console.log("useeffect called");
  }, [btnNameReact]);
  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul>
          <li>Online status: {onlinestatus === true ? "✅" : "🔴"}</li>
          <li>
            <Link to="/grocery">Grocery</Link>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About Us</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button className="login" onClick={onLoginBtn}>
            {btnNameReact}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
