import { Images } from "../constants/Images";
import { DraggableContainer } from './Interactable/DraggableContainer';
import '../styles/global.css';
import '../styles/theme.css';
import './CalendarItem.css';

export function CalendarItem(id, handleDrag, style ) {
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    const currYear = new Date().getFullYear();
    const currMonth = new Date().getMonth()
    const monthText = months[currMonth];
    const currDay = new Date().getDate();

    return (
        <DraggableContainer
            id={ id }
            handleDrag = { handleDrag }
            style={ style }
        > 
            <div className='calendar-container' >
                <img
                    src={ Images.calendar }
                    contentFit='cover'
                    className='calendar'
                    style={{ left: style.left, top: style.top, height: style.height, width: style.width }}
                />
                <p className='nunito-default default-grey year'>{ currYear }</p>
                <p className='nunito-large text-pink day'>{ currDay }</p>
                <p className='nunito-default default-grey month'>{ monthText }</p>
            </div>
        </DraggableContainer>
    );
}