import { useEffect, useReducer, useState } from "react";
import { Tooltip } from 'react-tooltip';
import { Images } from "../constants/Images";
import { Specs } from "../constants/Specs";
import '../styles/global.css';
import '../styles/theme.css';

export function Cat(dialogue, style) {
    const imageWidth = style.width || 45;
    const imageHeight = style.height || 45;
    const screenW = Specs.screenWidth;
    const pathLength = Specs.screenWidth - imageWidth;
    const pace = 5;
    
    const [ direction, toggleDirection ] = useReducer((prev) => -prev, -1);
    const [ back, setBack ] = useState(0);
    const [ forward, setForward ] = useState(0);
    const [ curLeft, setCurLeft ] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (direction > 0 && (forward + 1) * pace >= pathLength) {
                toggleDirection();
            }
            if (direction < 0 && (back + 1) * pace >= pathLength) {
                toggleDirection();
            }

            if (direction > 0) {
                setBack(0);
                setForward(forward + 1);
            }
            if (direction < 0) {
                setForward(0);
                setBack(back + 1);
            }
        }, 1000);

        setCurLeft(direction > 0 ? forward * pace : (screenW - imageWidth) - back * pace);
    });

    return (
        <div>
            <img
                className="cat-tooltip"
                style={{
                    width: `${ imageWidth }px`,
                    height: `${ imageHeight }px`,
                    position: 'relative',
                    left: `${ curLeft }px`,
                    top: 'auto',
                    transform: direction > 0 ? 'rotateY(180deg)' : undefined,
                }}
                src={ Images.catWalkCycle }
            />
            <Tooltip anchorSelect=".cat-tooltip" place="top">
                { dialogue }
            </Tooltip>
        </div>
    );
}

    