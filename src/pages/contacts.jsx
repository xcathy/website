import Scrollbar from 'react-scrollbars-custom';
import { Images } from '../constants/Images';
import '../styles/global.css';
import '../styles/theme.css';

export default function Contacts() {
  return (
      <div className='vertical-container light-blue-background'>
        <img
          src={ Images.flower36 }
          alt='flower36'
          className='banner-image'
        />
        <Scrollbar
          style={{ width: "100vw", height: "100vh" }} 
        >
          <div className='page'>
            <div className='default-title'>
              <p className='raleway-large default-grey'>
                Contacts
              </p>
            </div>
  
            <div className='default-content'>
              <a
                href='https://www.linkedin.com/in/cathyxie97'
                target='_blank'
                className='raleway-default default-grey text-llink'
              >
                Linkedin
              </a>
              <br/>
              <a
                href='https://github.com/xcathy'
                target='_blank'
                className='raleway-default default-grey text-link'
              >
                Github
              </a>
            </div>
          </div>
        </Scrollbar>
      </div>
    );
}

