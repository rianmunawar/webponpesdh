import Berita from './components/organisms/Berita';
import Carousel from './components/organisms/carousel/Carousel';
import CtaBanner from './components/organisms/CtaBanner';
import Footer from './components/organisms/Footer';
import Gallery from './components/organisms/Gallery';
import Greating from './components/organisms/Greating/Greating';
import Header from './components/organisms/Header/Header';
import History from './components/organisms/History/History';
import Program from './components/organisms/Program/Program';

function App() {
  return (
    <div className="App">
      <Header />
      <Carousel />
      <Program />
      <Greating />
      <History />
      <Berita />
      <Gallery />
      <CtaBanner />
      <Footer />
    </div>
  );
}

export default App;
