import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import Desk from './pages/desk';
import About from './pages/about';
import Contacts from './pages/contacts';
import Game from './pages/game';
import './App.css';
import '../src/styles/global.css';

function App() {
  return (
    <Router>
      <div className='navigation'>
        <nav>
          <Link to="/" className='nunito-medium'>HOME</Link>
          <Link to="/blog" className='nunito-medium'>BLOG</Link>
          <Link to="/desk" className='nunito-medium'>DESK</Link>
          <Link to="/about" className='nunito-medium'>ABOUT</Link>
          <Link to="/contacts" className='nunito-medium'>CONTACTS</Link>
        </nav>
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/desk" element={<Desk />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/game" element={<Game />} />
      </Routes>
    </Router>
  );
}

export default App;