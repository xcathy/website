import '../styles/global.css';
import '../styles/theme.css';
import './GameEntry.css';
import '../App.css';

export function GameEntry(id, image, title, desc, fullScreenMode, mobile, exeLink = null, apkLink = null, webLink = null) {
    
    return (
        <div key={ id } className='entry'>
            <div className='entry-title'>
                <img
                    alt={ id }
                    className='entry-image'
                    src={ image }
                />
                <p className='raleway-medium-large default-grey entry-title-text'>{ title }</p>
            </div>
            <div className='entry-text'>
                <p className='raleway-medium-bold default-grey entry-desc'>{ desc }</p>
                <div className='entry-links'>
                    <a href={ exeLink } download className='raleway-small default-grey'>
                        Download Windows Version Here
                    </a>
                    <p className='raleway-medium-bold default-grey'>{ apkLink }</p>
                    { !mobile && <p className='raleway-medium-bold default-grey text-link' onClick={fullScreenMode}>{ webLink }</p> }
                </div>
                
            </div>  
        </div>
    );
}