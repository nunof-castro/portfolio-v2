import About from 'components/About';
import Contact from 'components/Contact';
import Landing from 'components/Landing';
import Loader from 'components/Loader';
import Navbar from 'components/Navbar';
import Projects from 'components/Projects';

export default function Home() {
  return (
    <main>
      {/* <Navbar /> */}
      <Landing />
      <div className="sectionsWrapper">
        <About />
        <Projects />
        {/* <Contact /> */}
      </div>
    </main>
  );
}
