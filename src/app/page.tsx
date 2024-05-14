import 'mapbox-gl/dist/mapbox-gl.css';

import About from 'components/About';
import Contact from 'components/Contact';
import Globe from 'components/Globe';
import Landing from 'components/Landing';

export default function Home() {
  return (
    <main>
      <Landing />
      <About />
      <Globe />
      <Contact />
    </main>
  );
}
