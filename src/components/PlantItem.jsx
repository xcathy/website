import { Images } from "../constants/Images";
import { DraggableContainer } from './Interactable/DraggableContainer';
import './PlantItem.css';

export function PlantItem(id, handleDrag, style ) {
    return (
        <DraggableContainer
            id={ id }
            handleDrag = { handleDrag }
            style={ style }
        > 
           <img
                src={Images.plant}
                contentFit='cover'
                className='plant'
                style={{ left: style.left, top: style.top, height: style.height, width: style.width }}
            />
        </DraggableContainer>
    );
}