import imglogo from "../assets/Logo.svg";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="logo-footer">
          <img src={imglogo} alt="Company Logo" />
          <p>Smart Business</p>
          <div className="footer-text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            repellat vero nulla! Quibusdam, reiciendis maiores fugiat atque
            aliquam molestiae vero?
          </div>
        </div>
        <div className="footer_social">
          <h3>Social</h3>
          <p>Facebook</p>
          <p>Instagram</p>
          <p>Twitter</p>
        </div>
        <div className="footer_contact">
          <h3>Contact</h3>
          <p>Email: email.ru</p>
          <p>Phone: 123456789</p>
          <p>Address: Street 123</p>
        </div>
      </div>
      <div className="copyright">
        <p>© 2021 Victoria All rights reserved</p>
      </div>
    </footer>
  );
}
export default Footer;
