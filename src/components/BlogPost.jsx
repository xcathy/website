import { Specs } from '../constants/Specs';
import '../styles/global.css';
import '../styles/theme.css';
import './BlogPost.css';

export function BlogPost(id, image, style, title, subtitle, content, signature) {
    const webView = Specs.screenWidth > 800;

    const defaultStyle = {
        width: style.width,
        height: style.height,
        position: 'absolute',
        borderRadius: '15px',
        objectFit: 'cover',
    }
    
    return (
        <div key={ id } className='card'>
            <img
                alt={ id }
                className='card-image'
                style={ defaultStyle }
                src={ image }
            />
            <div className='card-text'>
                <p className='raleway-default default-white'>{ title }</p>
                <p className='raleway-small default-white'>{ subtitle }</p>
                <p className='raleway-small default-white content'>{ content }</p>
                <p className='raleway-small default-white'>{ signature }</p>
            </div>  
        </div>
    );
}
