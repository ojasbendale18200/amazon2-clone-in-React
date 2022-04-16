import React from "react";
import "./Header.css";
import SearchIcon from "@mui/icons-material/Search";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useStateValue } from "./StateProvider";
import { auth } from "../firebase";

function Header() {
  const [{ cart, user }, dispatch] = useStateValue();
  const navigate = useNavigate();

  const handleAuthentication = () => {
    if (user) {
      auth.signOut();
    } else {
      navigate("/login");
    }
  };

  return (
    <header className="header">
      <img
        onClick={() => navigate("/")}
        src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
        className="header__logo"
        alt=""
      />

      <div className="header__search">
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>

      <div className="header__right">
        <div className="header__option" onClick={handleAuthentication}>
          <span className="header__optionLineOne">
            Hello <strong>{!user ? "Guest" : user.email}</strong>
          </span>
          <span className="header__optionLineTwo">
            {user ? "Sign Out" : "Sign In"}
          </span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Returns</span>
          <span className="header__optionLineTwo">& Orders</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Your</span>
          <span className="header__optionLineTwo">Prime</span>
        </div>
        <div
          className="header__optionBasket"
          onClick={() => navigate("/checkout")}
        >
          <span className="header__basketCount">{cart?.length}</span>
          <ShoppingCartIcon className="header__cartLogo" />
        </div>
      </div>
    </header>
  );
}

export default Header;
