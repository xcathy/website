import { useState} from 'react';
import { Images } from '../constants/Images';
import { ImageHover } from '../hooks/ImageManipulate';
import Scrollbar from 'react-scrollbars-custom';
import '../styles/global.css';
import '../styles/theme.css';
import './home.css';
import { useNavigate } from 'react-router-dom';

export default function Home() {
  const [hoverPosition, setHoverPosition] = useState({ L: -10.0, T: -10.0 });
  const navigate = useNavigate();

  return (
    <div className='main-container'>
      <div className='home-title-container'>
        <h1 className='raleway-large-thin float-white'>Welcome to my blog!</h1>
      </div>
      <div className='home-content-container'>
        <p className='raleway-medium-thin float-white'>Click anywhere to proceed to blog posts :D</p>
        <p className='raleway-medium-thin text-alert float'>New update: Game added in Desk!</p>
      </div>
      <Scrollbar
        style={{ width: '100vw', height: '100vh' }} 
      >
        <img
          src={Images.seal}
          alt='seal'
          onMouseMove={
            (e) => {
              const { offsetWidth, offsetHeight } = e.target;
              setHoverPosition(ImageHover(e, hoverPosition.L, hoverPosition.T, offsetWidth, offsetHeight));
            }}
          onClick={ () => navigate('/blog') }
          style={{
            position: 'absolute',
            width: '120%',
            height: 'auto',
            left: `${hoverPosition.L}px`,
            top: `${hoverPosition.T}px`,
            zIndex: 0,
            cursor: 'pointer',
          }}
        />
      </Scrollbar>
    </div>
   
  );
}
