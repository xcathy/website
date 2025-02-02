import React, { CSSProperties, DragEventHandler } from "react";
import { Images } from "@/constants/Images";

type props = {
    id: string,
    children: React.ReactNode,
    handleDrag: DragEventHandler<HTMLDivElement>,
    style: CSSProperties,
    handleClick?: React.MouseEventHandler<HTMLDivElement> | undefined,
}

export const DraggableContainer: React.FC<props> = ({ id, children, handleDrag, style, handleClick }) => {
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