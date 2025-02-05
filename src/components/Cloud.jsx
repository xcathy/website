import { useEffect, useState } from "react";
import { Specs } from "../constants/Specs";

export function Cloud(image, style, pace, speed) {
    const webView = Specs.screenWidth > 800;
    const [ left, setLeft ] = useState(style.left);
    const loopPoint = webView ? 0.6 * Specs.screenWidth : 0.2 * Specs.screenWidth;

    useEffect(() => {
        setTimeout(() => {
            setLeft(left - (pace ? pace : 0.0));
            if (left <= -loopPoint) {
                setLeft(0.0);
            }
        }, (speed ? speed : 1000)); 
    });

    const cloud = 
        <img
            src={image}
            className="cloud"
            style={{
                position: style.position,
                width: style.width,
                height: style.height,
                top: style.top,
                left: `${ left }px`,
                zIndex: style.zIndex,
            }}
            contentFit="cover"
            transition={1000}
        />;
    return cloud;
}