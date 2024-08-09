import { Link, animateScroll as scroll } from 'react-scroll';
import logo from '.././img/IAlogo.png';
import "../styles/footer.css"
function Footer() {
  return (
    <footer>
      <div className="footer-content">
        <div className="side1">
          <img src={logo} alt="INFINITE ALGOS Logo" className="logo1" />
          <div>
            <h1 className="logo">INFINITE ALGOS</h1>

          </div>
        </div>
        <div className="side2">
          <p className="footer-title">Important Links</p>
          <ul>
            <li>
              <Link spy={true} smooth={true} duration={1000} to="video-container"> Home </Link>
            </li>
            <li>
              <Link spy={true} smooth={true} duration={1000} to="hiring"> Hiring </Link>
            </li>
            <li>
              <Link to="services" spy={true} smooth={true} duration={1000}> Services </Link>
            </li>
            <li>
              <Link to="about" spy={true} smooth={true} duration={1000}> About Us </Link>
            </li>
            <li>
              <Link to="full-screen-container" spy={true} smooth={true} duration={1000}> Contact </Link>
            </li>
          </ul>
        </div>

        <div className="side3">
          <p className="footer-title">Contact</p>
          <ul>
            <li><a href="mailto:ceo@infinitealgos.com">baseerqazi@gmail.com</a></li>
            <li><a href="mailto:cto@infinitealgos.com">junaidnasir8282@gmail.com</a></li>
            <li><a href="tel:+923458677778">+92 345 8677778</a></li>
            <li><a href="tel:+923116741249">+92 311 6741249</a></li>
          </ul>
        </div>
        <div className="side3">
          <p className="footer-title">Social Media</p>
          <ul>
            <li><a target="_blank" rel="noreferrer" href="https://github.com/junaid8262">Github</a></li>
            <li><a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/junaid-nasir-a44b03203/">LinkedIn</a></li>
          </ul>
          
        </div>
        <div className="side2">
          <p className="footer-title">Address</p>
          <p className="footer-address">T-8, 3rd Floor, Arshad Sharif Plaza, Plot-16, G-11 Markaz, 44000 Islamabad, Pakistan</p>
        </div>
      </div>

    </footer>
    
  );
}

export default Footer;
