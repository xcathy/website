import React from "react";
import { Images } from "../../constants/Images";

export const DraggableContainer = ({ id, children, handleDrag, style, handleClick }) => {
    const img = new Image();
    img.src = Images.clearImg;

    return (
        <div
            id={ id }
            onDragStart={ (e) => e.dataTransfer.setDragImage(img, 0, 0) }
            onDrag={ handleDrag }
            onClick={ handleClick }
            style={ style }
        >
            { children }
        </div>
    );
}