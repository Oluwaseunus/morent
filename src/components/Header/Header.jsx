import { Link } from "react-router-dom";

import cog from "assets/cog.svg";
import logo from "assets/logo.svg";
import profile from "assets/profile.png";
import brownHeart from "assets/brown-heart.svg";
import brownNotification from "assets/brown-notification.svg";

import "./Header.css";
import { Setting4, SearchNormal } from "iconsax-react";

function Header() {
  return (
    <header className="header">
      <Link to="/">
        <img src={logo} alt="Morent logo" />
      </Link>

      <div className="search">
        <SearchNormal variant="Linear" size={24} color="#3D5278" />
        <input type="text" placeholder="Search something here" />
        <Setting4 variant="Linear" size={24} color="#3D5278" />
      </div>

      <div className="activities">
        <button>
          <img src={brownHeart} alt="Likes" />
        </button>

        <button>
          <img src={brownNotification} alt="Notifications" />
        </button>

        <button>
          <img src={cog} alt="Settings" />
        </button>

        <button>
          <img src={profile} alt="Profile" />
        </button>
      </div>
    </header>
  );
}

export default Header;
