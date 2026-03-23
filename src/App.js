import { HashRouter, Route, Routes, Link } from 'react-router-dom';
import Home from './pages/home';
import Blog from './pages/blog';
import Games from './pages/games';
import About from './pages/about';
import Contacts from './pages/contacts';
import './App.css';
import '../src/styles/global.css';
import { useState } from 'react';
import { Specs } from './constants/Specs';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faChevronUp } from '@fortawesome/free-solid-svg-icons';

function App() {
  const mobileView = Specs.screenWidth < 600;
  const [ displayTab, setDisplayNav ] = useState(!mobileView);

  return (
    <HashRouter>
      { displayTab ?
        <div className='navigation-expanded'>
          <nav>
            <Link to="/" className='nunito-medium'>HOME</Link>
            <Link to="/blog" className='nunito-medium'>BLOG</Link>
            <Link to="/games" className='nunito-medium'>GAMES</Link>
            <Link to="/about" className='nunito-medium'>ABOUT</Link>
            <Link to="/contacts" className='nunito-medium'>CONTACTS</Link>
            <FontAwesomeIcon
              icon={faChevronUp}
              className='collapse-icon'
              onClick={() => { setDisplayNav(false) }}  
            />
          </nav>
        </div>
        :
        <div className='navigation-collapsed'>
          <FontAwesomeIcon
            icon={faBars}
            className='navigation-icon'
            onClick={() => { setDisplayNav(true) }}  
          />
        </div>
      }
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/games"
          element={
            <Games setDisplayNav={ setDisplayNav } />
          }
        />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </HashRouter>
  );
}

export default App;