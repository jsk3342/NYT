import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import EmptyScrap from './pages/home/EmptyScrap/EmptyScrap';
import Main from './pages/home/Main/Main';
import Modal from './pages/home/Modal/Modal';
<link
  rel="stylesheet"
  href="//cdn.jsdelivr.net/npm/font-applesdgothicneo@1.0/all.min.css"
></link>;

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      {/* <EmptyScrap /> */}
      {/* <Modal /> */}
      <Footer />
    </div>
  );
}

export default App;
