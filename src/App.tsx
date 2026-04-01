import { Routes, Route } from 'react-router-dom';
import { Header } from './sections/Header/Header';
import { Footer } from './sections/Footer/Footer';
import { Home } from './pages/Home/Home';
import { Resume } from './pages/Resume/Resume';

function App() {
  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
