import About from '../components/About';
import Services from '../components/Services';
import Contact from '../components/Contact';
import Hiring from '../components/Hiring';
import Team from './Team';
function Main() {
  return (
    <>
      <main>
        <Hiring />
        <Services />
        <About />
        <Contact />
        <Team/>
      </main>
    </>
  );
}
export default Main;
