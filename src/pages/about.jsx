import Scrollbar from 'react-scrollbars-custom';
import { Images } from '../constants/Images';
import '../styles/global.css';
import '../styles/theme.css';

export default function About() {
  return (
    <div className='vertical-container light-blue-background'>
      <img
        src={ Images.frog1 }
        alt='frog'
        className='banner-image'
      />
      <Scrollbar
        style={{ width: "100vw", height: "100vh" }} 
      >
        <div className='page'>
          <div className='default-title'>
            <p className='raleway-large default-grey'>
              About
            </p>
          </div>

          <div className='default-content'>
            <p className='raleway-default default-grey'>
              A portfolio, blog, and demo website<br/>
              Art, photos, music used created by: me<br/>
              Some apps used: VSCode, Chrome Music Lab, Pixilart, Piskel, Sketchbook, FireAlpaca, Unity
            </p>
          </div>
        </div>
      </Scrollbar>
    </div>
  );
}
