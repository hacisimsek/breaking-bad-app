import './App.css';
import { Routes, Route, Link } from 'react-router-dom';

// pages
import Home from './pages/Home';
import Detail from './pages/Detail';
import Quotes from './pages/Quotes';
import QuoteDetail from './pages/QuoteDetail';


function App() {
  return (
    <div className="App">
      <nav style={{display: 'flex' , justifyContent: 'center'}}>
        <Link className="m-3" to="/">Home</Link>
        <Link className="m-3" to="/about">About</Link>
        <Link className="m-3" to="/quotes">Quotes</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/char/:char_id" element={<Detail />} />
        <Route path="/quotes" element={<Quotes />} />
        <Route path="/quote/:quote_id" element={<QuoteDetail />} />
      </Routes>
    </div>
  );
}

function About() {
  return (
    <>
      <main>
        <h2>Hacı Şimşek</h2>
        <p>Software Engineer</p>
        <a href="mailto:hacisimsek23@gmail.com">Email</a>
      </main>
    </>
  );
}

export default App;
