import Home from './pages/home/Home.js';
import Scrap from './pages/Scrap/Scrap';
import './App.css';
import Header from './components/Header/Header.js';
import Footer from './components/Footer/Footer.js';

<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/all.min.css"
></link>;

function App() {
  return (
    <div className="App">
      <Header />
      <Home />
      {/* <Scrap /> */}
      <Footer />
    </div>
  );
}

export default App;
