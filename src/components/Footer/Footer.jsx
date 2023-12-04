import logo from "assets/logo.svg";
import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="footer__company">
          <img src={logo} alt="Morent Logo" />

          <p>
            Our vision is to provide convenience and help increase your sales
            business.
          </p>
        </div>
        <div className="footer__links">
          <div className="footer__links-about">
            <p className="footer__links-title">About</p>

            <ul className="footer__links-list">
              <li className="footer__links-item">How it works</li>
              <li className="footer__links-item">Featured</li>
              <li className="footer__links-item">Partnership</li>
              <li className="footer__links-item">Business Relation</li>
            </ul>
          </div>

          <div className="footer__links-Community">
            <p className="footer__links-title">Community</p>

            <ul className="footer__links-list">
              <li className="footer__links-item">Events</li>
              <li className="footer__links-item">Blog</li>
              <li className="footer__links-item">Podcast</li>
              <li className="footer__links-item">Invite a friend</li>
            </ul>
          </div>

          <div className="footer__links-Socials">
            <p className="footer__links-title">Socials</p>

            <ul className="footer__links-list">
              <li className="footer__links-item">Discord</li>
              <li className="footer__links-item">Instagram</li>
              <li className="footer__links-item">Twitter</li>
              <li className="footer__links-item">Facebook</li>
            </ul>
          </div>
        </div>
      </div>

      <hr />
      <div className="footer__rights">
        <div className="footer__rights-copyright">
          ©2022 MORENT. All rights reserved
        </div>

        <div className="footer__rights-links">
          <p>Privacy & Policy</p>
          <p>Terms & Condition</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
