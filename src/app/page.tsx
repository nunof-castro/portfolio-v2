import About from 'components/About';
import Landing from 'components/Landing';
import Navbar from 'components/Navbar';

export default function Home() {
  return (
    <main>
      <Navbar />
      <Landing />
      <div className="sectionsWrapper">
        <About />
      </div>
    </main>
  );
}
