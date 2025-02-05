import { Images } from "../constants/Images";
import { DraggableContainer } from "./Interactable/DraggableContainer";
import './ClockItem.css';
import '../styles/global.css';
import '../styles/theme.css';

export function ClockItem(id, handleDrag, style ) {
    const currTime = new Date().toLocaleTimeString();

    return (
        <DraggableContainer
            id={ id }
            handleDrag = { handleDrag }
            style={ style }
        >
            <div className='clock-container'>
                <img
                    src={Images.clock}
                    className='clock'
                    contentFit='cover'
                    style={{
                        left: style.x,
                        top: style.y,
                        height: style.height,
                        width: style.width,
                    }}
                />
                <p className='nunito-medium-thin default-white time'>{ currTime }</p>
            </div>
        </DraggableContainer>
    );
}