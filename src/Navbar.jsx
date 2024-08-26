import logo from './assets/logo.png'; 
import './index.css'; 

function Navbar() {
  return (
    <>
      <nav className="navbar">
        <div className="nav-container">
          <a href="Navbar.jsx">
            <img src={logo} alt="SINGH TRAVELER Logo" id="logo" />
          </a>

          <button className="menu-toggle" id="menuToggle">
            <span className="menu-icon"></span>
          </button>
          
          <ul className="nav-menu" id="navMenu">
            <li><a href="#about" className="nav-item">About Us</a></li>
            <li><a href="#hero" className="nav-item">Ticket Booking</a></li>
            <li><a href="login.html" className="nav-item">Login</a></li>
            <li><a href="#contact" className="nav-item">Contact Us</a></li>
          </ul>
        </div>
      </nav>


      
    </>
  );
}

export default Navbar;
