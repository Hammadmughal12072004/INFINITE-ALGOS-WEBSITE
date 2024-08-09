import hiring from '../img/hiring.jpg';
import '../styles/hiring.css'; // Import your CSS file for styling
import { Link } from "react-scroll";



function Hiring() {
  return (
      <>
        <div className="hiring">
          <div className="text-content">
            <h2 className="main-title">Join Our Team at INFINITE ALGOS!</h2>
            <p className="main-p">
              We’re on the lookout for talented developers to help us shape the future of technology. If you're passionate about innovation and eager to make a difference, we want to hear from you!
            </p>
            <h3 className="sub-title">What We’re Looking For:</h3>
            <ul className="requirements-list">
              <li>Flutter Developers: Build seamless, high-performance mobile apps.</li>
              <li>Unity Developers: Create engaging and immersive gaming experiences.</li>
              <li>React Developers: Develop dynamic and responsive web applications.</li>
              <li>Machine Learning Experts: Implement intelligent algorithms to drive data insights.</li>
            </ul>
            <h3 className="sub-title">Why Work with Us:</h3>
            <ul className="benefits-list">
              <li>Innovative Projects: Work on cutting-edge technology and impactful solutions.</li>
              <li>Dynamic Team: Collaborate with a team of forward-thinking professionals.</li>
              <li>Growth Opportunities: Enhance your skills and advance your career.</li>
              <li>Creative Environment: Contribute to projects that challenge and inspire.</li>
            </ul>
            <Link
                to="full-screen-container" // Adjust to match your target section ID
                spy={true}
                smooth={true}
                duration={1000}
                activeClass="active"
            >
              <button className="btn">Contact Us</button>
            </Link>
          </div>
          <div className="image-content">
            <img alt="Hiring" src={hiring} className="img-fluid" />
          </div>
        </div>
      </>
  );
}

export default Hiring;
