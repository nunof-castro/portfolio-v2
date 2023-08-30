import About from 'components/About';
import Contact from 'components/Contact';
import Landing from 'components/Landing';
import Projects from 'components/Projects';

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}
