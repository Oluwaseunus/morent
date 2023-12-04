import cog from "assets/cog.svg";
import logo from "assets/logo.svg";
import profile from "assets/profile.png";
import brownHeart from "assets/brown-heart.svg";
import brownNotification from "assets/brown-notification.svg";

import "./Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Morent logo" />

      <div className="search"></div>

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
