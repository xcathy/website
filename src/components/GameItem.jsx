import { DraggableContainer } from "./Interactable/DraggableContainer";
import { Specs } from "../constants/Specs";
import { Images } from "../constants/Images";
import './GameItem.css';
import '../styles/global.css';
import '../styles/theme.css';

export function GameItem(id, handleDrag, handleClick, style ) {
    const webView = Specs.screenWidth > 800;

    return (
        <DraggableContainer
            id={ id }
            handleDrag = { handleDrag }
            handleClick={ handleClick }
            style={ style }
        >
            <div key={ id } className='canvas'>
                <img
                    src={Images.canvas}
                    contentFit='cover'
                    className='canvas-image'
                    style={{
                        left: style.left,
                        top: style.top,
                        width: style.width,
                        height: style.height,
                        cursor: 'pointer',
                    }}
                />
                <div className='canvas-text'>
                    <p className='raleway-medium default-white'>Maze Game</p>
                    <p className='raleway-default default-white'>Click here to play!</p>
                </div>
            </div>
        </DraggableContainer>
    );
}