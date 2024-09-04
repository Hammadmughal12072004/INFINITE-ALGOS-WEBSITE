import aboutUs from '../img/aboutUs.jpg';
import '../styles/about.css'; // Import your CSS file for styling
import { Link } from "react-scroll";

function About() {

  return (
      <>
        <div className="about">
          <div className="image-content">
            <img alt="about" src={aboutUs} className="img-fluid" loading="lazy"/>
          </div>
          <div className="text-content">
            <h2 className="main-title about-h2">ABOUT US</h2>
            <p className="main-p">
              Welcome to INFINITE ALGOS, where creativity meets innovation. We specialize in cutting-edge AI solutions,
              seamless mobile app development, captivating web experiences, and immersive game development. Our team is
              passionate about pushing the boundaries of technology to craft digital masterpieces that inspire and
              empower.

              At INFINITE ALGOS, we go beyond software development; we create solutions that optimize business
              operations with AI-driven insights and deliver unforgettable user experiences in the gaming world. Our
              dedicated team is committed to turning your vision into reality. Join us in shaping the future of digital
              solutions, one algorithm at a time.
            </p>

            <Link
                to="services" // Adjust to match your target section ID
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
            >
              <button className="btn">Learn More</button>
            </Link>
          </div>
        </div>
      </>
  );

}

export default About;
