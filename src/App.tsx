
import { Header } from './sections/Header/Header';
import { Hero } from './sections/Hero/Hero';
import { About } from './sections/About/About';
import { Projects } from './sections/Projects/Projects';
import { Footer } from './sections/Footer/Footer';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
      <Footer />
    </>
  );
}

export default App;
