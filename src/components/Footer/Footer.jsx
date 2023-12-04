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
              <i class="bi bi-telephone"></i>
              <h2>+57 3147398347</h2>
            </div>
          </div>
        </div>
        <div className="content-links">
          <a href="/">
            <img src={whatsapp} alt="WhatsApp" />
            WhatsApp
          </a>
          <a href="/">
            <img src={facebook} alt="Facebook" />
            Facebook
          </a>
          <a href="/">
            <img src={instagram} alt="Instagram" />
            Instagram
          </a>
          <a href="/">
            <img src={discord} alt="Discord" />
            Discord
          </a>
        </div>
        <div className="content-my-account">
            <h2>My Account</h2>
          <ul>
            <li>Sing In</li>
            <li></li>
            <li></li>
            <li></li>
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
