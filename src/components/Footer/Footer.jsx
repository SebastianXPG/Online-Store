import Logo from "../../assets/img/Logo.png";
import whatsapp from "../../assets/svg/whatsapp.svg";
import facebook from "../../assets/svg/facebook.svg";
import instagram from "../../assets/svg/instagram.svg";
import discord from "../../assets/svg/discord.svg";
import "../Footer/Footer.css";

function Footer() {
  return (
    <footer>
      <div className="content-info">
        <div className="content-logo-info">
          <img src={Logo} alt="Logo" className="logo-footer" />
          <p className="text-footer">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Perferendis numquam tempora, voluptatibus earum voluptatum est
            voluptatem harum nam, quia ratione animi. Quia, voluptatibus? Minus
            voluptate dolor deserunt voluptatibus placeat hic?
          </p>
          <div className="content-phone">
            <p className="text-phone">Tienes Alguna Duda? Llama las 24/7</p>
            <div className="content-phone-svg">
              <i className="bi bi-telephone"></i>
              <h2>+57 3147398347</h2>
            </div>
          </div>
        </div>
        <div className="content-links">
          <a
            href="https://api.whatsapp.com/send?phone=573147398347"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={whatsapp} alt="WhatsApp" className="icon-footer"/>
            WhatsApp
          </a>
          <a href="/">
            <img src={facebook} alt="Facebook" className="icon-footer"/>
            Facebook
          </a>
          <a href="/">
            <img src={instagram} alt="Instagram" className="icon-footer"/>
            Instagram
          </a>
          <a href="/">
            <img src={discord} alt="Discord" className="icon-footer"/>
            Discord
          </a>
        </div>
        <div className="contents-footers">
          <h2>My Account</h2>
          <ul className="list-footers">
            <a href="/">
              <li>Sing In</li>
            </a>
            <a href="/">
              <li>View Cart</li>
            </a>
            <a href="/">
              <li>My Wishilist</li>
            </a>
            <a href="/">
              <li>Help</li>
            </a>
          </ul>
        </div>
        <div className="contents-footers">
          <h2>Customers Services</h2>
          <ul className="list-footers">
            <a href="/">
              <li>Payment Methods</li>
            </a>
            <a href="/">
              <li>Returns</li>
            </a>
            <a href="/">
              <li>Terms and Conditions</li>
            </a>
            <a href="/">
              <li>Privacy Policy</li>
            </a>
          </ul>
        </div>
      </div>
      <div className="content-copyright">
        <p>Copyright &copy; 2023 Onli-Store. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
