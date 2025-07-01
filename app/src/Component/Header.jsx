import img from "../assets/Logo.svg";

function Header() {
  return (
    <nav className="lg-container">
      <div className="nav-link">
      <div className="logo">
        <img src={img} alt="Company Logo" />
      </div>
      <div className="nav-bar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact</li>
          <button>Login</button>
        </ul>
      </div>
      </div>
    </nav>
  );
}
export default Header;
