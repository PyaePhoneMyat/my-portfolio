import About from './Components/About';
import Banner from './Components/Banner';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Projects from './Components/Projects';
import Skills from './Components/Skills';

const App = () => {
  return (
    <div className='bg-black'>
      <Nav />
      <Banner />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
};

export default App;
